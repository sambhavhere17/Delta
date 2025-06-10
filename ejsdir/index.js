const express = require("express");
const app = express();
const port = 8080;
const path = require("path");

app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
  res.send("This is home");
  console.log("request recived");
});

app.get("/apple", (req, res) => {
  res.render("home.ejs");
  console.log("request recived for apple");
});

app.listen(port, () => {
  console.log(`listenning on port ${port}`);
});
