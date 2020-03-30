const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const { ObjectID } = require("mongodb");

const cors = require("cors");
const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://ritik:ritik369@excercisetracker-gncay.mongodb.net/test?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection ");
});

var { User } = require("./models/user.model");
var { Exercise } = require("./models/exercise.model");

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static("public"));
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

//post username to db, get an id in return

// Not found middleware
app.use((req, res, next) => {
  return next({ status: 404, message: "not found" });
});

// Error Handling middleware
app.use((err, req, res, next) => {
  let errCode, errMessage;

  if (err.errors) {
    // mongoose validation error
    errCode = 400; // bad request
    const keys = Object.keys(err.errors);
    // report the first validation error
    errMessage = err.errors[keys[0]].message;
  } else {
    // generic or custom error
    errCode = err.status || 500;
    errMessage = err.message || "Internal Server Error";
  }
  res
    .status(errCode)
    .type("txt")
    .send(errMessage);
});

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
