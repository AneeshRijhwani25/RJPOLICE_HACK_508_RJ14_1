const mongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  feedback: {
    type: String,
    required: true,
  },
  smiley: {
    type: String,
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

const Feedback = mongoose.model("Feedback", feedbackSchema);

module.exports = Feedback;
