const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const app = express();

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'mysql@123',
    database : 'HotelManagement'
  });










app.listen(3000, function(){
    console.log("Server running on port 3000");
});