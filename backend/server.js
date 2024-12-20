const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5050;
const storedQuestions = require("./storedQuestions.js");
const dotenv = require("dotenv").config();
const queryData = require("./dataModels/queryData.js");
const axios = require("axios");
const qs = require("qs");
const Fuse = require("fuse.js");
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

const options = {
  keys: ["keywords"], // Fields to search in
  threshold: 0.6  ,     // Fuzzy match threshold (lower = stricter match)
  includeScore: true, // Include match score for ranking
};

const fuse = new Fuse(storedQuestions, options);

const getResponse = (question) => {
  question = question.toLowerCase();
  const results = fuse.search(question); // Perform the search
  if (results.length > 0) {
    return results[0].item.response; // Return the best match response
  } else {
    return "Sorry, I didn't understand that.";
  }


  // for (const item of storedQuestions) {
  //   if (item.keywords.some((keyword) => question.includes(keyword))) {
  //     return item.response;
  //   }
  // }
  // return "Sorry, I didn't understand that.";
};

//api that takes the Q's
app.post("/api/getResponse", async (req, res) => {
  const { question, requestTime } = req.body;
  if (!question) {
    return res.status(400).json({ error: "Question is required" });
  }
  try {
    const response = await getResponse(question); 
    const responseTime = Date.now() - requestTime;
    return res.json({ response });
  } catch (error) {
    console.error("Error in getResponse:", error);
    return res.status(500).json({ error: "Failed to get response" });
  }
});

//api to save user details to db
app.post("/api/saveUserDetails", async (req, res) => {
  let { os, device, resTime, question, answer } = req.body;
  resTime = String(resTime) || 0;
  if (!os || !device || !resTime || !question || !answer) {
    return res.status(400).json({ error: "All fields are required" });
  }
  try {
    const newQuery = new queryData({ os, device, resTime, question, answer });
    await newQuery.save().then((savedQuery) => {
      console.log("saved to db", savedQuery);
    });
    return res.json({ message: "User details saved successfully" });
  } catch (error) {
    console.error("Error in saveUserDetails:", error);
    return res.status(500).json({ error: "Failed to save user details" });
  }
});
