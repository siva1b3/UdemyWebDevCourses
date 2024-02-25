"use strict";
// ! Type Aliases
// ! Literal Types
let myName1;
myName1 = "dave";
// This declares a variable `myName1` with a literal type "dave", meaning it can only hold the exact value "dave".
let myName2;
myName2 = "siva";
myName2 = "dave";
// This declares a variable `myName2` with a union of literal types "dave", "main", or "siva", allowing it to hold one of these specific values.
// ! Functions
/**
 * Defines a function to add two numbers.
 * @param a - The first number.
 * @param b - Optional: The second number. Default value is 0 if not provided.
 * @returns The sum of 'a' and 'b'.
 */
const add = (a, b = 0) => {
    return a + b;
};
// This declares a function `add` that takes two parameters of type number and returns their sum.
// The second parameter `b` has a default value of 0, making it optional.
/**
 * Defines a function to log a message to the console.
 * @param a - The message to log.
 * @returns void
 */
const logmsg = (a) => {
    console.log(a);
};
logmsg("adads");
// This declares a function `logmsg` that logs a string parameter to the console.
// The function has a return type of void, indicating it does not return any value.
// ! Error
// logmsg(add(2, 3));
// This would produce an error because the `logmsg` function expects a string parameter,
// but we're passing it the result of the `add` function, which is a number.
// ! Type Functions
/**
 * Defines a function to subtract two numbers.
 * @param a - The minuend.
 * @param b - The subtrahend.
 * @returns The result of subtracting 'b' from 'a'.
 */
const subtract = function (a, b) {
    return a - b;
};
// Declare a function 'subtract2' using the 'MathFunction' type, implementing subtraction
const subtract2 = (c, d) => {
    return c - d;
};
// ! Interface Functions
/**
 * Defines a function to subtract two numbers.
 * @param a - The minuend.
 * @param b - The subtrahend.
 * @returns The result of subtracting 'b' from 'a'.
 */
const subtract3 = function (a, b) {
    return a - b;
};
// Declare a function 'subtract4' using the 'MathFunction1' interface, implementing subtraction
const subtract4 = (c, d) => {
    return c - d;
};
// ! Optional Parameters
/**
 * Normal function without optional parameters.
 * @param a - The first number.
 * @param b - The second number.
 * @param c - The third number.
 * @returns The sum of all three numbers.
 */
const addAll = (a, b, c) => {
    return a + b + c;
};
/**
 * Function with an optional parameter 'c'.
 * @param a - The first number.
 * @param b - The second number.
 * @param c - Optional: The third number.
 * @returns The sum of the provided numbers, excluding 'c' if not provided.
 */
const addAll2 = (a, b, c) => {
    if (typeof c !== "undefined") {
        return a + b + c;
    }
    return a + b;
};
/**
 * Function with default parameters.
 * @param a - Default: 9 (if not provided).
 * @param b - The second number.
 * @param c - Default: 2 (if not provided).
 * @returns The sum of all provided numbers, with defaults for 'a' and 'c'.
 */
const sumAll = (a = 9, b, c = 2) => {
    return a + b + c;
};
console.log(sumAll(2, 3)); // Output: 7
console.log(sumAll(undefined, 3)); // Output: 14 (using default value for 'a')
// ! Rest Parameters
/**
 * Function to sum all provided numbers using rest parameters.
 * @param props - The numbers to sum.
 * @returns The sum of all provided numbers.
 */
const restAllSum = (...props) => {
    return props.reduce((aggregate, currentValue) => aggregate + currentValue);
};
console.log(restAllSum(1, 2, 3, 4, 5, 6, 7, 8)); // Output: 36
/**
 * Function with a default parameter and rest parameters.
 * @param a - The default value or first number to add.
 * @param props - The additional numbers to sum.
 * @returns The sum of all provided numbers, including the default value.
 */
const restAllSum2 = (a = 10, ...props) => {
    return (a + props.reduce((aggregate, currentValue) => aggregate + currentValue));
};
console.log(restAllSum2(undefined, 2, 3, 4, 5, 6, 7, 8)); // Output: 45
// ! Example 1: Using 'never' with throwError
/**
 * Throws an error with the specified error message and never returns.
 * @param errorMsg - The error message to throw.
 * @returns This function never returns a value.
 * @throws Error with the specified error message.
 */
function throwError(errorMsg) {
    throw new Error(errorMsg);
}
// ! Example 2: Using 'never' with an Infinite Loop
/**
 * Continuously executes without ever reaching an endpoint.
 * @returns This function never returns a value.
 */
function keepProcessing() {
    while (true) {
        console.log("I always do something and never end.");
    }
}
// ! Error with 'never'
// keepProcessing();
// ! Using 'never' Type for Regular Functions
/**
 * Determines the type of the input value (number or string).
 * @param value - The value to check.
 * @returns "number" if the value is a number, "string" if the value is a string.
 * @throws Error if the input value is neither a number nor a string.
 */
const numberString01 = (value) => {
    if (typeof value === "number")
        return "number";
    if (typeof value === "string")
        return "string";
    // If the input value is neither a number nor a string, throw an error
    throw new Error("Invalid input type");
};
// Custom type guards
// Using type guards in functions
/**
 * Determines whether the given value is a number.
 * @param value - The value to check.
 * @returns True if the value is a number, otherwise false.
 */
const isNumber = (value) => {
    return typeof value === "number" ? true : false;
};
/**
 * Determines whether the given value is a string.
 * @param value - The value to check.
 * @returns True if the value is a string, otherwise false.
 */
const isString = (value) => {
    return typeof value === "string" ? true : false;
};
/**
 * Determines the type of the input value (number or string).
 * @param value - The value to check.
 * @returns "number" if the value is a number, "string" if the value is a string.
 * @throws Error if the input value is neither a number nor a string.
 */
const numberString = (value) => {
    if (isNumber(value))
        return "number";
    if (isString(value))
        return "string";
    // If the input value is neither a number nor a string, throw an error
    throw new Error("Invalid input type");
};
