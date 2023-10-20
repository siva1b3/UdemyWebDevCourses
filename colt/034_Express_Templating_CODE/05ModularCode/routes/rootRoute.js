// rootRoute.js

// This function handles the root route ("/")
// when a user accesses the root URL.

function rootRoute(req, res) {
  // Render the "02EjsWithJavaScriptCode.ejs" template
  // and send it as a response.
  res.render("02EjsWithJavaScriptCode.ejs");
}

// Export the 'rootRoute' function, so it can be used
// in other parts of the application.
module.exports = { rootRoute };
