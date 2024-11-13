import { React, useState, useEffect } from "react";
import Navbar from "../components/Navbar.js";
import Cardgroup from "../components/Cardgroup.js";
import Footer from "../components/Footer.js";
import ChatPage from "./ChatPage.js";

function Home() {
  const [showChat, setShowChat] = useState(
    () => JSON.parse(localStorage.getItem("showChat")) || false
  );
  const [chatHistory, setChatHistory] = useState(
    JSON.parse(localStorage.getItem("chatHistory")) || []
  );

  useEffect(() => {
    localStorage.setItem("showChat", JSON.stringify(showChat));
    localStorage.setItem("chatHistory", JSON.stringify(chatHistory));
  }, [showChat, chatHistory]);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-300 via-blue-600 to-blue-300">
      <div className="w-[455px] min-h-screen bg-white flex flex-col mx-auto">
        <Navbar />
        {showChat ? (
          <ChatPage setShowChat={setShowChat} chatHistory={chatHistory} />
        ) : (
          <div className="transition-all duration-500 ease-in-out transform -translate-y-4">
            <Cardgroup />
          </div>
        )}
        <Footer
          showChat={showChat}
          setShowChat={setShowChat}
          setChatHistory={setChatHistory}
          chatHistory={chatHistory}
        />
        <div className="    mt-auto">
          <div className=" text-center text-xs text-gray-600 ">
            <span>Powered by </span>
            <img
              src="https://storage.googleapis.com/uiresource/uiresource.ap-south-1.linodeobjects.com/corover-v245/images/logo-white.png"
              className="inline h-3 w-18"
              alt="Logo"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
