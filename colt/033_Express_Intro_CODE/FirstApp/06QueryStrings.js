const express = require("express");
const app = express();
const port = 3000;

// app.use((incommingRequest, outgoingResponse) => {
//   console.log("WE GOT A NEW REQUEST!!");
//   outgoingResponse.send("<h1 style='color:red;'>This is my web page</h1>");
// });

app.get("/siva/:parameter1", function (incommingRequest, outgoingResponse) {
  const { parameter1 } = incommingRequest.params;
  console.log(parameter1);
  outgoingResponse.send(
    `<h1 style='color:red;'>This is Page of ${parameter1}</h1>`
  );
});

app.get(
  "/siva/:parameter1/:parameter2",
  function (incommingRequest, outgoingResponse) {
    const { parameter1, parameter2 } = incommingRequest.params;
    console.log(parameter1, parameter2);
    outgoingResponse.send(
      `<h1 style='color:green;'>This is Page of ${parameter1} 
      and subpage of ${parameter2}</h1>`
    );
  }
);

app.get("/cat", function (incommingRequest, outgoingResponse) {
  outgoingResponse.send(
    "<h1 style='color:red;'>This is my web page of a cat</h1>"
  );
});

app.get("/dog", function (incommingRequest, outgoingResponse) {
  outgoingResponse.send(
    "<h1 style='color:red;'>This is my web page of a dog</h1>"
  );
});

app.get("/", function (incommingRequest, outgoingResponse) {
  outgoingResponse.send("<h1 style='color:red;'>This is Home web page </h1>");
});

app.post("/cat", function (incommingRequest, outgoingResponse) {
  outgoingResponse.send("<h1 style='color:red;'>This is a post requet</h1>");
});

app.get("/serach", function (incommingRequest, outgoingResponse) {
  console.log(incommingRequest.query);
  outgoingResponse.send(
    `<h1 style='color:red;'>This is a post requet</h1> ${incommingRequest.query}`
  );
});

app.get("*", function (incommingRequest, outgoingResponse) {
  outgoingResponse.send("<h1 style='color:red;'>This is Wrong stop it</h1>");
});

app.listen(port, () => {
  console.log("LISTENING ON PORT 8080");
});
