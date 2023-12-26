const connectToMongoDB = require("../config/dbconfig");
const Feedback = require("../models/Feedback");

exports.sendFeedback = async (req, res) => {
  try {
    const feedback = new Feedback({
      username: req.body.username,
      feedback: req.body.feedback,
      smiley: req.body.smiley,
    });

    // Save the feedback document to the database
    await feedback.save();

    res.status(201).json(feedback);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

exports.retrieveFeedBack = async (req, res) => {
  try {
    // Find all feedbacks for a given username
    const userFeedback = await Feedback.find({ username: req.body.username });

    res.status(200).json(userFeedback);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

exports.deleteFeedback = async (req, res) => {
  try {
    // Find and delete a feedback by ID
    const result = await Feedback.findByIdAndDelete(req.body.id);

    if (result) {
      res.status(200).send("Feedback deleted successfully");
    } else {
      res.status(404).send("Feedback not found");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};
