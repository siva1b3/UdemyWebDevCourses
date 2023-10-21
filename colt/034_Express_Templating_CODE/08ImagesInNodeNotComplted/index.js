const { app, port, path } = require("./app");

app.use(function (req, res, next) {
  console.log("in use");
  next();
});

require("./routes");

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
