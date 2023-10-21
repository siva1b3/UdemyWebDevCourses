// index.js

const { app, port } = require("./app");

app.use(function (req, res, next) {
  console.log("in use");
  next();
});

require("./routes");

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
