const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");
const fs = require("fs");
const path = require("path");
const dbName = "emails";
// const UserModel = require("./model/User");
const old_uri = "mongodb://localhost:27017/";
const uri =
  "mongodb+srv://ohad:167761@cluster0.yxxoc.mongodb.net/emails?retryWrites=true&w=majority";
const config = {
  mongoURL: process.env.MONGO_URL || uri,
  port: 8000,
};

//setup database
mongoose.Promise = global.Promise;
// MongoDB Connection
if (process.env.NODE_ENV !== "test") {
  mongoose.connect(config.mongoURL, { useNewUrlParser: true }, (error) => {
    if (error) {
      console.error("Please make sure Mongodb is installed and running!");
      throw error;
    } else console.log("connected to database!");
  });
}

const app = express();

//body parser for json. must be done before API routes
app.use(bodyParser.json({ limit: "50mb", extended: true }));
app.use(bodyParser.urlencoded({ extended: false })); //handle body requests
console.log(__dirname);
app.use(express.static(path.join(__dirname, "public")));

// Add backend api routes
fs.readdirSync(__dirname + "/api").forEach((file) => {
  file.indexOf(".") >= 0
    ? require(`./api/${file.substr(0, file.indexOf("."))}`)(app)
    : false;
});

// app.listen(config.port || 8000, () =>
//   console.log(`Listening on port ${process.env.PORT || 8000}!`)
// );
