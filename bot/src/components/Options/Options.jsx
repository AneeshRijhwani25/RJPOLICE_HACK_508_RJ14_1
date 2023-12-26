import React from "react";

import "./Options.css";

const Options = (props) => {
  const options = [
    {
      text: "What is this system all about?",
      handler: props.actionProvider.provideAddictionInfo,
      id: 1,
    },
    {
      text: "FAQ's",
      handler: props.actionProvider.handleAddictionQuiz,
      id: 2,
    },
    
  ];

  const buttonsMarkup = options.map((option) => (
    <button key={option.id} onClick={option.handler} className="option-button">
      {option.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default Options;
