// !  create a fetch request
const requset1 = fetch("https://swapi.dev/api/people/1/");

console.log(typeof requset1);
console.log("requset1 is " + requset1);
console.log(requset1);

// ! extract data from request

const requset2 = fetch("https://swapi.dev/api/people/1/");
requset2
  .then((data) => {
    console.log(data);
    // * we need to extract JSON from data recived from fetch
    // & data.json() will return a promise
    return data.json();
  })
  .then((JsonData) => {
    console.log(JsonData);
  })
  .catch((err) => {
    console.log("We got error");
    console.log(err);
  });

// ! making mutiple requests
const requset3 = fetch("https://swapi.dev/api/people/1/");
requset3
  .then((data) => {
    console.log(data);
    return data.json();
  })
  .then((JsonData) => {
    console.log(JsonData);
    return fetch("https://swapi.dev/api/people/2/");
  })
  .then((data) => {
    return data.json();
  })
  .then((JsonData) => {
    console.log(JsonData);
  })
  .catch((err) => {
    console.log("We got error");
    console.log(err);
  });

// ! using Async
async function getJsonData() {
  try {
    const req = await fetch("https://swapi.dev/api/pedaople/1/");
    const JsonData = await req.json();
    console.table(JsonData);
  } catch (err) {
    console.log("error in first fetch");
    console.log(err);
  }
  try {
    const req = await fetch("https://swapi.dev/api/people/2/");
    const JsonData = await req.json();
    console.table(JsonData);
  } catch (err) {
    console.log("error in Second fetch");
    console.log(err);
  }
}
getJsonData();
