// load up the dotenv file here
// load up the .env file
require("dotenv").config();
require("express-async-errors");

// create app
const express = require("express");
const {sendEmail, resetEmail} = require("./controller/sendEmail");
const app = express();

// use the json middleware
app.use(express.json());
app.use(express.static("./public"));

// create a path for home that reutrn an h1 with EMAIL PROJECT and an anchor witha n href to /send taht sats SEND EMAIL
app.get("/", (req, res) =>
  res.send('<h1>Email Project </h1> <a href="/send>send mail </a>')
);
app.get("/send", sendEmail);
app.get("/reset", resetEmail);

// create your port variab;e
const port = process.env.PORT || 3000;

// create your app startup function
const start = () => {
  try {
    app.listen(port, () => {
      console.log(`listening @ ${port}`);
    });
  } catch (err) {
    console.log(err);
  }
};

start();
