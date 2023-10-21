const { app } = require("../app");

app.get("/view", function (req, res) {
  res.render("getImages");
});
