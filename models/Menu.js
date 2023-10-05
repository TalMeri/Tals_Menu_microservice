const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const menuSchema = new Schema({
  image: String,
  price: String,
  description: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Menu", menuSchema);
