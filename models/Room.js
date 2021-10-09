const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RoomSchema = new Schema({
  roomNo: {
    type: String,
    required: true,
    unique: true,
  },
  AC: {
    type: Boolean,
    required: true,
  },
  roomPricePerDay: {
    type: Number,
    required: true,
  },
  bookedStatus: {
    type: Boolean,
    required: true,
    default: false,
  },
});

module.exports = User = mongoose.model("Room", RoomSchema);
