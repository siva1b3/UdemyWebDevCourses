const { app } = require("../app");

app.get("/", function (req, res) {
  res.send("hi again!");
});
