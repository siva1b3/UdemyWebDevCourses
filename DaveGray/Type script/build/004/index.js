"use strict";
// ! type aliases
// ! literal Types
let myName1;
myName1 = "dave";
let myName2;
myName2 = "siva";
myName2 = "dave";
// ! functions
const add = (a, b = 0) => {
    return a + b;
};
const logmsg = (a) => {
    console.log(a);
};
logmsg("adads");
// ! error
// logmsg(add(2, 3));
// ! type functions
const subtract = function (a, b) {
    return a - b;
};
const subtract2 = (c, d) => {
    return c - d;
};
// ! interface functions
const subtract3 = function (a, b) {
    return a - b;
};
const subtract4 = (c, d) => {
    return c - d;
};
// ! optional parameters
// ^ normal function with out options
const addAll = (a, b, c) => {
    return a + b + c;
};
// * function with options
const addAll2 = (a, b, c) => {
    if (typeof c !== "undefined") {
        return a + b + c;
    }
    return a + b;
};
// * function with options
const sumAll = (a = 9, b, c = 2) => {
    return a + b + c;
};
console.log(sumAll(2, 3));
console.log(sumAll(undefined, 3));
// ! rest parameters
const restAllSum = (...props) => {
    return props.reduce((aggreate, currentValue) => aggreate + currentValue);
};
console.log(restAllSum(1, 2, 3, 4, 5, 6, 7, 8));
const restAllSum2 = (a = 10, ...props) => {
    return a + props.reduce((aggreate, currentValue) => aggreate + currentValue);
};
console.log(restAllSum2(undefined, 2, 3, 4, 5, 6, 7, 8));
// ! Example 1: Using never with throwError
// Define a function that throws an error and never returns
function throwError(errorMsg) {
    throw new Error(errorMsg);
}
// Example usage of throwError function
try {
    throwError("Something went wrong!");
    // This line will throw an error and halt further execution
}
catch (error) {
    console.error("Error caught:");
}
//!  Example 2: Using never with an Infinite Loop
// Define a function that continuously executes without ever reaching an endpoint
function keepProcessing() {
    while (true) {
        console.log("I always do something and never end.");
    }
}
// Example usage of keepProcessing function (uncomment to run, but beware of infinite loop)
// ! error with never
// keepProcessing();
// ! use never type for regular functions
const numberString01 = (value) => {
    if (typeof value === "number")
        return "number";
    if (typeof value === "string")
        return "string";
    // If the input value is neither a number nor a string, throw an error
    throw new Error("Invalid input type");
};
// ! custom type garuds
const isNumber = (value) => {
    return typeof value === "number" ? true : false;
};
const isString = (value) => {
    return typeof value === "string" ? true : false;
};
// ! use type gaurds in functions
const numberString = (value) => {
    if (isNumber(value))
        return "number";
    if (isString(value))
        return "string";
    // If the input value is neither a number nor a string, throw an error
    throw new Error("Invalid input type");
};
