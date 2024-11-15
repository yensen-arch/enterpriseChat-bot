import { React, useState } from "react";
import {
  FaArrowRight,
  FaRupeeSign,
  FaInfoCircle,
  FaMapMarkerAlt,
  FaHeadset,
  
} from "react-icons/fa";

const buttons = [
  {
    label: "Features",
    icon: <FaArrowRight style={{ color: "blue" }} />,
    bg: "bg-blue-200 shadow-xl",
    hoverBg: "hover:bg-blue-400 transform hover:scale-110",
  },
  {
    label: "Plans",
    icon: <FaRupeeSign style={{ color: "green" }} />,
    bg: "bg-green-200 shadow-xl",
    hoverBg: "hover:bg-green-400 transform hover:scale-110",
  },
  {
    label: "Product Details",
    icon: <FaMapMarkerAlt style={{ color: "yellow" }} />,
    bg: "bg-yellow-300 shadow-xl",
    hoverBg: "hover:bg-yellow-500 transform hover:scale-110",
  },
  {
    label: "Service Status",
    icon: <FaInfoCircle style={{ color: "blue" }} />,
    bg: "bg-blue-200 shadow-xl",
    hoverBg: "hover:bg-blue-400 transform hover:scale-110",
  },
  {
    label: "First & Last Metro",
    icon: <FaArrowRight style={{ color: "pink" }} />,
    bg: "bg-purple-200 shadow-xl",
    hoverBg: "hover:bg-purple-400 transform hover:scale-110",
  },
  {
    label: "Helpdesk",
    icon: <FaHeadset style={{ color: "green" }} />,
    bg: "bg-green-200 shadow-xl",
    hoverBg: "hover:bg-green-500 transform hover:scale-110",
  },
];

const Cardgroup = () => {
  const [text, setText] = useState("");

  return (
    <div className="bg-white transition duration-300 mt-4 ">
      
      <div className="grid grid-cols-2 gap-y-4 p-2">
        {buttons.map(({ label, icon, bg, hoverBg }, index) => (
          <button
            key={index}
            className={`${bg} ${hoverBg} text-black rounded-2xl py-6  justify-center flex mx-4 transition duration-300`}
          >
            <div className="flex items-center">
              {icon}
              <span className="ml-2">{label}</span>
            </div>
          </button>
        ))}
      </div>
      <div className="mt-4 mx-4">
        {/* <button className="flex p-4 rounded-3xl bg-pink-100 w-full justify-center hover:scale-105 transition shadow-xl">
          <h2 className="text-xl text-pink-600 font-semibold">Corover's History</h2>
          <span className="text-pink-600 p-2 ">
            <FaArrowRight />
          </span>
        </button> */}
      </div>
    </div>
  );
};

export default Cardgroup;
