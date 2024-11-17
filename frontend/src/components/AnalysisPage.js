import React, { useEffect, useState } from "react";
import { Line, Bar, Doughnut } from "react-chartjs-2";
import { FaChartLine, FaChartBar, FaChartPie } from "react-icons/fa";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  LineElement,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

function AnalysisPage() {
  const [analyticsData, setAnalyticsData] = useState({
    deviceTypes: {},
    avgResponseTime: 0,
    frequentQuestions: {},
    // usageOverTime: {},
    avgQuestionLength: 0,
    performanceByDevice: {},
  });

  useEffect(() => {
    const apiEndpoints = [
      "/device-types",
      "/avg-response-time",
      "/frequent-questions",
      //"/usage-over-time", //500 server error
      "/avg-question-length",
      "/performance-by-device",
    ];

    const fetchData = async () => {
      try {
        const responses = await Promise.all(
          apiEndpoints.map((endpoint) =>
            fetch(`http://localhost:5000${endpoint}`).then((res) => res.json())
          )
        );
        console.log(responses);
        console.log("first");
        setAnalyticsData({
          deviceTypes: responses[0],
          avgResponseTime: responses[1].average_response_time,
          frequentQuestions: responses[2],
          // usageOverTime: responses[3],
          avgQuestionLength: responses[4].average_question_length,
          performanceByDevice: responses[5],
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // Chart.js Data Structures
  const deviceTypesData = {
    labels: Object.keys(analyticsData.deviceTypes || {}),
    datasets: [
      {
        label: "Device Type Distribution",
        data: Object.values(analyticsData.deviceTypes || {}),
        backgroundColor: [
          "#4caf50",
          "#ff9800",
          "#f44336",
          "#2196f3",
          "#9c27b0",
        ],
        borderColor: "#fff",
        borderWidth: 1,
      },
    ],
  };

  const avgResponseTimeData = {
    labels: ["Average Response Time"],
    datasets: [
      {
        label: "Avg Response Time (ms)",
        data: [analyticsData.avgResponseTime],
        backgroundColor: "#ff5722",
      },
    ],
  };

  // const usageOverTimeData = {
  //   labels: Object.keys(analyticsData.usageOverTime),
  //   datasets: [
  //     {
  //       label: "Usage Over Time",
  //       data: Object.values(analyticsData.usageOverTime),
  //       fill: false,
  //       backgroundColor: "#3f51b5",
  //       borderColor: "#3f51b5",
  //       tension: 0.1,
  //     },
  //   ],
  // };

  const performanceByDeviceData = {
    labels: Object.keys(analyticsData.performanceByDevice || {}),
    datasets: [
      {
        label: "Avg Response Time by Device",
        data: Object.values(analyticsData.performanceByDevice || {}),
        backgroundColor: "#4caf50",
        borderColor: "#fff",
        borderWidth: 1,
      },
    ],
  };
  return (
    <div>
      <div className="max-w-7xl mx-auto bg-white p-8 rounded-lg shadow-lg h-[80vh] overflow-y-auto">
        <h1 className="text-3xl font-semibold text-center mb-8 text-gray-800">
          Chatbot Data Analytics
        </h1>

        {/* Device Types - Doughnut Chart */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            <FaChartPie className="inline mr-2 text-xl" />
            Device Type Distribution
          </h2>
          <Doughnut data={deviceTypesData} />
        </div>

        {/* Average Response Time - Bar Chart */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            <FaChartBar className="inline mr-2 text-xl" />
            Average Response Time (ms)
          </h2>
          <Bar data={avgResponseTimeData} />
        </div>

        {/* Usage Over Time - Line Chart */}
        {/* <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            <FaChartLine className="inline mr-2 text-xl" />
            Usage Over Time
          </h2>
          <Line data={usageOverTimeData} />
        </div> */}

        {/* Performance By Device - Bar Chart */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            <FaChartBar className="inline mr-2 text-xl" />
            Performance by Device
          </h2>
          <Bar data={performanceByDeviceData} />
        </div>

        {/* Additional Analytics */}
        <div className="text-center mt-10">
          <p className="text-lg font-medium text-gray-700">
            Average Question Length:{" "}
            {analyticsData.avgQuestionLength.toFixed(2)} characters
          </p>
          <p className="text-lg font-medium text-gray-700 mt-4">
            Frequent Questions:{" "}
          </p>
          <ul className="list-disc list-inside text-gray-600">
            {Object.entries(analyticsData.frequentQuestions).map(
              ([question, count]) => (
                <li key={question} className="text-md">
                  {question}: {count} occurrences
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
export default AnalysisPage;
