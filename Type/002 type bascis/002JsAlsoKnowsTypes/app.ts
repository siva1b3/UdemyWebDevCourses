function add(n1: number, n2: number) {
  if (typeof n1 !== "number" || typeof n2 !== "number") {
    throw new Error("Incorrect input!");
  }
  return n1 + n2;
}

const number1 = 5; // 5.0
const number2 = 2.8;

add(number1, number2);
