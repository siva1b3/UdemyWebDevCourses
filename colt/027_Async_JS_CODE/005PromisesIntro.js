// THE CALLBACK VERSION
const fakeRequestCallback = (url, success, failure) => {
  const delay = Math.floor(Math.random() * 4500) + 500;
  setTimeout(() => {
    if (delay > 10000) {
      failure(`${url} failed now`);
      return undefined;
    } else {
      success
        ? success(`Here is your fake data from ${url}`)
        : console.log(`${url} failed before`);
    }
  }, delay);
};

function datafetchScuess(k = "hi") {
  console.log(`${k}`);
}

function datafetchFailed(k = "hi") {
  console.log(`${k}`);
}

fakeRequestCallback(
  "https://www.books.com/page1",
  fakeRequestCallback(
    "https://www.books.com/page2",
    fakeRequestCallback(
      "https://www.books.com/page3",
      fakeRequestCallback(
        "https://www.books.com/page4",
        datafetchScuess,
        datafetchFailed
      ),
      datafetchFailed
    ),
    datafetchFailed
  ),
  datafetchFailed
);

// THE PROMISE VERSION
const fakeRequestPromise = (url) => {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
      if (delay > 4000) {
        reject("Connection Timeout :(");
      } else {
        resolve(`Here is your fake data from ${url}`);
      }
    }, delay);
  });
};
