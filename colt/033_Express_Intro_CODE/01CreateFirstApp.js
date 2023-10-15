const express = require("express");
const app = express();
const port = 3000;

app.use(() => {
  console.log("WE GOT A NEW REQUEST!!");
});

app.listen(port, () => {
  console.log("LISTENING ON PORT 8080");
});
