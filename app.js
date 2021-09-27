var express = require("express");
var session = require("express-session");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");
var app = express();
var passport = require("passport");
const cors = require("cors");

require("./config/passport")(passport); // pass passport for configuration
app.use(cookieParser()); // read cookies (needed for auth)
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());

app.use(
  session({
    secret: "vidyapathaisalwaysrunning",
    cookie: { httpOnly: false },
    resave: true,
    saveUninitialized: true,
  })
); // session secret
app.use(cors());

app.use(function (req, res, next) {
  //allow cross origin requests
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

app.get("/success", (req, res) => {
  console.log(req.user);
  res.send({ status: "success", user: req.user });
});
app.get("/failed", (req, res) => {
  console.log(req.msg);
  res.send({ status: "failed", msg: req.msg });
});
app.post("/success", (req, res) => {
  console.log(req.user);
  res.send({ status: "success", user: req.user });
});
app.post("/failed", (req, res) => {
  console.log(req.msg);
  res.send({ status: "failed", msg: req.msg });
});

require("./routes/auth.js")(app, passport); // load our routes and pass in our app and fully configured passport

app.listen(process.env.PORT || 8080, (err, res) => {
  if (err) {
    console.log(err);
  }
  console.log("Listening 8080!!");
});
