const { app } = require("../app");

app.get("/*", function (req, res) {
  console.log(req.params[0]);
  res.render("noSubredit.ejs", { noSubredit: req.params[0] });
});
