const express = require("express");
const router = express.Router({ mergeParams: true });
const bcrypt = require("bcrypt-nodejs");
const User = require("../models/User");
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

module.exports = router;
