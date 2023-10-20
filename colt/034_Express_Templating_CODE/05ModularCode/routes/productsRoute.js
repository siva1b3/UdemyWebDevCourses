// productsRoute.js

// Import the 'app' variable from the 'app' module.
const { app } = require("../app");

// Import the product data from 'productData.js'.
const { products } = require("../data/productData");

// Define a new route handler for handling HTTP GET requests to "/products".
function getProducts(req, res) {
  // Render the "products.ejs" template and send it as a response,
  // passing the list of products to the template.
  res.render("products", { products });
}

// Export the 'getProducts' function for use in other parts of the application.
module.exports = { getProducts };
