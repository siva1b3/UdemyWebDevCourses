const fs = require('fs-extra');
const path = require('path');

function getFileStructure(directoryPath, indent = 0) {
  const files = fs.readdirSync(directoryPath);

  files.forEach((file) => {
    const filePath = path.join(directoryPath, file);
    const stats = fs.statSync(filePath);
    const isDirectory = stats.isDirectory();

    if (isDirectory) {
      console.log(`${' '.repeat(indent)}- ${file}/`);
      getFileStructure(filePath, indent + 2);
    } else {
      console.log(`${' '.repeat(indent)}- ${file}`);
    }
  });
}

getFileStructure('../FirstApp');
