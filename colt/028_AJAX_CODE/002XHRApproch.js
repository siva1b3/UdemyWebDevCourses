// create request
const req = new XMLHttpRequest();

URL = "https://swapi.dev/api/people/1/";

req.onload = function () {
  console.log("it workerd");
  const data = JSON.parse(this.responseText);
  console.table(data);
};
req.onerror = function () {
  console.log("it got error");
  console.log(this);
};

req.open("GET", URL);
req.send();
