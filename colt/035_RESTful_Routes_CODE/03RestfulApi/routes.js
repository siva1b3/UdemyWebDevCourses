const { express, app, port } = require("./app");
const jsonData = require("./data/data.json");
let comments = jsonData["main"];
const { v4: uuid } = require("uuid"); //For generating ID's

require("./routes/getRootRoute");

app.get("/comments", function (req, res) {
  res.render("comments/index.ejs", { comments });
});

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

// *******************************************
// EDIT - renders a form to edit a comment
// *******************************************
// a chnace to edit a comment
app.get("/comments/:id/edit", (req, res) => {
  const { id } = req.params;
  const comment = comments.find((c) => c.id === id);
  res.render("comments/edit", { comment });
});

// *******************************************
// UPDATE - updates a particular comment
// *******************************************
app.patch("/comments/:id", (req, res) => {
  const { id } = req.params;
  const foundComment = comments.find((c) => c.id === id);

  //get new text from req.body
  const newCommentText = req.body.comment;
  //update the comment with the data from req.body:
  foundComment.comment = newCommentText;
  //redirect back to index (or wherever you want)
  res.redirect("/comments");
});

// *******************************************
// DELETE/DESTROY- removes a single comment
// *******************************************
app.delete("/comments/:id", (req, res) => {
  const { id } = req.params;
  comments = comments.filter((c) => c.id !== id);
  res.redirect("/comments");
});
