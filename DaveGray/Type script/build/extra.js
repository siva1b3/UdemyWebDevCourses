"use strict";
// Tuple with string and number
let person = ["Siva", 25];
// enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
let c1 = Color.Green;
console.log(c1); // Output: 1
// Union type in arrays
let mixedArray = ["ABC123", 123, "XYZ456", 456];
let userId01;
userId01 = "ABC123";
userId01 = null; // Valid
/*
 * let value: string | number = "Hello";
 *
 * // TypeScript error: 'charAt' does not exist on type 'string | number'
 * // value.charAt(0);
 *
 * // This works because 'toString' is common to both string and number
 * console.log(value.toString());
 *
 * value = 123;
 *
 * // This works because 'toString' is common to both string and number
 * console.log(value.toString());
 *
 * // This would cause a runtime error if 'value' is a number
 * // console.log(value.toLocaleLowerCase());
 *
 */
let regex = /^[a-zA-Z0-9]+$/; // Matches alphanumeric characters only
let str = "Hello123";
if (regex.test(str)) {
    console.log("Valid string");
}
else {
    console.log("Invalid string");
}
let regex1 = /hello/;
regex1 = new RegExp("hello");
console.log(regex);
console.log(regex1);
/**
 * Summary of New Concepts:
 *
 * - **Tuple**: `userDetails` stores multiple values of different types in a fixed-size array.
 * - **Enum**: `Status` defines a set of named constants to represent different states.
 * - **Union Type**: `userId` can be either a string or a number, allowing flexibility in data types.
 * - **Optional Parameters**: `greetUser` has an optional `age` parameter that is not required.
 * - **Default Parameters**: `multiply` has a default value for parameter `b`, which is used if no value is provided.
 * - **Rest Parameters**: `sumAll` takes a variable number of arguments and computes their sum.
 * - **Void Return Type**: `logUserDetails` does not return any value, it only performs an action (logging).
 * - **Object Type and Interface**: `User` defines a structure for user data, and `displayUserInfo` works with this structured data.
 */
// Example of using tuple type
let userDetails;
// Tuple: [username, age, isAdmin]
userDetails = ["siva", 30, true];
// Example of using enum type
var Status;
(function (Status) {
    Status[Status["Active"] = 0] = "Active";
    Status[Status["Inactive"] = 1] = "Inactive";
    Status[Status["Suspended"] = 2] = "Suspended";
})(Status || (Status = {}));
let userStatus = Status.Active; // Assigning enum value to userStatus
console.log(userStatus);
let user2Status = Status.Inactive;
console.log(user2Status);
// Function with optional parameters
const greetUser = (name, age) => {
    if (age) {
        return `Hello, ${name}. You are ${age} years old.`;
    }
    else {
        return `Hello, ${name}.`;
    }
};
// Function with default parameters
const multiply = (a, b = 1) => {
    return a * b;
};
// Function with a rest parameter
const sumAll01 = (...numbers) => {
    return numbers.reduce((total, num) => total + num, 0);
};
// Function with a return type of void (no return value)
const logUserDetails = (details) => {
    console.log(`Username: ${details[0]}, Age: ${details[1]}, Admin: ${details[2]}`);
};
const user = {
    name: "Siva",
    age: 30,
    isActive: true,
};
// Function with object parameter
const displayUserInfo = (user) => {
    console.log(`Name: ${user.name}, Age: ${user.age}, Active: ${user.isActive}`);
};
// Summary of Edge Cases:
// Type Inference and Type Assertions: TypeScript can infer types, but using type assertions can help when you know more about the type than TypeScript can infer.
// Enum Value Out of Bounds: Enum values should be within the defined range of the enum. Direct assignments of numbers not within the enum’s range will cause type errors.
// Union Types and Type Narrowing: Proper type checks are required to handle union types and safely access properties or methods.
// Optional Parameters and Undefined: Optional parameters are undefined if not provided, and this needs to be handled in your code.
// Default Parameters and Undefined: Default parameters apply when arguments are not provided, but explicitly passing undefined does not use the default value.
// Handling Objects with Optional Properties: Optional properties may be undefined, and you should handle them safely to avoid runtime errors.
// Overloading Functions: Function overloading requires all overloads to be compatible in their return types.
// Excess Property Checking in Object Literals: TypeScript checks for extra properties in object literals, leading to errors if extra properties are present.
// Edge Case 1: Type Inference and Type Assertions
// TypeScript can infer types from the assigned value
let inferredString = "Hello, TypeScript"; // Type is inferred as string
// inferredString = 123; // Error: Type 'number' is not assignable to type 'string'
// Type assertions can override TypeScript's inferred types
let anyValue = "This is a string";
let stringLength = anyValue.length; // Correctly asserted as string
// Edge Case 2: Enum Value Out of Bounds
var Color01;
(function (Color01) {
    Color01[Color01["Red"] = 0] = "Red";
    Color01[Color01["Green"] = 1] = "Green";
    Color01[Color01["Blue"] = 2] = "Blue";
})(Color01 || (Color01 = {}));
let myColor01 = Color01.Green; // Valid
// let invalidColor01: Color01 = 4; // Error: Type '4' is not assignable to type 'Color'
// Edge Case 4: Optional Parameters and Undefined
// Optional parameters are undefined if not provided
const greet = (name, age) => {
    return age !== undefined
        ? `Hello, ${name}. You are ${age} years old.`
        : `Hello, ${name}.`;
};
console.log(greet("Alice")); // "Hello, Alice."
console.log(greet("Bob", 25)); // "Hello, Bob. You are 25 years old."
// Edge Case 5: Default Parameters and Undefined
// Default parameters do not override explicitly passed undefined
const multiplyWithDefault = (a, b = 2) => {
    return a * b;
};
console.log(multiplyWithDefault(5)); // 10, since default b is used
console.log(multiplyWithDefault(5, undefined)); // 10, since b is explicitly undefined
// If optional properties are not provided, handle them safely
const printProduct = (product) => {
    console.log(`Product ID: ${product.id}`);
    console.log(`Product Name: ${product.name}`);
    if (product.price !== undefined) {
        console.log(`Product Price: $${product.price}`);
    }
    else {
        console.log(`Price not available.`);
    }
};
const product1 = { id: 1, name: "Laptop" };
const product2 = { id: 2, name: "Phone", price: 699 };
printProduct(product1); // "Product ID: 1", "Product Name: Laptop", "Price not available."
printProduct(product2); // "Product ID: 2", "Product Name: Phone", "Product Price: $699"
function calculate(x, y) {
    // Implementation signature
    return x + y;
}
console.log(calculate(5, 10)); // 15
console.log(calculate("Hello, ", "World!")); // "Hello, World!"
const newUser = {
    name: "Jane",
    age: 28,
    // email: "jane@example.com" // Error: Object literal may only specify known properties
};
// To avoid this error, use type assertions or avoid object literals with extra properties
const anotherUser = {
    name: "John",
    age: 30,
};
// Edge Case 2: Tuples with Incorrect Length or Types
// This will throw an error because the tuple length or types do not match
// let invalidPerson: [string, number] = ["Siva", 25, true]; // Error: Tuple type '[string, number]' of length '2' has no element at index '2'
// let invalidPerson2: [string, number] = [25, "Siva"]; // Error: Type 'number' is not assignable to type 'string'
// Edge Case 3: Enum with String Values
var Status01;
(function (Status01) {
    Status01["Active"] = "ACTIVE";
    Status01["Inactive"] = "INACTIVE";
    Status01["Suspended"] = "SUSPENDED";
})(Status01 || (Status01 = {}));
let currentStatus = Status01.Active;
console.log(currentStatus); // Output: ACTIVE
// Edge Case 4: Any Type and Safety
let anyValue01 = 10;
anyValue = "Now a string";
anyValue = { name: "Object" };
let safeString = anyValue; // Cast safely
console.log(safeString); // Output: [Object]
let unsafeString = anyValue; // No type safety here, might cause runtime error
// console.log(unsafeString.toUpperCase()); // Runtime error if anyValue is not a string
// Edge Case 7: Arrays with Union Types and Type Safety
let mixedArray01 = ["ABC123", 123, "XYZ456", 456];
// Safe operations on mixed array
mixedArray.forEach((item) => {
    if (typeof item === "string") {
        console.log(`String item: ${item.toUpperCase()}`);
    }
    else {
        console.log(`Number item: ${item.toFixed(2)}`);
    }
});
// Edge Case 8: Enum with Explicit Values
var Size;
(function (Size) {
    Size["Small"] = "S";
    Size["Medium"] = "M";
    Size["Large"] = "L";
})(Size || (Size = {}));
let size = Size.Medium;
console.log(size); // Output: M
