const fs = require('fs').promises;
const path = require('path');

const filePath1 = 'file.txt';
const newFilePath = 'newFile.txt';

async function readFileAndAppendData(filePath,newFilePath) {
  try {
    // Check if the file exists
    const fileExists = await fs.access(filePath)
      .then(() => true) // File exists
      .catch(() => false); // File doesn't exist

    if (fileExists) {
      // Read the contents of the file asynchronously
      const fileData = await fs.readFile(filePath, 'utf8');

      // Append more data to the file
      const newData = fileData + '\nThis is the additional data.';
      await fs.writeFile(filePath, newData);

      // Rename the file
      await fs.rename(filePath, newFilePath);

      console.log('File read, data appended, and file renamed successfully.');
    } else {
      console.log('File does not exist.');
    }
  } catch (error) {
    console.error(error);
  }
}

const filePath01 = path.join(__dirname,"files","001.txt");
const newFilePath01 = path.join(__dirname,"files","101.txt");

readFileAndAppendData(filePath01,newFilePath01);