async function hello() {
  return "string example";
}

console.log(hello());

async function helloAsync() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("string example");
    }, 3000);
  });
}

console.log(helloAsync());

const asyncPromise = helloAsync();

console.log(asyncPromise);

setTimeout(() => {
  console.log("after 3 seconds");
  console.log(asyncPromise);
}, 3000);

const singproperly = async () => {
  return "LA LA LA LA";
};

singproperly()
  .then((data) => {
    console.log("PROMISE RESOLVED WITH:", data);
  })
  .catch((err) => {
    console.log("OH NO, PROMISE REJECTED!");
    console.log(err);
  });