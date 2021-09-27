var LocalStrategy = require("passport-local").Strategy;
var bcrypt = require("bcrypt-nodejs");
var connection = require("./database");

module.exports = function (passport) {
  passport.serializeUser(function (user, done) {
    done(null, user);
  });

  // used to deserialize the user
  passport.deserializeUser(function (user, done) {
    connection.query(
      "SELECT * FROM users WHERE id = ? ",
      [user.id],
      function (err, rows) {
        done(err, rows[0]);
      }
    );
  });

  passport.use(
    "local-signup",
    new LocalStrategy(
      {
        usernameField: "username",
        passwordField: "password",
        passReqToCallback: true, // allows us to pass back the entire request to the callback
      },
      function (req, username, password, done) {
        connection.query(
          "SELECT * FROM users WHERE username = ?",
          [username],
          function (err, rows) {
            if (err) return done(err);
            if (rows.length) {
              return done(
                null,
                false,
                (req.msg = "That username is already taken.")
              );
            } else {
              // if there is no user with that username
              // create the user
              var newUserMysql = {
                username: username,
                password: bcrypt.hashSync(password, null, null), // use the generateHash function in our user model
              };

              var insertQuery =
                "INSERT INTO users ( username, password ) values (?,?)";

              connection.query(
                insertQuery,
                [newUserMysql.username, newUserMysql.password],
                function (err, rows) {
                  newUserMysql.id = rows.insertId;

                  return done(null, newUserMysql);
                }
              );
            }
          }
        );
      }
    )
  );

  // =========================================================================
  // LOCAL LOGIN =============================================================
  // =========================================================================
  // we are using named strategies since we have one for login and one for signup
  // by default, if there was no name, it would just be called 'local'

  passport.use(
    "local-login",
    new LocalStrategy(
      {
        // by default, local strategy uses username and password, we will override with email
        usernameField: "username",
        passwordField: "password",
        passReqToCallback: true, // allows us to pass back the entire request to the callback
      },
      function (req, username, password, done) {
        // callback with email and password from our form

        connection.query(
          "SELECT * FROM users WHERE username = ?",
          [username],
          function (err, rows) {
            if (err) return done(err);
            if (!rows.length) {
              return done(null, false, (req.msg = "No user found")); // req.flash is the way to set flashdata using connect-flash
            }

            // if the user is found but the password is wrong
            if (!bcrypt.compareSync(password, rows[0].password))
              return done(null, false, (req.msg = "Oops,wrong password")); // create the loginMessage and save it to session as flashdata

            // all is well, return successful user
            return done(null, rows[0]);
          }
        );
      }
    )
  );
};
