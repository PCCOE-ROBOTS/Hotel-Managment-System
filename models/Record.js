const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RecordSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  checkIn: {
    type: String,
    required: true,
  },

  checkOut: {
    type: String,
    required: true,
  },
  createdAt: {
    type: String,
    required: true,
  },
  RoomsBooked: [
    { type: mongoose.Schema.Types.ObjectId, ref: "RoomsBooked", default: null },
  ],
  //   FoodOrdered: [
  //     { type: mongoose.Schema.Types.ObjectId, ref: "FoodOrdered", default: null },
  //   ],
  TotalBill: {
    type: Number,
    default: 0,
  },
});

module.exports = User = mongoose.model("Record", RecordSchema);
