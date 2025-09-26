"use strict";
const path = require("path");
const express = require("express");
const morgan = require("morgan"); // HTTP request logger middleware
const { engine } = require("express-handlebars"); // Template engine
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "public"))); // cau hinh thu muc chua file tinh

app.use(morgan("combined")); // cau hinh su dung morgan

// Template engine

app.engine("hbs", engine({ extname: ".hbs" })); // cau hinh su dung handlebars
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views")); // cau hinh thu muc chua file view

// Routes
app.get("/", (req, res) => {
  res.render("home");
});
app.get("/news", (req, res) => {
  res.render("news");
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
