// const main1 = (url, success, failure) => {
//   const delay = Math.floor(Math.random() * 4500) + 500;
//   setTimeout(() => {
//     console.group("Inside of Settimeout");
//     console.log(`${km}`);
//     console.log("three seconds are over");
//     console.log(km());
//     console.groupEnd();
//     return km();
//   }, 3000);
//   function km() {
//     if (delay > 10000) {
//       return failure(`${url} failed now`);
//     } else {
//       return success(`Here is your fake data from ${url}`);
//     }
//   }
// };

// function datafetchScuess(k = "None") {
//   return "datafetchScuess " + k;
// }

// function datafetchFailed(k = "None") {
//   return "datafetchFailed " + k;
// }

// const k = main1("https://example.com", datafetchScuess, datafetchFailed);

// console.log(k);

const main1 = (url, success, failure, callback) => {
  const delay = Math.floor(Math.random() * 4500) + 500;
  setTimeout(() => {
    console.group("Inside of Settimeout");
    console.log(`${km}`);
    console.log("three seconds are over");
    console.log(km());
    console.groupEnd();
    const finalReasult = km();
    callback(finalReasult);
  }, 3000);

  function km() {
    if (delay > 10000) {
      return failure(`${url} failed now`);
    } else {
      return success(`Here is your fake data from ${url}`);
    }
  }
};

function datafetchScuess(k = "None") {
  return "datafetchScuess " + k;
}

function datafetchFailed(k = "None") {
  return "datafetchFailed " + k;
}

// Pass a callback to handle the result
let k = undefined;

main1(
  "https://example.com",
  datafetchScuess,
  datafetchFailed,
  (result) => (k = result)
);

console.log(k);
