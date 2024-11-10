import { React, useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import axios from "axios";
import DeviceDetector from "device-detector-js";

const Footer = ({ setShowChat, setChatHistory, chatHistory }) => {
  const [text, setText] = useState("");
  const [deviceInfo, setDeviceInfo] = useState({});

  const userAgent = navigator.userAgent || window.opera;
  const deviceDetector = new DeviceDetector();
  const device = deviceDetector.parse(userAgent);

  const handleSubmit = async () => {
    if (text) {
      try {
        const response = await axios.post("http://localhost:5000/api/getResponse", {
          question: text,
        });
        setChatHistory([...chatHistory, { question: text, response: response.data.response }]);
      } catch (error) {
        console.error(error);
      }
      setText("");
    }
  };

  useEffect(() => {
    setDeviceInfo({
      brand: device.device.brand || "Unknown Brand",
      model: device.device.model || "Unknown Model",
      type: device.device.type || "Unknown Type",
    });
  }, [device.device.brand, device.device.model, device.device.type]);

  function getUserOS() {
    if (/windows phone/i.test(userAgent)) return "Windows Phone";
    if (/android/i.test(userAgent)) return "Android";
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) return "iOS";
    if (/Macintosh|Mac OS X/i.test(userAgent)) return "Mac OS";
    if (/Windows NT/i.test(userAgent)) return "Windows";
    if (/Linux/i.test(userAgent)) return "Linux";
    return "Unknown OS";
  }
  const os = getUserOS();

  return (
    <div>
      <div className="m-4 border border-gray-500 rounded-3xl mx-4 flex">
        <input
          type="text"
          value={text}
          placeholder="Learn about Corover here..."
          className="p-2 mx-4 w-full outline-none rounded-3xl"
          onChange={(e) => setText(e.target.value)}
          onFocus={() => setShowChat(true)}
          onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
        />
        <button
          onClick={handleSubmit}
          className="ml-2 text-gray-800 rounded-md p-2 transition duration-300"
        >
          <FaSearch />
        </button>
      </div>
    </div>
  );
};

export default Footer;
