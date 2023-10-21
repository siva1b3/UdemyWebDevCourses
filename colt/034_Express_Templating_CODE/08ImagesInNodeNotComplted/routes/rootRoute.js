const { app, path } = require("../app");

app.get("/", function (req, res) {
  res.send("Hello World!");
});
