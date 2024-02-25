"use strict";
let stringArr = ["dsfsf", "aasdad", "asdasd"];
let numArray = [1, 2, 3];
let numAndString = ["asdad", 1, 2, 3, "assdasd"];
let ArrayMixed = [1, 2, "asdasdasd", true, /qw/];
stringArr[0] = "asad";
stringArr.push("saad");
numAndString.push(23);
// numAndString can take values of both num and string arrays
numAndString = numArray;
numAndString = stringArr;
let test = [];
let bands = [];
bands.push("adasd");
// Declaring Arrays:
// Array literal syntax
let fruits = ["apple", "banana", "orange"];
// Generic Array syntax
let numbers1 = [1, 2, 3, 4, 5];
// Array Type Annotations:
let numbers2 = [1, 2, 3, 4, 5];
let names2 = ["Alice", "Bob", "Charlie"];
let mixed = ["apple", 5, "banana", 10]; // Array with mixed types
// Readonly Arrays:
let readOnlyArray = [1, 2, 3];
// readOnlyArray[0] = 4; // Error: Index signature in type 'readonly number[]' only permits reading.
// tuple
let myTuple;
myTuple = [1, "asd", true];
ArrayMixed = [1, "asd", true];
// array of tuples
let tuplesArray;
tuplesArray = [
    [1, "asdasd", true],
    [1, "asdasd", true],
    [1, "asdasd", true],
    [1, "asdasd", true],
    [1, "asdasd", true],
    [1, "asdasd", true],
];
// objects
let myObj;
// we can assign arrays here as we know arrays also a type of objects
myObj = [];
console.log(typeof myObj);
// ! Declaring Objects:
// You can declare objects using the object literal syntax
// `{}` or the `Record<keyType, valueType>` syntax.
// Object literal syntax
let person1 = { name: "Alice", age: 30 };
// Record syntax
let employee = { id: 123, salary: 50000 };
// ! Accessing Properties:
// You can access object properties using dot notation (`object.property`)
// or bracket notation (`object['property']`).
console.log(person1.name); // Output: 'Alice'
console.log(employee["id"]); // Output: 123
// Adding and Modifying Properties:
// You can add new properties or modify existing ones on an object.
person1.age = 31; // Modifying an existing property
// ! Object Methods:
// Objects in TypeScript can contain methods as well.
let calculator = {
    add: function (x, y) {
        return x + y;
    },
    subtract(x, y) {
        return x - y;
    },
};
console.log(calculator.add(5, 3)); // Output: 8
console.log(calculator.subtract(5, 3)); // Output: 2
// ! Nested Objects:
// Objects can contain other objects as values.
let company = {
    name: "ABC Corp",
    address: {
        street: "123 Main St",
        city: "Anytown",
    },
};
console.log(company.address.city); // Output: 'Anytown'
// ! Readonly Properties:
// You can declare individual properties of an object as readonly to prevent
// them from being modified after initialization.
let readOnlyPerson = { name: "Bob" };
// readOnlyPerson.name = 'Charlie'; // Error: Cannot assign to 'name' because it is a read-only property
let readOnlyPersonAndAge = {
    name: "Bob",
    age: 23,
};
readOnlyPersonAndAge.age = 34;
// Example
let originalObject = { name: "Alice", age: 30 };
let readonlyObject = originalObject;
// Now, all properties of readonlyObject are readonly
// Attempting to modify them will result in a TypeScript error
// readonlyObject.name = "Bob"; // Error: Cannot assign to 'name' because it is a read-only property
// readonlyObject.age = 31; // Error: Cannot assign to 'age' because it is a read-only property
// Example
let originalObject2 = { name: "Alice", age: 30 };
let readonlyObject2 = originalObject2;
// Create objects using the defined type
let person3 = {
    name: "Alice",
    age: 30,
    isAdmin: false,
    regularFunction: function () {
        console.log(`${this.name} is calling a regular function.`);
    },
    functionExpression: function () {
        console.log(`${this.name} is calling a function expression.`);
    },
};
let person4 = {
    name: "Bob",
    age: 25,
    gender: "male",
    email: "bob@example.com",
    hobbies: ["Reading", "Coding"],
    isAdmin: true,
    regularFunction: function () {
        console.log(`${this.name} is calling a regular function.`);
    },
    functionExpression: function () {
        console.log(`${this.name} is calling a function expression.`);
    },
};
// Function to print person details
function printPersonDetails(person) {
    console.log(`Name: ${person.name}`);
    console.log(`Age: ${person.age}`);
    if (person.gender) {
        console.log(`Gender: ${person.gender}`);
    }
    if (person.email) {
        console.log(`Email: ${person.email}`);
    }
    if (person.hobbies) {
        console.log("Hobbies:");
        person.hobbies.forEach((hobby) => console.log(`- ${hobby}`));
    }
    console.log(`Is Admin: ${person.isAdmin ? "Yes" : "No"}`);
}
// Print details of person1 and person2
console.log("Details of person3:");
printPersonDetails(person3);
console.log("\nDetails of person4:");
printPersonDetails(person4);
// Call different types of functions for person1 and person2
person3.regularFunction();
person3.functionExpression();
person4.regularFunction();
person4.functionExpression();
let person6 = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    email: "john@example.com",
    address: "123 Main St",
};
let person7 = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    email: "john@example.com",
    address: "123 Main St",
};
person7 = person6;
const person8 = person6;
function printPersonInfo(person) {
    console.log(`Name: ${person.firstName} ${person.lastName}`);
    console.log(`Age: ${person.age}`);
    if (person.email) {
        console.log(`Email: ${person.email}`);
    }
    // Print additional properties
    for (let key in person) {
        if (key !== "firstName" &&
            key !== "lastName" &&
            key !== "age" &&
            key !== "email") {
            console.log(`${key}: ${person[key]}`);
        }
    }
}
printPersonInfo(person6);
function printPersonInfo2(person) {
    var _a;
    console.log(`Name: ${(_a = person.firstName) === null || _a === void 0 ? void 0 : _a.toUpperCase()} ${person.lastName}`);
    console.log(`Age: ${person.age}`);
    if (person.email) {
        console.log(`Email: ${person.email}`);
    }
    // Print additional properties
    for (let key in person) {
        if (key !== "firstName" &&
            key !== "lastName" &&
            key !== "age" &&
            key !== "email") {
            console.log(`${key}: ${person[key]}`);
        }
    }
}
// Example usage
let person10 = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    email: "john@example.com",
    address: "123 Main St",
};
printPersonInfo2(person10);
var DayOfWeek;
(function (DayOfWeek) {
    DayOfWeek[DayOfWeek["Sunday"] = 0] = "Sunday";
    DayOfWeek[DayOfWeek["Monday"] = 1] = "Monday";
    DayOfWeek[DayOfWeek["Tuesday"] = 2] = "Tuesday";
    DayOfWeek[DayOfWeek["Wednesday"] = 3] = "Wednesday";
    DayOfWeek[DayOfWeek["Thursday"] = 4] = "Thursday";
    DayOfWeek[DayOfWeek["Friday"] = 5] = "Friday";
    DayOfWeek[DayOfWeek["Saturday"] = 6] = "Saturday";
})(DayOfWeek || (DayOfWeek = {}));
let today = DayOfWeek.Wednesday;
console.log("Today is", DayOfWeek[today]); // Output: Today is Wednesday
var Direction;
(function (Direction) {
    Direction["Up"] = "UP";
    Direction["Down"] = "DOWN";
    Direction["Left"] = "LEFT";
    Direction["Right"] = "RIGHT";
})(Direction || (Direction = {}));
let heading = Direction.Right;
console.log("Heading:", heading); // Output: Heading: RIGHT
var Color1;
(function (Color1) {
    Color1["Red"] = "#FF0000";
    Color1["Green"] = "#00FF00";
    Color1["Blue"] = "#0000FF";
})(Color1 || (Color1 = {}));
let selectedColor = Color1.Green;
console.log("Selected Color:", selectedColor); // Output: Selected Color: #00FF00
var Month;
(function (Month) {
    Month[Month["January"] = 1] = "January";
    Month[Month["February"] = 2] = "February";
    Month[Month["March"] = 3] = "March";
    Month[Month["April"] = 4] = "April";
    Month[Month["May"] = 5] = "May";
    Month[Month["June"] = 6] = "June";
    Month[Month["July"] = 7] = "July";
    Month[Month["August"] = 8] = "August";
    Month[Month["September"] = 9] = "September";
    Month[Month["October"] = 10] = "October";
    Month[Month["November"] = 11] = "November";
    Month[Month["December"] = 12] = "December";
})(Month || (Month = {}));
let birthMonth = Month.May;
console.log("Birth Month:", birthMonth); // Output: Birth Month: 5
var Suit;
(function (Suit) {
    Suit["Hearts"] = "\u2665\uFE0F";
    Suit["Diamonds"] = "\u2666\uFE0F";
    Suit["Clubs"] = "\u2663\uFE0F";
    Suit["Spades"] = "\u2660\uFE0F";
})(Suit || (Suit = {}));
let myCardSuit = Suit.Hearts;
console.log("My Card Suit:", myCardSuit); // Output: My Card Suit: ♥️
