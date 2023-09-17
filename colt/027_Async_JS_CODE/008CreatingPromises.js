// const fakeRequest = (url) => {
//   return new Promise((resolve, reject) => {
//     const rand = Math.random();
//     setTimeout(() => {
//       if (rand < 0.7) {
//         resolve("YOUR FAKE DATA HERE");
//       }
//       reject("Request Error!");
//     }, 1000);
//   });
// };

// fakeRequest("/dogs/1")
//   .then((data) => {
//     console.log("DONE WITH REQUEST!");
//     console.log("data is:", data);
//   })
//   .catch((err) => {
//     console.log("OH NO!", err);
//   });

const heading = document.querySelector("h1");
heading.style.transition = "background-color 4s ease-in-out";

function delayedColorChange(color, delay) {
  return new Promise((resolve, reject) => {
    if (delay >= 5000) {
      setTimeout(() => {
        reject([color, delay]);
      }, delay);
    } else {
      setTimeout(() => {
        heading.style.backgroundColor = color;
        resolve();
      }, delay);
    }
  });
}

delayedColorChange("green", 3000)
  .then(() => delayedColorChange("orange", 3000))
  .then(() => {
    console.log("hi");
  })
  .then(() => delayedColorChange("red", 3000))
  .then(() => delayedColorChange("blue", 6000))
  .catch((err) => {
    console.log("error");
    console.log(err);
  })
  .then(() => delayedColorChange("pink", 3000))
  .then(() => delayedColorChange("aqua", 3000))
  .then(() => delayedColorChange("yellow", 3000));
