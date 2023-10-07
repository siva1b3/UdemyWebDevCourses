<<<<<<< HEAD
const heading = document.querySelector("h1");

// Create a form element
const form = document.createElement("form");

// Create a text input element
const textInput = document.createElement("input");
textInput.setAttribute("type", "text");
textInput.setAttribute("id", "textInput");
textInput.setAttribute("placeholder", "Type movie name...");

// Append the input element to the form
form.appendChild(textInput);

// Append the form next to the heading
heading.insertAdjacentElement("afterend", form);

// Add an event listener to log the input value on each change
textInput.addEventListener("input", (event) => {
  // console.log("Input value:");
  // console.dir(event.target.value);
  getMovieName(event.target.value);
});

const listOfNames = document.createElement("ol");
form.insertAdjacentElement("afterend", listOfNames);

// Function to fetch movie names based on the input
async function getMovieName(movieName) {
  // ! method 1
  // Make a GET request to the TV Maze API to search for shows based on the movie name
  // const req = await axios.get(
  //   `https://api.tvmaze.com/search/shows?q='${movieName}'`
  // );

  // ! method 2
  const config = { params: { q: movieName } };
  const req = await axios.get(`https://api.tvmaze.com/search/shows`, config);

  // Extract the array of shows from the response
  const moviesArray = req.data;

  // Clear the existing list of names
  listOfNames.innerHTML = "";

  // Iterate through the array of shows and display their names
  for (let k of moviesArray) {
    const element = document.createElement("li");
    element.innerText = k.show.name;
    listOfNames.appendChild(element);
  }
}
=======
const heading = document.querySelector("h1");

// Create a form element
const form = document.createElement("form");

// Create a text input element
const textInput = document.createElement("input");
textInput.setAttribute("type", "text");
textInput.setAttribute("id", "textInput");
textInput.setAttribute("placeholder", "Type movie name...");

// Append the input element to the form
form.appendChild(textInput);

// Append the form next to the heading
heading.insertAdjacentElement("afterend", form);

// Add an event listener to log the input value on each change
textInput.addEventListener("input", (event) => {
  // console.log("Input value:");
  // console.dir(event.target.value);
  getMovieName(event.target.value);
});

const listOfNames = document.createElement("ol");
form.insertAdjacentElement("afterend", listOfNames);

// Function to fetch movie names based on the input
async function getMovieName(movieName) {
  // ! method 1
  // Make a GET request to the TV Maze API to search for shows based on the movie name
  // const req = await axios.get(
  //   `https://api.tvmaze.com/search/shows?q='${movieName}'`
  // );

  // ! method 2
  const config = { params: { q: movieName } };
  const req = await axios.get(`https://api.tvmaze.com/search/shows`, config);

  // Extract the array of shows from the response
  const moviesArray = req.data;

  // Clear the existing list of names
  listOfNames.innerHTML = "";

  // Iterate through the array of shows and display their names
  for (let k of moviesArray) {
    const element = document.createElement("li");
    element.innerText = k.show.name;
    listOfNames.appendChild(element);
  }
}
>>>>>>> e6c596c091c76a79dc01ca1ed70a72e13ddedb63
