class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    console.log(message);
    const lowercase = message.toLowerCase();

    if (lowercase.includes("hello") || lowercase.includes("hi")|| lowercase.includes("hii")) {
      this.actionProvider.greet();
    }

    if (lowercase.includes("feedback") || lowercase.includes("form")) {
      this.actionProvider.provideAddictionInfo();
    }

    if (lowercase.includes("quiz")) {
      this.actionProvider.handleAddictionQuiz();
    }
  }
}

export default MessageParser;
