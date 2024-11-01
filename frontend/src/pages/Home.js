import { React, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import Navbar from "../components/Navbar.js";
import Cardgroup from "../components/Cardgroup.js";
import Carousel from "../components/Carousel.js";
import Footer from "../components/Footer.js";

function Home() {
  const [showChat, setShowChat] = useState(false);
  const [res, setRes] = useState("");
  const [question, setQuestion] = useState("");
  return (
    <div className="min-h-screen bg-blue-300">
      <div className="w-[425px] min-h-screen  bg-white flex flex-col  mx-auto">
        <Navbar />
        {showChat ? (
          <div className="bg-white flex w-full flex-col flex-grow mx-auto transition-all duration-500 ease-in-out opacity-100 transform translate-y-0">
            <button
              onClick={() => setShowChat(false)}
              className="p-4 w-12 m-4 bg-blue-500 text-white rounded-2xl hover:bg-blue-600 hover:scale-110 transition duration-300 shadow-md"
            >
              <FaArrowLeft />
            </button>
            <div className="self-end bg-slate-400 text-lg text-white px-2 m-2 rounded-lg max-w-xs">
              {question}
            </div>
            <div
              className="flex justify-start mb-2 transition-all duration-500 ease-in-out"
              style={{ maxHeight: res ? "500px" : "0", overflow: "hidden" }}
            >
              <div
                className={`m-2 px-2 text-lg bg-blue-500 text-white rounded-lg max-w-xs break-words transition-opacity duration-500 ${
                  res ? "opacity-100" : "opacity-0"
                }`}
              >
                {res}
              </div>
            </div>
          </div>
        ) : (
          <div className="transition-all duration-500 ease-in-out  transform -translate-y-4">
            <Carousel />
            <Cardgroup />
          </div>
        )}
        <Footer
          showChat={showChat}
          setShowChat={setShowChat}
          setRes={setRes}
          setQuestion={setQuestion}
        />
      </div>
    </div>
  );
}

export default Home;
