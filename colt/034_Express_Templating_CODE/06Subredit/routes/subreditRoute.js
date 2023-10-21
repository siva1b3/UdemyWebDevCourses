// subreditRoute.js

const { app } = require("../app");

app.get("/r/:id", function (req, res) {
  const { id } = req.params;
  res.render("subredit.ejs", { subredit: id });
});
