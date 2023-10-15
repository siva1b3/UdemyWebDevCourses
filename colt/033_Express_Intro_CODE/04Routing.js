const express = require('express');
const app = express();
const port = 3000;

// app.use((incommingRequest, outgoingResponse) => {
//   console.log("WE GOT A NEW REQUEST!!");
//   outgoingResponse.send("<h1 style='color:red;'>This is my web page</h1>");
// });

app.get('/cat', function (incommingRequest, outgoingResponse) {
  outgoingResponse.send(
    "<h1 style='color:red;'>This is my web page of a cat</h1>"
  );
});

app.get('/dog', function (incommingRequest, outgoingResponse) {
  outgoingResponse.send(
    "<h1 style='color:red;'>This is my web page of a dog</h1>"
  );
});

app.get('/', function (incommingRequest, outgoingResponse) {
  outgoingResponse.send("<h1 style='color:red;'>This is Home web page </h1>");
});

app.post('/cat', function (incommingRequest, outgoingResponse) {
  outgoingResponse.send("<h1 style='color:red;'>This is a post requet</h1>");
});

app.get('*', function (incommingRequest, outgoingResponse) {
  outgoingResponse.send("<h1 style='color:red;'>This is Wrong stop it</h1>");
});

app.listen(port, () => {
  console.log('LISTENING ON PORT 8080');
});
