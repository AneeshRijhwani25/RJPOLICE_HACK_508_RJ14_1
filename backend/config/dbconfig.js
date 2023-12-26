const { MongoClient } = require("mongodb");

// Dotenv package to enable environment variables in .env
require("dotenv").config();

// MongoDB connection URI
const mongoURI = process.env.MONGODB_URI;

// Create a new MongoClient
const client = new MongoClient(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

// Function to connect to MongoDB
async function connectToMongoDB() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");
    return client.db(); 
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error;
  }
}

// Export the function for reuse
module.exports = connectToMongoDB;