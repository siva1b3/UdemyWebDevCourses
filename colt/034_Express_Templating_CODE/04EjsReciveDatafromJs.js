// Import the Express.js framework and create an Express application.
const express = require("express");
const app = express();

// Import the 'path' module to work with file and directory paths.
const path = require("path");

// Define the port number where the server will listen for incoming requests.
const port = 3000;

// Set the view engine to EJS (Embedded JavaScript),
// which is a template engine for rendering dynamic HTML content.
app.set("view engine", "ejs");

// Set the 'views' directory for EJS templates.
// This is where Express will look for template files.
app.set("views", path.join(__dirname, "views"));

// Define a route for handling HTTP GET requests to the root URL ("/").
app.get("/", function (req, res) {
  // Render the "02EjsWithJavaScriptCode.ejs" template and send it as a response
  // when a user visits the root URL.
  res.render("02EjsWithJavaScriptCode.ejs");
});

// Define a new route for handling HTTP GET requests to "/random".
app.get("/random", function (req, res) {
  // Generate two random numbers between 0 and 100.
  const randomNumber1 = Math.floor(Math.random() * 100);
  const randomNumber2 = Math.floor(Math.random() * 100);

  // Render the "03ReciveDataFromjs.ejs" template and send it as a response,
  // passing the random numbers as data to the template.
  res.render("03ReciveDataFromjs", { rand: randomNumber1, randomNumber2 });
});

// Start the server and make it listen on the specified port.
app.listen(port, () => {
  // Once the server is running,
  // log a message indicating the port it's listening on.
  console.log("Listening on port " + port);
});
