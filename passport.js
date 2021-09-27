var LocalStrategy = require("passport-local").Strategy;
var passport = require("passport");

passport.use(
  new LocalStrategy(
    { usernameField: "username", passwordField: "password" },
    function (username, password, done) {
      connection.query(
        "select * from users where username = " + username,
        function (err, rows) {
          if (err) {
            console.log(err);
            done(err);
          }
          if (!rows[0]) {
            return done(null, false, { message: "Incorrect username." });
          }

          if (rows[0].password !== password) {
            console.log(rows[0]);
            return done(null, false, { message: "Incorrect password." });
          }
          console.log(rows[0]);
          return done(null, rows[0]);
        }
      );
    }
  )
);

passport.serializeUser(function (user, done) {
  done(null, user);
});
passport.deserializeUser(function (user, done) {
  connection.query(
    "select * from users where username = " + user.username,
    function (err, rows) {
      if (err) {
        console.log(err);
        user = null;
      }
      done(err, rows[0]);
    }
  );
});
module.exports = passport;
