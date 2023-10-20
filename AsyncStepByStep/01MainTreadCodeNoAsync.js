const fs = require("fs").promises;
// Import the 'fs' module with promises support for asynchronous file operations.
const path = require("path");

// ! all the code runs on main thread
// * no new therads are created

const iterationCount = 10;
// Define a constant for the number of iterations.

// Executing loop before Start Time
console.log("\n");
console.log("Executing loop before Start Time");
for (let i = 0; i < iterationCount; i++) {
  console.log("Iteration", i);
}

// Record the current date and time.
const startTime = new Date(Date.now());
console.log("\n");
console.log("Start Time:", startTime.toISOString());
// Display the start time in ISO format.

console.log("\n");
console.log("Executing loop 01");
for (let i = 0; i < iterationCount; i++) {
  console.log("Iteration", i);
  // Log each iteration of the loop with a descriptive message.
}

// Record the current date and time after the first loop.
const middleTime = new Date(Date.now());
console.log("\n");
console.log("Middle Time:", middleTime.toISOString());
// Display the middle time in ISO format.

console.log("\n");
console.log("Executing loop 02");
for (let i = 0; i < iterationCount; i++) {
  console.log("Iteration", i);
  // Log each iteration of the loop with a descriptive message.
}

// Record the current date and time after the second loop.
const endTime = new Date(Date.now());
console.log("\n");
console.log("End Time:", endTime.toISOString());
// Display the end time in ISO format.

console.log("\n");
console.log("Exiting the application");
