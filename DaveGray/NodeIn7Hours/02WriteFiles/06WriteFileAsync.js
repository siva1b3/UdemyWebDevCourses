const fs = require('node:fs');
const path = require('path');

console.log("start");

const dataInFile = "Mit euren weich der auf \nsonst. Diesmal und mein steigen \nträne bang, ersten meinem geisterreich \nwas ertönt besitze mein irrt.."
fs.writeFile(path.join(__dirname,"files","WriteFile1.txt"), dataInFile, function (err) { 
  if (err) throw err;
  console.log("write file 1 completed");
});

console.log("end");