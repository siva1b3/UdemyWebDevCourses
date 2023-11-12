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

// Import the 'path' module
const path = require("path");

// Display a newline for better formatting
console.log("\n");

// Log the current directory using '__dirname'
console.log("Logging Current Directory:");
console.log("__dirname");
console.log(__dirname);
console.log("\n");

// Log the current filename using '__filename'
console.log("Logging Current Filename:");
console.log("__filename");
console.log(__filename);
console.log("\n");

// Parse and log the details of the current filename using 'path.parse'
console.log("Logging Parsed Filename:");
console.log("path.parse(__filename)");
const parsedFilename = path.parse(__filename);
console.log(parsedFilename);
console.log("\n");

// Parse and log the details of the current directory using 'path.parse'
console.log("Logging Parsed Directory:");
console.log("path.parse(__dirname)");
const parsedDirectory = path.parse(__dirname);
console.log(parsedDirectory);
console.log("\n");

// Get and log the directory name from the current filename using 'path.dirname'
console.log("Logging Directory Name from Filename:");
console.log("path.dirname(__filename)");
const directoryName = path.dirname(__filename);
console.log(directoryName);
console.log("\n");

// Get and log the base name (file name with extension) from the current filename using 'path.basename'
console.log("Logging Base Name from Filename:");
console.log("path.basename(__filename)");
const baseName = path.basename(__filename);
console.log(baseName);
console.log("\n");

// Get and log the file extension from the current filename using 'path.extname'
console.log("Logging File Extension from Filename:");
console.log("path.extname(__filename)");
const fileExtension = path.extname(__filename);
console.log(fileExtension);
console.log("\n");

// Parse and log the details of the current filename using 'path.parse' (repeated for clarity)
console.log("Logging Parsed Filename (Repeated):");
console.log("path.parse(__filename)");
console.log(path.parse(__filename));
console.log("\n");
