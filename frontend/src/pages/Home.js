import { React, useState, useEffect } from "react";
import Navbar from "../components/Navbar.js";
import Cardgroup from "../components/Cardgroup.js";
import Carousel from "../components/Carousel.js";
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
    <div className="min-h-screen bg-blue-300">
      <div className="w-[425px] min-h-screen bg-white flex flex-col mx-auto">
        <Navbar />
        {showChat ? (
          <ChatPage setShowChat={setShowChat} chatHistory={chatHistory} />
        ) : (
          <div className="transition-all duration-500 ease-in-out transform -translate-y-4">
            <Carousel />
            <Cardgroup />
          </div>
        )}
        <Footer
          showChat={showChat}
          setShowChat={setShowChat}
          setChatHistory={setChatHistory}
          chatHistory={chatHistory}
        />
      </div>
    </div>
  );
}

export default Home;
