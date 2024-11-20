import { React, useState, useEffect } from "react";
import axios from "axios";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip as ChartTooltip,
  Legend as ChartLegend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from "chart.js";
import { Pie } from "react-chartjs-2";
import {
  LineChart,
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
} from "recharts";

ChartJS.register(
  ArcElement,
  ChartTooltip,
  ChartLegend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement
);

function AnalysisPage() {
  const [frequentQuestions, setFrequentQuestions] = useState([]);
  const [deviceTypes, setDeviceTypes] = useState([]);
  const [avgResponseTime, setAvgResponseTime] = useState(null);
  const [avgQuestionLength, setAvgQuestionLength] = useState(null);
  const [performanceByDevice, setPerformanceByDevice] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responses = await Promise.all([
          axios.get("http://127.0.0.1:5000/frequent-questions"),
          axios.get("http://127.0.0.1:5000/device-types"),
          axios.get("http://127.0.0.1:5000/avg-response-time"),
          axios.get("http://127.0.0.1:5000/avg-question-length"),
          axios.get("http://127.0.0.1:5000/performance-by-device"),
        ]);

        setFrequentQuestions(responses[0].data);
        setDeviceTypes(responses[1].data);
        setAvgResponseTime(responses[2].data);
        setAvgQuestionLength(responses[3].data);
        setPerformanceByDevice(responses[4].data);
      } catch (err) {
        setError("Error fetching data");
        console.error(err);
      }
    };

    fetchData();
  }, []);

  const deviceTypesData = {
    labels: Object.keys(deviceTypes),
    datasets: [
      {
        label: "Device Type Usage",
        data: Object.values(deviceTypes),
        backgroundColor: ["#4CAF50", "#FFC107", "#03A9F4"],
      },
    ],
  };

  const frequentQuestionsData = Object.keys(frequentQuestions).map((key) => ({
    question: key,
    frequency: frequentQuestions[key],
  }));

  const performanceData = Object.keys(performanceByDevice).map((key) => ({
    name: key,
    performance: performanceByDevice[key],
  }));

  return (
    <div className="p-6 overflow-y-scroll">
      <h1 className="text-3xl font-bold text-center mb-6">
        Analysis Dashboard
      </h1>

      {error && <p className="text-red-600 text-center">{error}</p>}

      <section className="my-8">
        <h2 className="text-2xl font-semibold mb-3">
          Device Types Distribution
        </h2>
        <div className="bg-white p-4 rounded-md shadow-sm w-[500px] h-[500px] mx-auto">
          <Pie data={deviceTypesData} />
        </div>
      </section>

      <section className="my-8 ">
        <h2 className="text-2xl font-semibold mb-3">Frequent Questions</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <BarChart
            width={800}
            height={500}
            data={frequentQuestionsData}
            margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="question" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="frequency" fill="#82ca9d" />
          </BarChart>
        </div>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold mb-3">Performance by Device</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <LineChart
            width={800}
            height={500}
            data={performanceData}
            margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="performance" stroke="#8884d8" />
          </LineChart>
        </div>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold mb-3">Average Metrics</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold">Average Response Time</h3>
            <p className="text-3xl font-bold">
              {avgResponseTime?.average_response_time || "Loading..."} ms
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold">Average Question Length</h3>
            <p className="text-3xl font-bold">
              {avgQuestionLength?.average_question_length || "Loading..."} words
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AnalysisPage;
