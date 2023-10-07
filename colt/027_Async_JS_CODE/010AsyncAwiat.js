const heading = document.querySelector("h1");
// heading.style.transition = "background-color 4s ease-in-out";

async function colorChange(color, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      heading.style.backgroundColor = color;
      const timestampWithMilliseconds = Date.now();
      const date = new Date(timestampWithMilliseconds);
      const formattedDateTime = `${date.toLocaleDateString()} ${date.toISOString()}`;
      console.log(`${color}, ${delay} , ${formattedDateTime}`);
      resolve(); // Resolve the Promise once the operation is done
    }, delay);
  });
}

// ! method 1
async function applyColorChangered() {
  await colorChange("red", 3000);

  const timestampWithMilliseconds = Date.now();
  const date = new Date(timestampWithMilliseconds);
  const formattedDateTime = `${date.toLocaleDateString()} ${date.toISOString()}`;
  console.log("applyColorChangered" + formattedDateTime);
}

async function applyColorChangeBlue() {
  await applyColorChangered();
  await colorChange("blue", 3000);

  const timestampWithMilliseconds = Date.now();
  const date = new Date(timestampWithMilliseconds);
  const formattedDateTime = `${date.toLocaleDateString()} ${date.toISOString()}`;
  console.log("applyColorChangeBlue" + formattedDateTime);
}

async function applyColorChangeGreen() {
  await applyColorChangeBlue();
  await colorChange("green", 20000);

  const timestampWithMilliseconds = Date.now();
  const date = new Date(timestampWithMilliseconds);
  const formattedDateTime = `${date.toLocaleDateString()} ${date.toISOString()}`;
  console.log("applyColorChangeGreen" + formattedDateTime);
}

applyColorChangeGreen();

// ! method 2
const SecondHeading = document.querySelector("h2");

async function colorChangeForSecondHeading(color, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      SecondHeading.style.backgroundColor = color;
      const timestampWithMilliseconds = Date.now();
      const date = new Date(timestampWithMilliseconds);
      const formattedDateTime = `${date.toLocaleDateString()} ${date.toISOString()}`;
      console.log(`${color}, ${delay} , ${formattedDateTime}`);
      resolve(); // Resolve the Promise once the operation is done
    }, delay);
  });
}

async function colorChangeForALLSecondHeadings() {
  await colorChangeForSecondHeading("red", 2000);
  await colorChangeForSecondHeading("blue", 2000);
  await colorChangeForSecondHeading("green", 2000);
  await colorChangeForSecondHeading("yellow", 2000);
  await colorChangeForSecondHeading("orange", 2000);
  await colorChangeForSecondHeading("aqua", 2000);
  await colorChangeForSecondHeading("red", 2000);
  await colorChangeForSecondHeading("blue", 2000);
  await colorChangeForSecondHeading("green", 2000);
  await colorChangeForSecondHeading("yellow", 2000);
  await colorChangeForSecondHeading("orange", 2000);
  await colorChangeForSecondHeading("aqua", 2000);
  await colorChangeForSecondHeading("red", 2000);
  await colorChangeForSecondHeading("blue", 2000);
  await colorChangeForSecondHeading("green", 2000);
  await colorChangeForSecondHeading("yellow", 2000);
  await colorChangeForSecondHeading("orange", 2000);
  await colorChangeForSecondHeading("aqua", 2000);
  await colorChangeForSecondHeading("red", 2000);
  await colorChangeForSecondHeading("blue", 2000);
  await colorChangeForSecondHeading("green", 2000);
  await colorChangeForSecondHeading("yellow", 2000);
  await colorChangeForSecondHeading("orange", 2000);
  await colorChangeForSecondHeading("aqua", 2000);
}

colorChangeForALLSecondHeadings();
