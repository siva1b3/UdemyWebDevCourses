"use strict";
// Define literal types
let myName; // Literal type for 'Siva'
// myName = "john"; // This assignment would cause an error
let userNamePrefix; // Literal type for common name prefixes
userNamePrefix = "mrs"; // Example usage of userNamePrefix
// Example function definitions
/**
 * Adds two numbers and returns the result.
 * @param num1 First number to add
 * @param num2 Second number to add
 * @returns Sum of num1 and num2
 */
const add = (num1, num2) => {
    return num1 + num2;
};
/**
 * Logs a message to the console.
 * @param message Message to log, can be a string or number
 */
const logMessage = (message) => {
    console.log(message);
};
// Example usages of the functions
logMessage("hello"); // Logs: hello
logMessage(add(2, 3)); // Logs: 5
// Define a function using a traditional function expression
let Addition = function (a, b) {
    return a + b;
};
// Example of a multiplication function using the MathFunction type alias
const multiply01 = (a, b) => {
    return a * b;
};
// Calling logMessage function with the result of multiply01 function
logMessage(multiply01(2, 3));
// Example of a division function using the MathFunctionInterFace interface
const divison = (a, b) => {
    return a / b;
};
// Function with optional parameters
const addThreeNumbers01 = (a, b, c) => {
    if (typeof c !== "undefined") {
        // If 'c' is provided, add all three numbers
        return a + b + c;
    }
    // If 'c' is not provided, add only 'a' and 'b'
    return a + b;
};
// Explanation for the first logMessage call
console.log("Calculating sum of three numbers (1, 2, 3):");
const result1 = addThreeNumbers01(1, 2, 3);
console.log(`Result: ${result1}`); // Logs: Result: 6 (1 + 2 + 3)
// Explanation for the second logMessage call
console.log("Calculating sum of two numbers (1, 20):");
const result2 = addThreeNumbers01(1, 20);
console.log(`Result: ${result2}`); // Logs: Result: 21 (1 + 20)
// Function with default parameters
const addThreeNumbers02 = (a = 10, b, c = 0) => {
    return a + b + c;
};
// Explanation for the function with default parameters
console.log("Calculating sum of three numbers with defaults:");
console.log("Default values: a = 10, c = 0");
console.log("Calling with parameters (1, 2, 3):");
const result01 = addThreeNumbers02(1, 2, 3);
console.log(`Result: ${result01}`); // Logs: Result: 6 (1 + 2 + 3)
console.log("Calling with parameters (5, 5):");
const result02 = addThreeNumbers02(5, 5);
console.log(`Result: ${result02}`); // Logs: Result: 10 (5 + 5 + 0)
console.log("Calling with parameters (undefined, 8, undefined):");
const result03 = addThreeNumbers02(undefined, 8, undefined);
console.log(`Result: ${result03}`); // Logs: Result: 18 (10 + 8 + 0)
// Function with rest parameters using Array.reduce
const sumAllNumbers = (initialValue, ...numbers) => {
    const sum = numbers.reduce((acc, num) => acc + num, initialValue);
    return sum;
};
// Explanation for the function with rest parameters and reducer
console.log("Calculating sum of multiple numbers using rest parameters and reducer:");
console.log("Initial value: 10");
console.log("Calling with parameters (1, 2, 3, 4, 5):");
const result04 = sumAllNumbers(10, 1, 2, 3, 4, 5);
console.log(`Result: ${result04}`); // Logs: Result: 25 (10 + 1 + 2 + 3 + 4 + 5)
console.log("Calling with parameters (5, 10, 15):");
const result05 = sumAllNumbers(5, 10, 15);
console.log(`Result: ${result05}`); // Logs: Result: 30 (5 + 10 + 15)
console.log("Calling with parameters (3):");
const result06 = sumAllNumbers(3);
console.log(`Result: ${result06}`); // Logs: Result: 3 (Initial value only)
console.log("Calling with no parameters:");
const result07 = sumAllNumbers(0);
console.log(`Result: ${result07}`); // Logs: Result: 0 (Only initial value)
// Functions demonstrating the use of 'never' type
// Function that throws an error and never returns
const throwError = (message) => {
    throw new Error(message);
};
// Function that enters an infinite loop and never returns
const infiniteLoop = () => {
    while (true) {
        console.log("Infinite loop"); // This will keep logging indefinitely
    }
    // Unreachable code, as while loop above is infinite
    // console.log("This line is unreachable");
};
// Example usage for throwError function
console.log("Example usage of throwError function:");
try {
    console.log("just before error");
    throwError("An error occurred"); // Throws an error with the specified message
}
catch (error) {
    console.error(error.message); // Logs: An error occurred
}
// Example usage for infiniteLoop function (uncomment to see the effect)
/*
  console.log("\nExample usage of infiniteLoop function:");
  infiniteLoop(); // Enters an infinite loop, uncomment to see the effect
  */
// never type functions
// Exhaustiveness Checking
// Ensuring Exhaustive Return Paths" in TypeScript and static type systems
const numberOrString = (a) => {
    if (typeof a === "number")
        return "number";
    if (typeof a === "string")
        return "string";
    return throwError("this should never happen");
};
console.log(numberOrString("siva"));
// Custom type guard to check if a value is a number
const isNumber = (a) => {
    return typeof a === "number" ? true : false;
};
// Custom type guard to check if a value is a string
const isString = (a) => {
    return typeof a === "string" ? true : false;
};
// Function that takes a value which can be either a number or a string
// and returns a string indicating the type of the input value
const numberOrString02 = (a) => {
    // If the value is a number, return the string "number"
    if (isNumber(a))
        return "number";
    // If the value is a string, return the string "string"
    if (isString(a))
        return "string";
    // This return statement is added to satisfy TypeScript's exhaustiveness checking
    // It ensures that the function always returns a string, even if all other checks fail
    return "undefined";
};
// Example usage:
console.log(numberOrString02(42)); // Output: "number"
console.log(numberOrString02("hello")); // Output: "string"
