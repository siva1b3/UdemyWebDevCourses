const express = require("express");
const app = express();
const port = 3000;

app.use((incommingRequest, outgoingResponse) => {
  console.log("WE GOT A NEW REQUEST!!");
  outgoingResponse.send("<h1 style='color:red;'>This is my web page</h1>");
});

app.listen(port, () => {
  console.log("LISTENING ON PORT 8080");
});
