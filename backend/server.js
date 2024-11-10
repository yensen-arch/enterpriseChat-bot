const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;
const storedQuestions = require("./storedQuestions.js");
const dotenv = require("dotenv").config();
const queryData = require("./dataModels/queryData.js");
const axios = require("axios");
const qs = require("qs");
app.use(cors());
app.use(express.json());

//Server connection
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
//DB connection
const mongoose = require("mongoose");
const e = require("express");
mongoose
  .connect(process.env.DB_STRING, {})
  .then(() => console.log("Connected to MongoDB!"))
  .catch((error) => console.error("MongoDB connection error:", error));



// Function to match question with keywords
const getResponse = (question) => {
  question = question.toLowerCase();
  for (const item of storedQuestions) {
    if (item.keywords.some((keyword) => question.includes(keyword))) {
      return item.response;
    }
  }
  return "Sorry, I didn't understand that.";
};

//api that takes the Q's
app.post("/api/getResponse", async (req, res) => {
  const { question } = req.body;
  if (!question) {
    return res.status(400).json({ error: "Question is required" });
  }
  // const newQuery = new queryData({ question });
  // await newQuery.save().then((savedQuery) => {
  //   console.log("saved to db", savedQuery);
  // });
  try {
    const response = await getResponse(question); // Add await here
    return res.json({ response });
  } catch (error) {
    console.error("Error in getResponse:", error);
    return res.status(500).json({ error: "Failed to get response" });
  }
});


