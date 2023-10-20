// app.js

// Import the 'express' module, which is a popular Node.js web framework.
const express = require("express");

// Create an instance of the Express application.
const app = express();

// Import the 'path' module to handle file and directory paths.
const path = require("path");

// Define the port number on which the application will listen.
const port = 3000;

// Set the view engine to EJS (Embedded JavaScript) for rendering templates.
app.set("view engine", "ejs");

// Move one folder up from the current directory using 'path.join' and '__dirname'.
// This assumes that your current file is in a directory, and you want to access a parent directory.
const parentDirectory = path.join(__dirname, "..");

// Set the 'views' directory to the parent directory for EJS templates.
app.set("views", path.join(parentDirectory, "05views"));

// Export the 'app' and 'port' variables.
module.exports = { app, port };
