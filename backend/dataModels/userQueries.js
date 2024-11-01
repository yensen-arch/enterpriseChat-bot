const mongoose = require("mongoose");

const userQuerySchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
  },

//   userId: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "User",
//     required: false, 
//   },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("UserQuery", userQuerySchema);
