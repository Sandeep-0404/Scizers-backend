const mongoose = require("mongoose");

const Schema = new mongoose.Schema({
  name: {
    type: String,
    lowercase: true,
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
});

module.exports = mongoose.model("Scizer", Schema);
