// aboutRoute.js

// Import the 'app' variable from the 'app' module.
const { app } = require("../app");

// Define a route handler for handling HTTP GET requests to "/about".
app.get("/about", function (req, res) {
  // Render the "about.ejs" template and send it as a response.
  res.render("about");
});
