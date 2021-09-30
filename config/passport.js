const bcrypt = require("bcrypt-nodejs");
const localStrategy = require("passport-local").Strategy;
const connection = require("../config/database");
module.exports = function (passport) {
  passport.use(
    new localStrategy((username, password, done) => {
      connection.query(
        "SELECT * FROM users WHERE username = ?",
        [username],
        function (err, rows) {
          if (err) {
            return done(err);
          }
          if (!rows.length) {
            return done(null, false);
          }
          if (!bcrypt.compareSync(password, rows[0].password)) {
            return done(null, false);
          }
          return done(null, rows[0]);
        }
      );
    })
  );

  passport.serializeUser((user, done) => {
    done(null, user);
  });

  passport.deserializeUser((user, done) => {
    connection.query(
      "SELECT * FROM users WHERE id = ? ",
      [user.id],
      function (err, rows) {
        done(err, rows[0]);
      }
    );
  });
};
