const fs = require('node:fs');
const path = require('path');

/* -------------------------------------------------------------------------- */
/* Method 2                                                                   */
/* -------------------------------------------------------------------------- */
/* A better alternative when compared to direct file path ------------------------ */
fs.readFile(path.join(__dirname,"files","starter.txt"), 'utf8', function (err, data) {
  if (err) throw err;
  console.log(data);
});