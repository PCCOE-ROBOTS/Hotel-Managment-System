const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
  },
  veg: {
    type: Boolean,
  },
  price: {
    type: String,
    required: true,
  },
  quantiy: {
    type: String,
  },
  description: {
    type: String,
  },
});

module.exports = Item = mongoose.model("Item", ItemSchema);
