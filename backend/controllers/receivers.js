const axios = require("axios");
const User = require("../models/User");

// Get all registered users from clerk
exports.getAllReceivers = async (req, res) => {
  try {
    // Retrieve registered users from clerk
    const { data } = await axios.get(`${process.env.CLERK_API}/v1/users`, {
      headers: { Authorization: `Bearer ${process.env.CLERK_SECRET_KEY}` },
    });

    // Save or update users in MongoDB
    await User.insertMany(data);

    res.status(200).send(data);
  } catch (error) {
    console.error(error);
    res.status(500).json("Something went wrong");
  }
};

// Get all registered users from MongoDB
exports.findReceiver = async (req, res) => {
  try {
    // Find the requested receiver in MongoDB
    const findReceiver = await User.findOne({ username: req.body.username });

    if (!findReceiver) {
      res.status(404).json({ message: "Receiver not found" });
      return;
    }

    // Send the receiver username back - not all details
    res.status(200).send(findReceiver.username);
  } catch (error) {
    console.error(error);
    res.status(500).json("Something went wrong");
  }
};
