const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 8080;

// Use body-parser middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/submit", (req, res) => {
  const { username, Password } = req.body;

  // Perform any desired processing with the form data
  // For this example, we'll log the data to the console
  console.log("Form data received:");
  console.log("Username:", username);
  console.log("Password:", Password);

  res.send("Form data received successfully!");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
