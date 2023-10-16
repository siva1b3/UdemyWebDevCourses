// How Node differs from the vanilla js 
// 1. Node runs in the server - not in the browser (backend not frontend)
// 2. the console is terminal window now
// console.log("Hello from Node.js");
// 3. there is no window object like in the browser now we had global object
// console.log(global);
// 4. node has common core modules that we can use for everything
// 5. node modules can be imported using the common js syntax
const os = require("os");

// console.log(os.type());
// console.log(os.version());
// console.log(os.homedir());
// console.log(os.hostname());

// console.log(__dirname);
// console.log(__filename);

// import path variables

// const path = require("path");
// console.log("\n \n \n ");

// console.log("path.dirname(__filename)");
// console.log(path.dirname(__filename));
// console.log("\n \n \n ");

// console.log("path.basename(__filename)");
// console.log(path.basename(__filename));
// console.log("\n \n \n ");

// console.log("path.extname(__filename)");
// console.log(path.extname(__filename));
// console.log("\n \n \n ");

// console.log("path.parse(__filename)");
// console.log(path.parse(__filename));
// console.log("\n \n \n ");

const math = require("./03-01 helper math");

console.log("math.add(1, 2)");
console.log(math.add(1, 2));
console.log("\n ");

console.log("math.subtract(10, 2)");
console.log(math.subtract(10, 2));
console.log("\n ");

console.log("math.multiply(10, 2)");
console.log(math.multiply(10, 2));
console.log("\n ");

console.log("math.divide(10, 2)");
console.log(math.divide(10, 2));
console.log("\n ");