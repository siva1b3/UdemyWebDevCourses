const { express, app, port } = require("./app");
const jsonData = require("./data/data.json");
const comments = jsonData["main"];
const { v4: uuid } = require("uuid"); //For generating ID's

require("./routes/getRootRoute");
require("./routes/getComments");

// **********************************
// NEW - renders a form
// **********************************
app.get("/comments/new", (req, res) => {
  res.render("comments/new.ejs");
});

// **********************************
// CREATE - creates a new comment
// **********************************
app.post("/comments", (req, res) => {
  const { username, comment } = req.body;
  comments.push({ username, comment, id: uuid() });
  console.log(comments);
  // res.send("hi");
  res.redirect("/comments");
});

// *******************************************
// SHOW - details about one particular comment
// *******************************************
app.get("/comments/:id", (req, res) => {
  const { id } = req.params;
  const comment = comments.find((c) => c.id === id);
  res.render("comments/show", { comment });
});
