const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to log incoming requests
app.use((incomingRequest, outgoingResponse, next) => {
  console.log("New incoming request received.");  
  // Log a message indicating a new request
  next();  // Continue to the next middleware in the chain
});


app.get('/', (incomingRequest, outgoingResponse) => {
  outgoingResponse.send("<h1 style='color:red;'>This is my web page</h1>");
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
