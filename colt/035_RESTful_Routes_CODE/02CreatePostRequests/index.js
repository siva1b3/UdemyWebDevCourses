const { express, app, port } = require("./app");

app.use(express.urlencoded({ extended: true }));

require("./routes");

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
