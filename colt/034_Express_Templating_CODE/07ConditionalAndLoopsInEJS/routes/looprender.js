const { app } = require("../app");

app.get("/cat", function (req, res) {
  const cats = ["cat1", "cat2", "cat3", "cat4", "cat5", "cat6", "cat7"];
  res.render("loopCat.ejs", { cats });
});
