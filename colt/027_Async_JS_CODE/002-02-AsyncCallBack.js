// ! first blcok of code
console.log("Sending request to server!");

// ^ second Blcok of code
// * fuction declaration
function callback(k) {
  console.log(k);
}
// & asynchronous function that uses callback
setTimeout(() => {
  callback("Here is your data from the server...");
}, 3000);

// ? third block of code
console.log("I AM AT THE END OF THE FILE!");
