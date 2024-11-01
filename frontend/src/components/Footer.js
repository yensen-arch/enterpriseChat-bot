import { React, useState } from "react";
import { FaSearch } from "react-icons/fa";
import axios from "axios";

const Footer = ({ setShowChat, setRes,setQuestion }) => {
  const [text, setText] = useState("");

  const handleSubmit = () => {
    axios
      .post("http://localhost:5000/api/getResponse", {
        question: text,
      })
      .then((res) => {
        setRes(res.data.response);
        setQuestion(text);
        setText("");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <div className="m-4 border border-gray-500 rounded-3xl mx-4 flex">
        <input
          type="text"
          value={text}
          placeholder="Learn about Corover here..."
          className="p-2 mx-4 w-full outline-none rounded-3xl"
          onChange={(e) => setText(e.target.value)}
          onFocus={() => setShowChat(true)}
          onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
        />
        <button
          onClick={handleSubmit}
          className="ml-2 text-gray-800 rounded-md p-2 transition duration-300"
        >
          <FaSearch />
        </button>
      </div>
    </div>
  );
};

export default Footer;
