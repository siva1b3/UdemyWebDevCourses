"use strict";
let myName;
let NumberOfLife;
let isEditing;
let album;
myName = "siva";
NumberOfLife = 45;
isEditing = true;
album = "text";
album = 456;
album = true;
console.log(myName);
console.log(NumberOfLife);
console.log(isEditing);
const sum = (a, b) => {
    return a + b;
};
const concat = (a, b) => {
    return a + b;
};
// ! union types
let dualType;
dualType = "siva";
dualType = 34;
let isActive;
isActive = true;
isActive = 0;
let num = 10;
let decimal = 10.5;
let message = "Hello, TypeScript!";
let isDone = false;
let numbers = [1, 2, 3, 4, 5];
let names = ["Siva", "John", "Alice"];
let person = ["Siva", 25]; // Tuple with string and number
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
let c1 = Color.Green;
console.log(c1); // Output: 1
let notSure = 10;
notSure = "Hello";
notSure = false;
// Union type: string or number
let id;
id = "ABC123"; // Valid
id = 123; // Valid
// id = true;
// Error: Type 'boolean' is not assignable to type 'string | number'
// Function that accepts a string or number
function printId(id) {
    console.log(id);
}
printId("ABC123"); // Valid
printId(123); // Valid
// printId(true);
// Error: Argument of type 'boolean' is not assignable to parameter of type 'string | number'
// Union type in arrays
let mixedArray = ["ABC123", 123, "XYZ456", 456];
let userId;
userId = "ABC123";
userId = null; // Valid
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
