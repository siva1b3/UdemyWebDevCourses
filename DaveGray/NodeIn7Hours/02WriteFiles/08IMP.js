const fs = require("fs").promises;
const path = require("path");

const filePath1 = "file.txt";
const newFilePath = "newFile.txt";

for (let i = 0; i < 10; i++) {
  console.log(i);
}

async function readFileAndAppendData(filePath, newFilePath) {
  try {
    const d = new Date(Date.now());
    console.log("\n");
    console.log("start reading file" + filePath);
    console.log(d.toISOString());
    // Check if the file exists
    const fileExists = await fs
      .access(filePath)
      .then(() => true) // File exists
      .catch(() => false); // File doesn't exist

    if (fileExists) {
      // Read the contents of the file asynchronously
      const fileData = await fs.readFile(filePath, "utf8");

      const d2 = new Date(Date.now());
      console.log("\n");
      console.log("read file is complete" + filePath);
      console.log(d2.toISOString());

      // Append more data to the file
      const newData = fileData + "\nThis is the additional data.";
      await fs.writeFile(filePath, newData);

      const d1 = new Date(Date.now());
      console.log("\n");
      console.log("append data to file" + filePath);
      console.log(d1.toISOString());

      // Rename the file
      await fs.rename(filePath, newFilePath);

      console.log("\n");
      console.log(
        "File read, data appended, and file renamed successfully." +
          filePath +
          newFilePath
      );
      for (let i = 20; i < 30; i++) {
        console.log(i);
      }
    } else {
      console.log("File does not exist.");
    }
  } catch (error) {
    console.error(error);
  } finally {
    const d = new Date(Date.now());
    console.log("\n");
    console.log("end of file renamed successfully." + filePath + newFilePath);
    console.log(d.toISOString());
  }
}

const filePath01 = path.join(__dirname, "files", "001.txt");
const newFilePath01 = path.join(__dirname, "files", "101.txt");

const filePath02 = path.join(__dirname, "files", "002.txt");
const newFilePath02 = path.join(__dirname, "files", "102.txt");

const filePath03 = path.join(__dirname, "files", "003.txt");
const newFilePath03 = path.join(__dirname, "files", "103.txt");

const filePath04 = path.join(__dirname, "files", "004.txt");
const newFilePath04 = path.join(__dirname, "files", "104.txt");

const filePath05 = path.join(__dirname, "files", "005.txt");
const newFilePath05 = path.join(__dirname, "files", "105.txt");

const filePath06 = path.join(__dirname, "files", "006.txt");
const newFilePath06 = path.join(__dirname, "files", "106.txt");

// const filePath01 = path.join(__dirname, "files", "101.txt");
// const newFilePath01 = path.join(__dirname, "files", "001.txt");

// const filePath02 = path.join(__dirname, "files", "102.txt");
// const newFilePath02 = path.join(__dirname, "files", "002.txt");

// const filePath03 = path.join(__dirname, "files", "103.txt");
// const newFilePath03 = path.join(__dirname, "files", "003.txt");

// const filePath04 = path.join(__dirname, "files", "104.txt");
// const newFilePath04 = path.join(__dirname, "files", "004.txt");

// const filePath05 = path.join(__dirname, "files", "105.txt");
// const newFilePath05 = path.join(__dirname, "files", "005.txt");

// const filePath06 = path.join(__dirname, "files", "106.txt");
// const newFilePath06 = path.join(__dirname, "files", "006.txt");

async function write1() {
  await readFileAndAppendData(filePath01, newFilePath01);
  await readFileAndAppendData(filePath02, newFilePath02);
  await readFileAndAppendData(filePath03, newFilePath03);
  await readFileAndAppendData(filePath04, newFilePath04);
  await readFileAndAppendData(filePath05, newFilePath05);
  await readFileAndAppendData(filePath06, newFilePath06);
}

async function write2() {
  const d01 = new Date(Date.now());
  console.log("\n");
  console.log("Start Processing" + filePath01 + newFilePath01);
  console.log(d01.toISOString());
  readFileAndAppendData(filePath01, newFilePath01);
  const d02 = new Date(Date.now());
  console.log("\n");
  console.log("Start Processing" + filePath02 + newFilePath02);
  console.log(d02.toISOString());
  readFileAndAppendData(filePath02, newFilePath02);
  const d03 = new Date(Date.now());
  console.log("\n");
  console.log("Start Processing" + filePath03 + newFilePath03);
  console.log(d03.toISOString());
  readFileAndAppendData(filePath03, newFilePath03);
  const d04 = new Date(Date.now());
  console.log("\n");
  console.log("Start Processing" + filePath04 + newFilePath04);
  console.log(d04.toISOString());
  readFileAndAppendData(filePath04, newFilePath04);
  const d05 = new Date(Date.now());
  console.log("\n");
  console.log("Start Processing" + filePath05 + newFilePath05);
  console.log(d05.toISOString());
  readFileAndAppendData(filePath05, newFilePath05);
  const d06 = new Date(Date.now());
  console.log("\n");
  console.log("Start Processing" + filePath06 + newFilePath06);
  console.log(d06.toISOString());
  readFileAndAppendData(filePath06, newFilePath06);
  for (let i = 0; i < 10; i++) {
    console.log(i);
  }
}

// write1();
write2();

const d01 = new Date(Date.now());
console.log("\n");
console.log(d01.toISOString());
console.log("\n");
console.log("exiting01");
for (let i = 0; i < 100; i++) {
  console.log(i);
}

const d02 = new Date(Date.now());
console.log("\n");
console.log(d02.toISOString());
console.log("\n");
console.log("exiting02");
for (let i = 0; i < 100; i++) {
  console.log(i);
}

console.log("Start");

setTimeout(() => {
  console.log("Inside setTimeout callback");
}, 0);

console.log("End");

const d03 = new Date(Date.now());
console.log("\n");
console.log(d03.toISOString());
console.log("\n");
console.log("exiting03");
for (let i = 0; i < 100; i++) {
  console.log(i);
}

const d04 = new Date(Date.now());
console.log("\n");
console.log(d04.toISOString());
console.log("\n");
console.log("exiting04");
for (let i = 0; i < 100; i++) {
  console.log(i);
}
