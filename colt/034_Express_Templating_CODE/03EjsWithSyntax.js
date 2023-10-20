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
app.get("/", function (incomingRequest, outgoingResponse) {
  // Render the "02EjsWithJavaScriptCode.ejs" template and send it as a response
  // when a user visits the root URL.
  outgoingResponse.render("02EjsWithJavaScriptCode.ejs");
});

// Start the server and make it listen on the specified port.
app.listen(port, () => {
  // Once the server is running,
  // log a message indicating the port it's listening on.
  console.log("Listening on port " + port);
});
