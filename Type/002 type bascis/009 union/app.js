function combine(input1, input2) {
  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }
}
const combinedAges = combine(30, 26);
console.log(combinedAges);
const combinedNames = combine("Max", "Anna");
console.log(combinedNames);
