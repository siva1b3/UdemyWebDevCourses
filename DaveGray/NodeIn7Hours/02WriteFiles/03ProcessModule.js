const fs = require("node:fs");
const path = require("path");

/* -------------------------------------------------------------------------- */
/* Method 2                                                                   */
/* -------------------------------------------------------------------------- */

/* A better alternative when compared to direct file path ------------------- */
/* we will get error in this code ------------------------------------------- */
fs.readFile(
  path.join(__dirname, "files", "starte.txt"),
  "utf8",
  function (err, data) {
    if (err) throw err;
    console.log(data);
  }
);

// exit on uncaught error
// process module helps us to handle uncaught errors
// gracefully instead of crashing the whole application
// we can just tell the code what to do here
// when this kind of error is encountered
// we can also use this to handle errors in our code
// we can do like log the error message or
// revert some changes when we encounter an error
process.on("uncaughtException", (err) => {
  console.log(err);
  process.exit(1);
});
