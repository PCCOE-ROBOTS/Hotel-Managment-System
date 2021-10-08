const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RoomsBookedSchema = new Schema({
  roomNo: {
    type: Number,
    required: true,
  },
  roomPricePerDay: {
    type: Number,
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
});

module.exports = User = mongoose.model("RoomsBooked", RoomsBookedSchema);
