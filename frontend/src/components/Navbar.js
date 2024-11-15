import React from "react";
import { FaBook, FaHome, FaUserCircle, FaChartPie, FaCog } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="min-h-20 z-10 w-full bg-gradient-to-r from-blue-800 via-blue-600 to-blue-800 shadow-md">
      <div className="flex justify-between items-center h-full px-6">
        {/* Logo */}
        <div>
          <img
            src="https://storage.googleapis.com/uiresource/uiresource.ap-south-1.linodeobjects.com/corover-v245/images/logo-white.png"
            className="h-10 w-auto"
            alt="Logo"
          />
        </div>

        {/* Navigation Icons */}
        <div className="flex space-x-6 text-white">
          <button className="flex flex-col items-center">
            <FaHome size={22} />
          </button>
          
         
          <button className="flex flex-col items-center">
            <FaChartPie size={22} />
          </button>
          <button className="flex flex-col items-center">
            <FaCog size={22} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
