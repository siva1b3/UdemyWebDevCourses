// index.js

// Import the 'app' and 'port' variables from the 'app' module.
const { app, port } = require("./app");

// Import routes from the 'routes' module.
// Assuming you have defined your routes there.
require("./routes");

// Start the Express application and make it listen on the specified port.
app.listen(port, () => {
  // Log a message to the console when the server is listening.
  console.log("Listening on port " + port);
});
