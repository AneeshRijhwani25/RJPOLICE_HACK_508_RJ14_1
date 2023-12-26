const PremiumUser = require("../models/PremiumUser");

exports.upgradeUser = async (req, res) => {
  const options = {
    // Schema is not passed here since it has been passed while creating client
    table: "premium",
    records: [
      {
        username: req.body.username,
      },
    ],
  };
  try {
    // Save the upgraded user in MongoDB
    await PremiumUser.create({ username: req.body.username });

    // Insert into the premium table (assuming this table exists in your database)
    const response = await client.insert(options);
    res.status(200).send(response);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
};
