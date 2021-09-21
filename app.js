const express = require('express');
const bodyParser = require('body-parser');
const mysql2 = require('mysql2');
const app = express();

var connection = mysql2.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'mysql@123',
    database : 'hotelmanagement'
  });


  connection.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
   
    console.log('connected as id ' + connection.threadId);
  });


  connection.query(
      'SELECT  * FROM `example`',
      function(err,results,fields){
        console.log(results); // results contains rows returned by server
        // console.log(fields); // fields contains extra meta data about results, if available
      }

  )





app.listen(3000, function(){
    console.log("Server running on port 3000");
});