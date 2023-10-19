const fs = require('node:fs');
const path = require('path');

console.log("start");

/* -------------------------------------------------------------------------- */
/* Method 2                                                                   */
/* -------------------------------------------------------------------------- */
/* A better alternative when compared to direct file path ------------------------ */
const data = fs.readFileSync(path.join(__dirname,"files","starter.txt"), 'utf8')
console.log(data);

console.log("end");

// exit on uncaught error
process.on('uncaughtException', (err) => {
  console.log(err);
  process.exit(1);
});