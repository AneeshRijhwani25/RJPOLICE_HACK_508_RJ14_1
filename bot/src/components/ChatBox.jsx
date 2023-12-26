import React from "react";
import Chatbot from "react-chatbot-kit";
import config from "../chatbot/config";
import MessageParser from "../chatbot/MessageParser";
import ActionProvider from "../chatbot/ActionProvider";

const ChatBox = ({ onClose }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md fixed bottom-16 right-16 w-96 h-96 overflow-hidden">
      <button
        onClick={onClose}
        className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
      >
        Close
      </button>
      <div className="h-full overflow-y-auto">
        <Chatbot
          config={config}
          messageParser={MessageParser}
          actionProvider={ActionProvider}
        />
      </div>
    </div>
  );
};

export default ChatBox;
