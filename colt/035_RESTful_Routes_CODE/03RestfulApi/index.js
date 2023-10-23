const { express, app, port } = require("./app");
const JsonData = require("./data/data.json");
const comments = JsonData["main"];

app.use(express.urlencoded({ extended: true }));
require("./routes");

app.listen(port, function () {
  console.log("Server is running on port " + port);
});
