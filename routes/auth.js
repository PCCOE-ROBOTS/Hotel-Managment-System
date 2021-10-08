module.exports = function (app, passport) {
  app.post("/login", (req, res, next) => {
    passport.authenticate("local", (err, user, info) => {
      if (err) throw err;
      if (!user) res.send("No User Exists");
      else {
        req.logIn(user, (err) => {
          if (err) throw err;
          res.send({ status: "success", user });
        });
      }
    })(req, res, next);
  });

  app.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/");
  });

  app.get("/get_current_user/", (req, res) => {
    if (req.user) {
      res.send(req.user);
    } else {
      res.send({ status: "error" });
    }
  });
};
