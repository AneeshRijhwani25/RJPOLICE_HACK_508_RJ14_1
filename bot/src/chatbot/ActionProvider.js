class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  greet = () => {
    const message = this.createChatBotMessage("Hello! How can I assist you?");
    this.addMessageToState(message);
  };

  provideAddictionInfo = () => {
    const message = this.createChatBotMessage(
      "Your voice matters – empower positive change and strengthen community bonds by sharing your experiences through the feedback form today.",
    );
    this.addMessageToState(message);
  };

  handleAddictionQuiz = () => {
    const message = this.createChatBotMessage(
      "Popular questions",
      {
        widget: "addictionQuiz",
      }
    );

    this.addMessageToState(message);
  };

  addMessageToState = (message) => {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };
}

export default ActionProvider;
