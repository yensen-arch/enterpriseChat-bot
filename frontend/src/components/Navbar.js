import React from "react";
import {FaBook,FaSignInAlt} from "react-icons/fa";
import { useNavigate } from "react-router-dom";


const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="h-16 bg-orange-200 w-full">
      <div className="flex justify-between h-16 px-4">
        <img
          src="https://storage.googleapis.com/uiresource/uiresource.ap-south-1.linodeobjects.com/corover-v245/images/logo-white.png"
          className="h-11 w-18 p-2"
        ></img>
        <div>
        <button className="p-2"><FaBook size={24} color="#FF4C00"/></button>
        <button className="p-2" onClick={() => navigate("/login")}><FaSignInAlt size={24} color="#FF4C00"/></button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
