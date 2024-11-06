const mongoose = require("mongoose");

const osTypeSchema = new mongoose.Schema({
  os: { type: String, required: true }, 
  count: { type: Number, default: 0 },                    
});

module.exports = mongoose.model("osType", osTypeSchema);
