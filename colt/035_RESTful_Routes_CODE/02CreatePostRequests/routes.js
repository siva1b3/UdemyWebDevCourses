const { app } = require("./app");

const { getRootRoute } = require("./routes/getRootRoute");
const { postRootRoute } = require("./routes/postRootRoute");

app.get("/", getRootRoute);
app.post("/", postRootRoute);

require("./routes/getTacos");
require("./routes/postTacos");
