import React from "react";
import { FaBook, FaSignInAlt } from "react-icons/fa";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const { logout, isAuthenticated } = useAuth0();
  return (
    <div className="h-16 bg-orange-200 w-full">
      <div className="flex justify-between h-16 px-4">
        <img
          src="https://storage.googleapis.com/uiresource/uiresource.ap-south-1.linodeobjects.com/corover-v245/images/logo-white.png"
          className="h-11 w-18 p-2"
          alt="Logo"
        />
        <div className="relative group">
          <button className="p-2">
            <FaBook size={24} color="#FF4C00" />
          </button>
          <button
            className="p-2"
            onClick={() => logout({ returnTo: window.location.origin })}
          >
            <FaSignInAlt size={24} color="#FF4C00" />
          </button>
          <span className="absolute left-0 z-10  hidden group-hover:block bg-white text-black text-md px-2 py-1 rounded">
            Logout
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
