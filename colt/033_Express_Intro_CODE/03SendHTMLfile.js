// Import the Express.js and path libraries
const express = require("express");
const path = require("path");

// Create an instance of the Express application
const app = express();
// Define the port for the server to listen on
const port = 3000;

// Serve static files from the 'build' directory
app.use(express.static(path.join(__dirname, "build")));

// Handler for GET request to the root endpoint '/'
app.get("/", (req, res) => {
  // Send the 'index.html' file from the 'build' directory as the response
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log("LISTENING ON PORT 8080");
});
