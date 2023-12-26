import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

import Options from "../components/Options/Options";
import Quiz from "../components/Quiz/Quiz";

const config = {
  botName: "FeedBackBot",
  initialMessages: [
    createChatBotMessage(`Hello. How can I help you?`, {
      widget: "options",
    }),
  ],
  widgets: [
    {
      widgetName: "options",
      widgetFunc: (props) => <Options {...props} />,
    },
    {
      widgetName: "addictionQuiz",
      widgetFunc: (props) => <Quiz {...props} />,
      props: {
        questions: [
          {
            question: "What is the purpose of the Police Feedback System?",
            answer:
              "The Police Feedback System aims to gather input from the community to improve police services, enhance accountability, and strengthen trust between law enforcement and the public.",
            id: 1,
          },
          {
            question: "Can I provide feedback on both positive and negative experiences?How can one seek help for drug addiction?",
            answer:
              "Absolutely! The system encourages users to share both positive experiences and concerns. Positive feedback helps recognize commendable actions, while constructive criticism contributes to ongoing improvement efforts.",
            id: 2,
          },
        ],
      },
    },
  ],
};

export default config;
