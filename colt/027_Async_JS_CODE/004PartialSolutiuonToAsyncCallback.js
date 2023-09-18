const AsyncFunctionWithCallbacks = (url, Less, More, exportFinalResult) => {
  const randomValue = Math.floor(Math.random() * 20000);
  setTimeout(() => {
    // data will be exported after 2 seconds
    exportFinalResult(InsideFunction());
  }, 2000);

  // inside function just a random function to increase complexity
  function InsideFunction() {
    if (randomValue > 10000) {
      return More(`${url} is Good`);
    } else {
      return Less(`${url} is Not Good`);
    }
  }
};

function function1(k = "None") {
  return "function1 " + k;
}

function function2(k = "None") {
  return "function2 " + k;
}
let finalValue = undefined;

AsyncFunctionWithCallbacks(
  "https://example.com",
  function1,
  function2,
  (exportedValue) => (finalValue = exportedValue)
);

// this will be undefined
console.log(finalValue);

// finalValue updated after two seconds
setTimeout(() => {
  console.group("Inside of Settimeout");
  console.log("two seconds are over");
  console.log(finalValue);
  console.groupEnd();
}, 2000);
