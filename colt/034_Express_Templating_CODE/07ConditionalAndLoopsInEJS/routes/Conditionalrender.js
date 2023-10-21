const { app } = require("../app");

app.get("/rand", function (req, res) {
  const random = Math.floor(Math.random() * 100) + 1;
  res.render("conditionalRendering.ejs", { num: random });
});
