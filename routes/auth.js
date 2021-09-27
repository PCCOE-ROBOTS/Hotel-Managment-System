// app/routes.js
var connection = require("../config/database");
module.exports = function (app, passport) {
  app.get("/", function (req, res) {
    //res.render("index.ejs");
  });

  app.get("/login", function (req, res) {
    //res.render("login.ejs", { message: req.flash("loginMessage") });
  });

  // process the login form
  // app.post(
  //   "/login",
  //   passport.authenticate("local-login", {
  //     successRedirect: "/success", // redirect to the secure profile section
  //     failureRedirect: "/failed", // redirect back to the signup page if there is an error
  //   })
  // );

  app.post("/login", (req, res, next) => {
    passport.authenticate("local-login", (err, user, info) => {
      if (err) throw err;
      if (!user) res.send({ msg: req.msg });
      else {
        req.logIn(user, (err) => {
          if (err) throw err;
          res.send({ user: req.user });
          console.log(req.user);
        });
      }
    })(req, res, next);
  });
  // process the signup form
  app.post("/signup", (req, res) => {});

  app.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/");
  });

  app.get("/get_current_user/", (req, res) => {
    console.log(req.user);
    if (req.user) {
    }
    res.send(req.user);
  });
};

// route middleware to make sure
function isLoggedIn(req, res, next) {
  // if user is authenticated in the session, carry on
  if (req.isAuthenticated()) return next();

  // if they aren't redirect them to the home page
  res.redirect("/");
}
