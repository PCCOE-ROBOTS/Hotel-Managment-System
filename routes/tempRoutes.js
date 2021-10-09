const express = require("express");
const router = express.Router({ mergeParams: true });
const bcrypt = require("bcrypt-nodejs");
const User = require("../models/User");
const Room = require("../models/Room");
const Record = require("../models/Record");
const saltRounds = 10;
const salt = bcrypt.genSaltSync(saltRounds);
router.post("/adduser", (req, res) => {
  let user = req.body;
  let newUser = new User(user);
  newUser.save((err, inserted) => {
    if (err) {
      console.log(err);
    } else {
      console.log(inserted);
      res.send(inserted);
    }
  });
});
router.post("/addroom", (req, res) => {
  let room = req.body;
  let newRoom = new Room(room);
  newRoom.save((err, inserted) => {
    if (err) {
      console.log(err);
    } else {
      console.log(inserted);
      res.send(inserted);
    }
  });
});

module.exports = router;
