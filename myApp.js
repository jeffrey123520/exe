const User = require("./models/user.model");
const Exercise = require("./models/exercise.model");

module.exports = app => {
  app.route("/api/exercise/new-user").post((req, res) => {
    let x = "kkk";
    User.findOne({ username: req.body.username }).then(() => {
      x = "Found";
    });
    if (x == "kkk") {
      const username = req.body.username;
      const newUser = new User({ username });
      newUser
        .save()
        .then(() => (x = "addded"))
        .catch(err => res.status(400).json("Error"));
    }
    res.send("" + x);
  });
};
