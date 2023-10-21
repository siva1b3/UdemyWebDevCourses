// app.js

const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
app.set("view engine", "ejs");
parentDirectory = path.dirname(__dirname, "..");
app.set("views", path.join(parentDirectory, "07views"));
module.exports = { app, port };
