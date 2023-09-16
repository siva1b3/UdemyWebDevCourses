function HigerOrderFunction(url, displaycallback, expandCallBack) {
  const data = { name: "John Doe", age: 30 };
  displaycallback(data);
  const newData = expandCallBack(data, "url", url);
  return newData;
}

function displayData(data) {
  console.log("Received data:", data);
  return data;
}

function expandData(data, key1, value) {
  const updatedData = { ...data, [key1]: value };
  return updatedData;
}

// Usage: Pass the displayData function and expand Function as a callback
const dataFromCallBack = HigerOrderFunction(
  "https://api.example.com/data",
  displayData,
  expandData
);

console.table(dataFromCallBack);
