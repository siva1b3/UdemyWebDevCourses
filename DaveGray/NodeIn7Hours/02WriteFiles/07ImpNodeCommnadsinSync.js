const fs = require("fs");

// Reading Files Synchronously
const contentSync = fs.readFileSync("./files/file.txt", "utf8");
console.log("Synchronous File Content: ", contentSync);

// Writing Files Synchronously
fs.writeFileSync("./files/newFile.txt", "Hello, World!", "utf8");
console.log("Synchronous File Write completed.");

// Appending to Files Synchronously
fs.appendFileSync("./files/file.txt", " Appended content", "utf8");
console.log("Synchronous File Append completed.");

// Renaming or Moving Files Synchronously
fs.renameSync("./files/newFile.txt", "./files/newlyCreatedFile.txt");
console.log("Synchronous File Rename completed.");

// Deleting Files Synchronously
fs.unlinkSync("./files/newlyCreatedFile.txt");
console.log("Synchronous File Delete completed.");

// Checking File Existence Synchronously
if (fs.existsSync("./files/file.txt")) {
  console.log("File exists.");
} else {
  console.log("File does not exist.");
}

// Checking File Information Synchronously
const fileInfoSync = fs.statSync("./files/file.txt");
console.log("Synchronous File Info: ", fileInfoSync);
