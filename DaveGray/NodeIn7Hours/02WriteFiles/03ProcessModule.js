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
process.on("uncaughtException", (err) => {
  console.log(err);
  process.exit(1);
});
