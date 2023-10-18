const fs = require('node:fs');

/* -------------------------------------------------------------------------- */
/* Method 1                                                                   */
/* -------------------------------------------------------------------------- */
/* using direct file path --------------------------------------------------- */
fs.readFile("./files/starter.txt", 'utf8', function (err, data) {
  if (err) throw err;
  console.log(data);
});
/* don't use direct file path it will cause unnecessary issues -------------- */
