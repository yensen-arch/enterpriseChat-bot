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
  device: {
    brand: { type: String },
    model: { type: String },
    type: { type: String },
  },
  resTime: { type: String, required: true },
});

module.exports = mongoose.model("queryData", queryDataSchema);
