const mongoose = require("mongoose");

const queryDataSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  os: { type: String, required: true },
  device: { type: String, required: true },
  resTime: { type: Number, required: true }, 
});

module.exports = mongoose.model("queryData", queryDataSchema);
