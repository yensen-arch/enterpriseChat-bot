require("dotenv").config();
const { GoogleGenerativeAI } = require("@google/generative-ai");

async function generateStory(prompt) {
  const genAI = new GoogleGenerativeAI(process.env.API_KEY);
  const model = await genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  const result = await model.generateContent(prompt);
  return result.response.text();
}

module.exports = {
  generateStory,
};
