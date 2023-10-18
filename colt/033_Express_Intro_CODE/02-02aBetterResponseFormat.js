const express = require('express');
const app = express();
const PORT = 3000;

app.use((incomingRequest, outgoingResponse) => {
  console.log("WE GOT A NEW REQUEST!!");
});

app.get('/', (incomingRequest, outgoingResponse) => {
  outgoingResponse.send("<h1 style='color:red;'>This is my web page</h1>");
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
