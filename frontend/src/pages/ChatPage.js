import { React } from "react";
import { FaArrowLeft } from "react-icons/fa";




function ChatPage({ setShowChat, chatHistory }) {
  return (
    <>
    <div className="bg-white flex w-full flex-col flex-grow mx-auto p-4 transition-all duration-500 ease-in-out">
      <div
        className="flex flex-col gap-2 overflow-y-scroll min-h-[560px] max-h-[560px] custom-scrollbar"
        style={{
          scrollbarWidth: "thin",
          scrollbarColor: "#ccc #f9f9f9",
        }}
      >
        <button
          onClick={() => setShowChat(false)}
          className="absolute p-4 mx-4 bg-blue-500 text-white rounded-2xl hover:bg-blue-600 hover:scale-110 transition duration-300 shadow-md"
        >
          <FaArrowLeft />
        </button>

        {/* Render each question and response */}

        {chatHistory.map((chat, index) => (
          <div key={index} className="flex flex-col gap-2 mb-2">
            {/* Question on left */}
            <div className="self-end bg-gray-300 text-lg text-black px-2 py-1 rounded-lg max-w-xs">
              {chat.question}
            </div>
            {/* Response on right */}
            <div className="self-start bg-blue-500 text-lg text-white px-2 py-1 rounded-lg max-w-xs">
              {chat.response}
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default ChatPage;
