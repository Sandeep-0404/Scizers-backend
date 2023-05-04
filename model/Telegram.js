const mongoose = require("mongoose");

const Product = new mongoose.Schema({
  name: {
    type: String,
  },
  desc: {
    type: String,
  },
  image: {
    type: String,
  },
  count: {
    type: String,
  },
  price: {
    type: String,
  },
  aval: {
    type: Boolean,
  },
});

const TelegramSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  phone: {
    type: String,
  },
  payment: {
    type: String,
  },
  address: {
    type: String,
  },
  products: {
    type: [Product],
  },
});

module.exports = mongoose.model("Telegram", TelegramSchema);
