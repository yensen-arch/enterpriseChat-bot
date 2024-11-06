import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
function Login() {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  function getUserOS() {
    const userAgent = navigator.userAgent || window.opera;

    if (/windows phone/i.test(userAgent)) return "Windows Phone";
    if (/android/i.test(userAgent)) return "Android";
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) return "iOS";
    if (/Macintosh|Mac OS X/i.test(userAgent)) return "Mac OS";
    if (/Windows NT/i.test(userAgent)) return "Windows";
    if (/Linux/i.test(userAgent)) return "Linux";

    return "Unknown OS";
  }


  async function reportOSToServer() {  
    const os =  getUserOS();
    try {
      const res=await axios.post("http://localhost:5000/api/os-count", { os });
    } catch (error) {
      console.error("Failed to report OS type:", error);
    }
  }
  
  reportOSToServer();
  
  

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-300 p-4">
      <div className="w-[425px] bg-white rounded-2xl shadow-lg p-6 text-center">
        <h2 className="text-2xl font-bold text-blue-500 mb-6">Login</h2>
        <p className="text-gray-700 mb-6">
          Please sign in to use our services.
        </p>
        <button
          onClick={() =>
            loginWithRedirect(
            )
          }
          disabled={isAuthenticated}
          className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 transition duration-300 shadow-md"
        >
          Log In
        </button>
      </div>
    </div>
  );
}

export default Login;
