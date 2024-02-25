// ! type aliases

type stringOrNumber = string | number;

type stringOrNumberArray = Array<string | number>;

type employee = {
  firstName?: stringOrNumber;
  lastName: string;
  age: number;
  email?: string; // Optional property
  details?: stringOrNumberArray;
  [key: string]: any; // Index signature for additional properties
};

type userId = stringOrNumber;

// ! literal Types
let myName1: "dave";
myName1 = "dave";

let myName2: "dave" | "main" | "siva";
myName2 = "siva";
myName2 = "dave";

// ! functions

const add = (a: number, b: number = 0): number => {
  return a + b;
};

const logmsg = (a: string): void => {
  console.log(a);
};

logmsg("adads");
// ! error
// logmsg(add(2, 3));

// ! type functions
const subtract = function (a: number, b: number): number {
  return a - b;
};

type MathFunction = (a: number, b: number) => number;

const subtract2: MathFunction = (c, d) => {
  return c - d;
};

// ! interface functions
const subtract3 = function (a: number, b: number): number {
  return a - b;
};

interface MathFunction1 {
  (a: number, b: number): number;
}

const subtract4: MathFunction1 = (c, d) => {
  return c - d;
};

// ! optional parameters

// ^ normal function with out options
const addAll = (a: number, b: number, c: number) => {
  return a + b + c;
};

// * function with options
const addAll2 = (a: number, b: number, c?: number) => {
  if (typeof c !== "undefined") {
    return a + b + c;
  }
  return a + b;
};

// * function with options
const sumAll = (a: number = 9, b: number, c: number = 2) => {
  return a + b + c;
};

console.log(sumAll(2, 3));
console.log(sumAll(undefined, 3));

// ! rest parameters
const restAllSum = (...props: Array<number>): number => {
  return props.reduce((aggreate, currentValue) => aggreate + currentValue);
};

console.log(restAllSum(1, 2, 3, 4, 5, 6, 7, 8));

const restAllSum2 = (a: number = 10, ...props: Array<number>): number => {
  return a + props.reduce((aggreate, currentValue) => aggreate + currentValue);
};

console.log(restAllSum2(undefined, 2, 3, 4, 5, 6, 7, 8));

// ! Example 1: Using never with throwError
// Define a function that throws an error and never returns
function throwError(errorMsg: string): never {
  throw new Error(errorMsg);
}

// Example usage of throwError function
try {
  throwError("Something went wrong!");
  // This line will throw an error and halt further execution
} catch (error) {
  console.error("Error caught:");
}

//!  Example 2: Using never with an Infinite Loop
// Define a function that continuously executes without ever reaching an endpoint
function keepProcessing(): never {
  while (true) {
    console.log("I always do something and never end.");
  }
}

// Example usage of keepProcessing function (uncomment to run, but beware of infinite loop)
// ! error with never
// keepProcessing();

// ! use never type for regular functions
const numberString01 = (value: number | string): string => {
  if (typeof value === "number") return "number";
  if (typeof value === "string") return "string";

  // If the input value is neither a number nor a string, throw an error
  throw new Error("Invalid input type");
};

// ! custom type garuds
const isNumber = (value: any): boolean => {
  return typeof value === "number" ? true : false;
};

const isString = (value: any): boolean => {
  return typeof value === "string" ? true : false;
};

// ! use type gaurds in functions
const numberString = (value: number | string): string => {
  if (isNumber(value)) return "number";
  if (isString(value)) return "string";
  // If the input value is neither a number nor a string, throw an error
  throw new Error("Invalid input type");
};
