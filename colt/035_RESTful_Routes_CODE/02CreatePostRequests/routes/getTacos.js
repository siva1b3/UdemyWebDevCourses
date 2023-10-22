const { app } = require("../app");

app.get("/tacos", function (req, res) {
  const k = req.query;
  res.send("Hello from " + JSON.stringify(k));
});
