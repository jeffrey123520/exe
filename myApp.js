const User = require("./models/user.model");
const Exercise = require("./models/exercise.model");

module.exports = app => {
  app.route("/api/exercise/new-user/").post((req, res) => {
    const username = req.body.username;
    const newUser = new User({ username });
    let x = "";
    newUser
      .save()
      .then(() => {
        console.log("Ritik Dua");
      })
      .catch(err => res.status(400).json("Error: " + err));
    res.send(x);
  });
};
