// randomRoute.js

function getRandomNumbersHandler(req, res) {
  // Generate two random numbers between 0 and 100.
  const randomNumber1 = Math.floor(Math.random() * 100);
  const randomNumber2 = Math.floor(Math.random() * 100);

  // Render the "03ReciveDataFromjs.ejs" template and send it as a response,
  // passing the random numbers as data to the template.
  res.render("03ReciveDataFromjs", { rand: randomNumber1, randomNumber2 });
}

// Export the 'getRandomNumbersHandler' function.
module.exports = { getRandomNumbersHandler };
