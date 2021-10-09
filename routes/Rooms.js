const express = require("express");
const Record = require("../models/Record");
const router = express.Router({ mergeParams: true });
const Room = require("../models/Room");
const RoomsBooked = require("../models/RoomsBooked");

router.get("/get-all-rooms", (req, res) => {
  Room.find({})
    .sort({ roomNo: 1 })
    .exec(function (err, rooms) {
      if (err) {
        console.log(err);
        res.send({ status: "error" });
      } else {
        res.send({ status: "success", rooms: rooms });
      }
    });
});
router.post("/book-a-room/:_id", (req, res) => {
  let recordId = req.params._id;
  let roomBookingData = req.body;

  let newRoomBooking = {};
  newRoomBooking.roomNo = roomBookingData.roomNo;
  newRoomBooking.roomId = roomBookingData._id;
  newRoomBooking.noOfDays = roomBookingData.noOfDays;
  newRoomBooking.bookedAt = roomBookingData.bookedAt;
  newRoomBooking.totalPrice =
    parseInt(roomBookingData.roomPricePerDay) *
    parseInt(roomBookingData.noOfDays);

  let bookedRoom = new RoomsBooked(newRoomBooking);
  bookedRoom.save((err, room) => {
    if (err) {
      console.log(err);
      res.send({ status: "error" });
    } else {
      Room.findByIdAndUpdate(
        { _id: roomBookingData._id },
        { bookedStatus: true },
        (err, room) => {
          if (err) {
            console.log(err);
            res.send({ status: "error" });
          } else {
            Record.findById(recordId, (err, record) => {
              if (err) {
                console.log(err);
                res.send({ status: "error" });
              } else {
                record.RoomsBooked.push(bookedRoom._id);
                record.save((err, r) => {
                  if (err) {
                    console.log(err);
                    res.send({ status: "error" });
                  } else {
                    res.send({ status: "success" });
                  }
                });
              }
            });
          }
        }
      );
    }
  });
});

module.exports = router;
