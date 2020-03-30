const User=require("./models/user.model");
const Exercise=require("./models/exercise.model");


module.exports = app => {
  
  app.route("/api/exercise/new-user").post((req, res) => {
  i
    
    
    res.send("" + req.body.username);
  
  });
};
