// Import the necessary dependencies
const express = require("express");
const cors = require("cors");

// Create a new instance of the Express application
const app = express();

// Import the body-parser middleware
const bodyParser = require("body-parser");

// Configure body-parser to handle URL-encoded and JSON data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Enable CORS (Cross-Origin Resource Sharing)
app.use(cors());

// Define a POST endpoint for "/endpoint"
app.post("/endpoint", (req, res) => {
  // Extract the username and password from the request body
  const username = req.body.username;
  const password = req.body.password;

  // Do something with the form data (e.g., log it)
  console.log(
    `Received form data - Username: ${username}, Password: ${password}`
  );

  // Send a response back to the client
  res.send(`Form data received - Username: ${username}, Password: ${password}`);
});

// Start the server and listen on port 8080
app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
