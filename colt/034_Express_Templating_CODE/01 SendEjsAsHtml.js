// Import the Express.js framework and create an Express application.
const express = require("express");
const app = express();

// Define the port number where the server will listen for incoming requests.
const port = 3000;

// Set the view engine to EJS (Embedded JavaScript),
// which is a template engine for rendering dynamic HTML content.
app.set("view engine", "ejs");

// Define a route for handling HTTP GET requests to the root URL ("/").
app.get("/", function (incommingRequest, outgoingResponse) {
  // Render the "01PlainHome.ejs" template and send it as a response
  // when a user visits the root URL.
  outgoingResponse.render("01PlainHome.ejs");
});

// Start the server and make it listen on the specified port.
app.listen(port, () => {
  // Once the server is running,
  // log a message indicating the port it's listening on.
  console.log("listening on port " + port);
});
