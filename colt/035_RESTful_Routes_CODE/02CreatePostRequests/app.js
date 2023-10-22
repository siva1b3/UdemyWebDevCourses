const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

app.set("view engine", "ejs");
const parentDirectory = path.dirname(__dirname, "..");
app.set("views", path.join(parentDirectory, "02views"));
module.exports = { express, app, port };
