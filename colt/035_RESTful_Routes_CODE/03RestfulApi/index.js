const { express, app, port } = require("./app");
const JsonData = require("./data/data.json");
const comments = JsonData["main"];
const methodOverride = require("method-override");

app.use(express.urlencoded({ extended: true }));
// To 'fake' put/patch/delete requests:
app.use(methodOverride("_method"));
require("./routes");

app.listen(port, function () {
  console.log("Server is running on port " + port);
});
