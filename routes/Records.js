const express = require("express");
const router = express.Router({ mergeParams: true });

const Record = require("../models/Record");
const User = require("../models/User");
const RoomsBooked = require("../models/RoomsBooked");

router.post("/add-new-record", (req, res) => {
  let newRecord = new Record(req.body);
  newRecord.save((err, inserted) => {
    if (err) {
      console.log(err);
      res.send({ status: "error" });
    } else {
      res.send({ status: "success" });
    }
  });
});

router.get("/get-all-records", (req, res) => {
  Record.find({}, (err, records) => {
    if (err) {
      console.log(err);
      res.send({ status: "error" });
    } else {
      res.send({ status: "success", records: records });
    }
  });
});
router.get("/get-record/:_id", (req, res) => {
  Record.findById(req.params._id, (err, record) => {
    if (err) {
      console.log(err);
      res.send({ status: "error" });
    } else {
      res.send({ status: "success", record: record });
    }
  });
});
router.post("/delete-record", (req, res) => {
  Record.deleteOne(req.body, (err, deleted) => {
    if (err) {
      console.log(err);
      res.send({ status: "error" });
    } else {
      res.send({ status: "success" });
    }
  });
});

module.exports = router;
