const { app } = require("../app");

const src =
  "https://source.unsplash.com/random/300x200/?wallpaper,landscape,XpdwrlrBmuQxhol7";

app.get("/catImage", function (req, res) {
  const cats = ["cat1", "cat2", "cat3", "cat4", "cat5", "cat6", "cat7"];
  res.render("loopCatWithSrc.ejs", { cats, src });
});
