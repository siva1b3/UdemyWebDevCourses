// Import the Express.js library
const express = require("express");
// Create an instance of the Express application
const app = express();
// Define the port for the server to listen on
const port = 3000;

// Middleware to log incoming requests
app.use((incomingRequest, outgoingResponse, next) => {
  console.log("New incoming request received.");  
  // Log a message indicating a new request
  next();  // Continue to the next middleware in the chain
});

app.get ("/search", function (incomingRequest, outgoingResponse)  {
  console.log(incomingRequest.query);
  outgoingResponse.send(`hi ${JSON.stringify(incomingRequest.query)}`);
});

// Handler for GET request to '/siva/:parameter1' endpoint
app.get("/siva/:parameter1", function (incomingRequest, outgoingResponse) {
  // Extract the parameter1 value from the request params
  const { parameter1 } = incomingRequest.params;
  const incomingParameters = JSON.stringify(incomingRequest.params);
  console.log(parameter1, incomingParameters);
  // Send a response with HTML content including the parameter1 value
  outgoingResponse.send(
    `<h1 style='color:red;'>This is Page of ${parameter1} from ${incomingParameters} </h1>`
  );
});

// Handler for GET request to '/siva/:parameter1/:parameter2' endpoint
app.get(
  "/siva/:parameter1/:parameter2",
  function (incomingRequest, outgoingResponse) {
    // Extract parameter1 and parameter2 values from the request params
    const { parameter1, parameter2 } = incomingRequest.params;
    const incomingParameters = JSON.stringify(incomingRequest.params);
    console.log(parameter1, parameter2);
    // Send a response with HTML content including parameter1 and parameter2 values
    outgoingResponse.send(
      `<h1 style='color:green;'>This is Page of ${parameter1} and subpage of ${parameter2} from ${incomingParameters}</h1>`
    );
  }
);

// Handler for GET request to '/cat' endpoint
app.get("/cat", function (incomingRequest, outgoingResponse) {
  // Send a response with HTML content displaying a cat
  outgoingResponse.send("<h1 style='color:red;'>This is my web page of a cat</h1>");
});

// Handler for GET request to '/dog' endpoint
app.get("/dog", function (incomingRequest, outgoingResponse) {
  // Send a response with HTML content displaying a dog
  outgoingResponse.send("<h1 style='color:red;'>This is my web page of a dog</h1>");
});

// Handler for GET request to the root endpoint '/'
app.get("/", function (incomingRequest, outgoingResponse) {
  // Send a response with HTML content for the home page
  outgoingResponse.send("<h1 style='color:red;'>This is Home web page </h1>");
});

// Handler for POST request to '/cat' endpoint
app.post("/cat", function (incomingRequest, outgoingResponse) {
  // Send a response with HTML content for a POST request
  outgoingResponse.send("<h1 style='color:red;'>This is a post request</h1>");
});

// Handler for any other request not matching the defined endpoints
app.get("*", function (incomingRequest, outgoingResponse) {
  // Send a response for unknown routes
  outgoingResponse.send("<h1 style='color:red;'>This is Wrong stop it</h1>");
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log("LISTENING ON PORT 8080");
});
