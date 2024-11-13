import React from "react";
import { FaBook } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="h-20 bg-orange-100 w-full">
      <div className="flex justify-between h-16 px-4">
        <img
          src="https://storage.googleapis.com/uiresource/uiresource.ap-south-1.linodeobjects.com/corover-v245/images/logo-white.png"
          className="h-11 w-18 pt-2"
          alt="Logo"
        />
        <div className="relative group">
          <button className="pt-3">
            <FaBook size={24} color="#FF4C00" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
