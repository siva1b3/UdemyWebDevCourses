const AsyncFunctionWithCallbacks = (url, Less, More) => {
  const randomValue = Math.floor(Math.random() * 20000);
  setTimeout(() => {
    // console will log this group after 2 seconds
    console.group("Inside of Settimeout");
    console.log("two seconds are over");
    console.log(InsideFunction());
    console.groupEnd();

    // data will be returned after 2 seconds
    return InsideFunction();
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

const finalValue = AsyncFunctionWithCallbacks(
  "https://example.com",
  function1,
  function2
);

console.log(finalValue);

// ! in the above function AsyncFunctionWithCallbacks
// & final return statement will run after 2 seconds
// * so finalValue will be undefined
// ^ by the time return statement runs the assigmnet of finalValue
// ? already happens and it will be assigned null
