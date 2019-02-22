const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const fs = require("fs");
const app = express();

// Custom file Import
const Person = require("./dataMemeber");
const member = require("./data/Member");

// Template Engine
app.set("view engine", "ejs");
app.set("views");

// body-parser configuration
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res, next) => {
  res.render("main", { pageTitle: "Home", person: member });
});

// Redirect Route after Save
app.post("/redirect", (req, res, next) => {
  // Logic before Redirect the Request
  const email = req.body.email;
  const name = req.body.name;
  const member = new Person(email, name);
  member.save();

  res.redirect("/");
});

app.listen(3000);
