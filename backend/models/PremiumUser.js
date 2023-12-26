const mongoose = require("mongoose");

const premiumUserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
});

const PremiumUser = mongoose.model("PremiumUser", premiumUserSchema);

module.exports = PremiumUser;
