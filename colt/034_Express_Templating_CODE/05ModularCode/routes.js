/* -------------------------------------------------------------------------- */
/* METHOD 1: Importing callback functions Individually and Assigning Route Handlers  */
/* -------------------------------------------------------------------------- */
/* In this method, we import callback functions and create route handlers for */
/* specific routes. It provides more control over route handling.             */
const { app } = require("./app");

// Import the route handlers from separate files
const { rootRoute } = require("./routes/rootRoute");
const { getRandomNumbersHandler } = require("./routes/randomRoute");
const { getProducts } = require("./routes/productsRoute");

// Use the route handlers for specific HTTP methods and route paths
app.get("/", rootRoute); // Handle the root route
app.get("/random", getRandomNumbersHandler); // Handle the "/random" route
app.get("/products", getProducts); // Handle the "/products" route

/* -------------------------------------------------------------------------- */
/* METHOD 2: Direct Import of Routes from Another File                        */
/* -------------------------------------------------------------------------- */
/* In this method, we directly import routes from another file, which may     */
/* contain only one  routes. When using this method, ensure that each file    */
/* contains only one route to avoid conflicts.                                */
require("./routes/aboutRoute"); // Example of direct import

/* -------------------------------------------------------------------------- */
/* Both Methods Can Be Used                                                   */
/* -------------------------------------------------------------------------- */
/* You can choose either method based on your project's requirements.         */
/* Method 1 is suitable when you need to define route handlers explicitly.    */
/* Method 2 is simpler but should be used with caution to avoid route         */
/* conflicts if multiple routes are defined in the same file.                 */
/* -------------------------------------------------------------------------- */
