const { app } = require("../app");
const data = require("../data/data.json");

app.get("/:id", subReddit);

function subReddit(req, res) {
  const { id } = req.params;
  let finalData = {};
  let isFound = false;
  for (let name of Object.keys(data)) {
    if (id === name) {
      finalData = data[name];
      isFound = true;
    }
  }
  finalData.subReddit = finalData.name;
  if (isFound) {
    res.render("ComplexReddit.ejs", { ...finalData });
  } else {
    res.render("notFound.ejs", { reddit: id });
  }
}
