const passport = require("passport");

// export a function to wrap the app and the routes together
module.exports = app => {
  app.get("/api/test", (req, res) => {
    res.send("Are you OK?");
  });

  app.get("/api/user", (req, res) => {
    user = {
      name:"ben"
    }
    res.json(user);
  });
};
