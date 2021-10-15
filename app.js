var express = require("express");
var session = require("express-session");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");
var app = express();
var passport = require("passport");
const cors = require("cors");
const connectDB = require("./config/database");
const path = require("path");

connectDB();

app.use(express.static("client/build"));

app.use(cookieParser("secretcode"));
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());

app.use(
  session({
    secret: "Thsissecret",
    cookie: { httpOnly: false },
    resave: true,
    saveUninitialized: true,
  })
);
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(function (req, res, next) {
  res.setHeader(
    "Access-Control-Allow-Methods",
    "POST, PUT, OPTIONS, DELETE, GET"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(passport.initialize());
app.use(passport.session());
require("./config/passport")(passport);

require("./routes/auth.js")(app, passport);
app.use(require("./routes/Records"));
app.use(require("./routes/Rooms"));
app.use(require("./routes/tempRoutes"));
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});
app.listen(process.env.PORT || 8080, (err, res) => {
  if (err) {
    console.log(err);
  }
  console.log("Listening 8080!!");
});
