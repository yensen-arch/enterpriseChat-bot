import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Handle login logic here
    console.log("Logging in with", email, password);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-300 p-4">
      <div className="w-[425px] bg-white rounded-2xl shadow-lg p-6">
        
        <h2 className="text-2xl font-bold text-blue-500 text-center mb-6">
          Login
        </h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Enter your password"
          />
        </div>
        <button
          onClick={handleLogin}
          className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 transition duration-300 shadow-md"
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
