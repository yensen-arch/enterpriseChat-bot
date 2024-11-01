const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;
const { generateStory } = require("./geminiRoute.js");
const storedQuestions = require("./storedQuestions.js");
const dotenv = require("dotenv").config();
const UserQuery = require("./dataModels/userQueries.js");

app.use(cors());
app.use(express.json());

//Server connection
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
//DB connection
const mongoose = require("mongoose");
mongoose
  .connect(process.env.DB_STRING, {})
  .then(() => console.log("Connected to MongoDB!"))
  .catch((error) => console.error("MongoDB connection error:", error));

//Gemini api
app.post("/api/post-response", async (req, res) => {
  const { prompt } = req.body;
  if (!prompt) {
    res.status(400).json({ error: "Prompt is required" });
    return;
  }
  try {
    const response = await generateStory(prompt);
    res.json(response);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

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
  const newQuery = new UserQuery({ question });
  await newQuery.save().then((savedQuery) => {
    console.log("saved to db", savedQuery);
  });
  const response = getResponse(question);
  res.json({ response });
});
