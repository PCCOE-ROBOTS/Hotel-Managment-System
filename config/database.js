var mysql = require("mysql");

const connection = mysql.createConnection({
  supportBigNumbers: true,
  bigNumberStrings: true,
  host: "localhost",
  user: "root",
  password: "Tejas123",
  database: "hotel_management_system",
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

module.exports = connection;
