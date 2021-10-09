const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RoomsBookedSchema = new Schema({
  roomId: {
    type: String,
    required: true,
  },
  roomNo: {
    type: String,
    required: true,
  },
  noOfDays: {
    type: Number,
    required: true,
  },
  totalPrice: {
    type: Number,
    default: 0,
  },
  bookedAt: {
    type: String,
  },
});

module.exports = User = mongoose.model("RoomsBooked", RoomsBookedSchema);
