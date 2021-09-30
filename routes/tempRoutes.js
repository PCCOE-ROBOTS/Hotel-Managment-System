const express = require("express");
const router = express.Router({ mergeParams: true });
const bcrypt = require("bcrypt-nodejs");
const connection = require("../config/database");
const saltRounds = 10;
const salt = bcrypt.genSaltSync(saltRounds);
router.post("/adduser", (req, res) => {
  let user = req.body;
  let hashedPassword = bcrypt.hashSync(user.password, salt);
  user.password = hashedPassword;
  connection.query(
    "INSERT INTO users (username,password) VALUES (?,?)",
    [user.username, hashedPassword],
    function (err, inserted) {
      if (err) {
        console.log(err);
        res.send(err);
      } else {
        res.send(inserted);
      }
    }
  );
});

module.exports = router;
