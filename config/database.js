var mysql = require("mysql");
const dotenv = require("dotenv").config();

const connection = mysql.createConnection({
  supportBigNumbers: true,
  bigNumberStrings: true,
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

module.exports = connection;
