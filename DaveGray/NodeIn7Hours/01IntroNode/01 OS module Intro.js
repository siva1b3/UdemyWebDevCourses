// How Node differs from the vanilla js 
// 1. Node runs in the server - not in the browser (backend not frontend)
// 2. the console is terminal window now
console.log("Hello from Node.js");
// 3. there is no window object like in the browser now we had global object
console.log(global);
// 4. node has common core modules that we can use for everything
// 5. node modules can be imported using the common js syntax
const os = require("os");

console.log("os.type()");
console.log(os.type());
console.log("\n \n");

console.log("os.version()");
console.log(os.version());
console.log("\n \n");

console.log("os.homedir()");
console.log(os.homedir());
console.log("\n \n");

console.log("os.hostname()");
console.log(os.hostname());
console.log("\n \n");


console.log("(__dirname)");
console.log(__dirname);
console.log("\n \n");

console.log("(__filename)");
console.log(__filename);
console.log("\n \n");
