import { React, useState, useEffect } from "react";
import Navbar from "../components/Navbar.js";
import Cardgroup from "../components/Cardgroup.js";
import Footer from "../components/Footer.js";
import ChatPage from "./ChatPage.js";
import VideoGallery from "../components/VideoGallery.js";

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
      <div className="w-[455px] h-screen bg-white flex flex-col mx-auto">
        <Navbar />
        <div className="flex-grow relative">
          {showChat ? (
            <div className="absolute w-full h-full opacity-0 translate-y-4 transition-all duration-500 ease-in-out opacity-100 translate-y-0">
              <ChatPage setShowChat={setShowChat} chatHistory={chatHistory} />
            </div>
          ) : (
            <div className="absolute w-full h-full opacity-100 translate-y-0 transition-all duration-500 ease-in-out opacity-0 -translate-y-4">
              <VideoGallery />
              <Cardgroup />
            </div>
          )}
        </div>

        <Footer
          showChat={showChat}
          setShowChat={setShowChat}
          setChatHistory={setChatHistory}
          chatHistory={chatHistory}
        />
        <div className="mt-auto py-2 text-center text-xs text-gray-600 border-t border-gray-300">
          <span>Powered by </span>
          <img
            src="https://storage.googleapis.com/uiresource/uiresource.ap-south-1.linodeobjects.com/corover-v245/images/logo-white.png"
            className="inline h-3 w-auto"
            alt="Logo"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
