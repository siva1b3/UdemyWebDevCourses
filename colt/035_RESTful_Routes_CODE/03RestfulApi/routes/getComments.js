const { app, express } = require("../app");
const JsonData = require("../data/data.json");
const comments = JsonData["main"];

// **********************************
// INDEX - renders multiple comments
// **********************************
app.get("/comments", function (req, res) {
  res.render("comments/index.ejs", { comments });
});
