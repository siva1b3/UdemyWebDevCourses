const heading = document.querySelector("h1");
const button = document.createElement("button");
button.innerText = "Click me for joke";
heading.insertAdjacentElement("afterend", button);

const listContainer = document.createElement("ol");
listContainer.innerText = "list of jokes";
button.insertAdjacentElement("afterend", listContainer);

async function getDadJoke() {
  try {
    const config = { headers: { Accept: "application/json" } };
    const req = await axios.get("https://icanhazdadjoke.com/", config);
    return req.data.joke;
  } catch (err) {
    console.log(err);
  }
}

async function AddJoke() {
  const joke = await getDadJoke();
  const element = document.createElement("li");
  element.innerText = joke;
  listContainer.appendChild(element);
}

button.addEventListener("click", () => {
  AddJoke();
});

// async function AddJoke() {
//   try {
//     const config = { headers: { Accept: "application/json" } };
//     const jokePromises = [
//       axios.get("https://icanhazdadjoke.com/", config),
//       axios.get("https://api.github.com/users/siva1b3"),
//       axios.get("https://swapi.dev/api/films/1/"),
//     ];

//     // Start all requests simultaneously
//     const [joke1Promise, joke2Promise, joke3Promise] = jokePromises;

//     // Await the promises
//     const joke1 = await joke1Promise;
//     const joke2 = await joke2Promise;
//     const joke3 = await joke3Promise;

//     console.log(joke1.data.joke);
//     console.log(joke2.data.login);
//     console.log(joke3.data.title);

//     const element1 = document.createElement("li");
//     element1.innerText = joke1.data.joke;
//     listContainer.appendChild(element1);

//     const element2 = document.createElement("li");
//     element2.innerText = joke2.data.login;
//     listContainer.appendChild(element2);

//     const element3 = document.createElement("li");
//     element3.innerText = joke3.data.title;
//     listContainer.appendChild(element3);
//   } catch (err) {
//     console.log(err);
//   }
// }
