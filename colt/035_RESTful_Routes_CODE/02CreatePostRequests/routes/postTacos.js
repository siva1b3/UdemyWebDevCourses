const { app } = require("../app");

app.post("/tacos", function (req, res) {
  const k = req.body;
  res.send("Hello from post" + JSON.stringify(k));
});
