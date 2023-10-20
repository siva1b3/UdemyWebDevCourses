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

async function readFileAndAppendData(filePath, newFilePath) {
  try {
    const startTime = new Date(Date.now());
    console.log("\n");
    console.log("Start reading file: " + filePath);
    console.log(startTime.toISOString());

    // Check if the file exists
    const fileExists = await fs
      .access(filePath)
      .then(() => true) // File exists
      .catch(() => false); // File doesn't exist

    if (fileExists) {
      // Read the contents of the file asynchronously
      const fileData = await fs.readFile(filePath, "utf8");

      const readTime = new Date(Date.now());
      console.log("\n");
      console.log("File read is complete: " + filePath);
      console.log(readTime.toISOString());

      // Append more data to the file
      const newData = fileData + "\nThis is the additional data.";
      await fs.writeFile(filePath, newData);

      const appendTime = new Date(Date.now());
      console.log("\n");
      console.log("Data appended to file: " + filePath);
      console.log(appendTime.toISOString());

      // Rename the file
      await fs.rename(filePath, newFilePath);

      console.log("\n");
      console.log(
        "File read, data appended, and file renamed successfully: " +
          filePath +
          " -> " +
          newFilePath
      );

      // Add a loop for demonstration (consider adjusting iterationCount)
      for (let i = iterationCount; i < 30; i++) {
        console.log(i);
      }
    } else {
      console.log("File does not exist.");
    }
  } catch (error) {
    console.error("Error:", error);
  } finally {
    const endTime = new Date(Date.now());
    console.log("\n");
    console.log("End of file operations: " + filePath + " -> " + newFilePath);
    console.log(endTime.toISOString());
  }
}

// const filePath01 = path.join(__dirname, "files", "001.txt");
// const newFilePath01 = path.join(__dirname, "files", "101.txt");

// const filePath02 = path.join(__dirname, "files", "002.txt");
// const newFilePath02 = path.join(__dirname, "files", "102.txt");

// const filePath03 = path.join(__dirname, "files", "003.txt");
// const newFilePath03 = path.join(__dirname, "files", "103.txt");

// const filePath04 = path.join(__dirname, "files", "004.txt");
// const newFilePath04 = path.join(__dirname, "files", "104.txt");

// const filePath05 = path.join(__dirname, "files", "005.txt");
// const newFilePath05 = path.join(__dirname, "files", "105.txt");

// const filePath06 = path.join(__dirname, "files", "006.txt");
// const newFilePath06 = path.join(__dirname, "files", "106.txt");

const filePath01 = path.join(__dirname, "files", "101.txt");
const newFilePath01 = path.join(__dirname, "files", "001.txt");

const filePath02 = path.join(__dirname, "files", "102.txt");
const newFilePath02 = path.join(__dirname, "files", "002.txt");

const filePath03 = path.join(__dirname, "files", "103.txt");
const newFilePath03 = path.join(__dirname, "files", "003.txt");

const filePath04 = path.join(__dirname, "files", "104.txt");
const newFilePath04 = path.join(__dirname, "files", "004.txt");

const filePath05 = path.join(__dirname, "files", "105.txt");
const newFilePath05 = path.join(__dirname, "files", "005.txt");

const filePath06 = path.join(__dirname, "files", "106.txt");
const newFilePath06 = path.join(__dirname, "files", "006.txt");

// ! six async file operations will create six new threads
// * from main thread

async function processFiles() {
  // Define arrays for file paths and new file paths
  const filePaths = [
    filePath01,
    filePath02,
    filePath03,
    filePath04,
    filePath05,
    filePath06,
  ];
  const newFilePaths = [
    newFilePath01,
    newFilePath02,
    newFilePath03,
    newFilePath04,
    newFilePath05,
    newFilePath06,
  ];

  for (let i = 0; i < filePaths.length; i++) {
    const startProcessingTime = new Date(Date.now());
    console.log("\n");
    console.log("Start Processing " + filePaths[i] + " -> " + newFilePaths[i]);
    console.log(startProcessingTime.toISOString());

    readFileAndAppendData(filePaths[i], newFilePaths[i]);
  }

  for (let i = 0; i < 10; i++) {
    console.log(i);
  }
}

processFiles();

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
