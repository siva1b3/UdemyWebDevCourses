"use strict";
// Declaring a tuple
let person05;
// Initializing a tuple
person05 = ["Alice", 30];
// Accessing elements
let name06 = person05[0]; // "Alice"
let age = person05[1]; // 30
// Tuple with different types
let mixedTuple;
mixedTuple = ["John", 25, true];
// Accessing elements of mixedTuple
let name2 = mixedTuple[0]; // "John"
let age2 = mixedTuple[1]; // 25
let isActive01 = mixedTuple[2]; // true
// Declaring and initializing a tuple
let product01;
product01 = ["Laptop", 1500, true];
// Accessing elements
let productName = product01[0]; // "Laptop"
let productPrice = product01[1]; // 1500
let productAvailable = product01[2]; // true
// Modifying elements
product01[1] = 1600; // Change the price
// Accessing modified element
let updatedProductPrice = product01[1]; // 1600
// Creating an array of Employee objects
let employees = [
    {
        name: "John",
        age: 35,
        greet() {
            console.log(`Hello from ${this.name}!`);
        },
    },
    {
        name: "Jane",
        age: 28,
        greet() {
            console.log(`Hello from ${this.name}!`);
        },
    },
];
// Creating an Address object
let companyAddress = {
    street: "123 Main St",
    city: "Anytown",
};
// Creating a Company object
let company01 = {
    name: "ABC Inc.",
    address: companyAddress,
    employees: employees, // Assigning the employees array
};
// Logging the Company object
console.log("Company:");
console.log(company01);
// Iterating over employees and invoking greet() method
console.log("\nEmployees Greetings:");
company01.employees.forEach((employee) => {
    employee.greet();
});
// Create a Car object based on the Car interface
let car = {
    make: "BMW", // Define the make of the car
    start() {
        // Define the method to start the engine
        console.log("Engine started"); // Output a message when engine starts
    },
};
// Logging the make of the car using dot notation
console.log(`Car make: ${car.make}`); // Output: Car make: BMW
// Invoke the start method of the car object
console.log("Starting the car...");
car.start(); // Output: Engine started
// Define a person04 object with firstName, lastName, and age01 properties
let person04 = {
    firstName: "Alice",
    lastName: "Smith",
    age01: 25,
};
// Destructuring assignment to extract firstName and lastName from person04 object
let { firstName, lastName } = person04;
// Logging the original person04 object
console.log("Original Person Object:");
console.log(person04);
// Logging the extracted firstName and lastName
console.log("\nExtracted Properties:");
console.log(`First Name: ${firstName}`); // Output: First Name: Alice
console.log(`Last Name: ${lastName}`); // Output: Last Name: Smith
// Scenarios and Considerations
// Missing Properties: If the property being destructured is not present in the object, the resulting variable will be undefined.
// let { age01, email } = person04;
// console.log("\nDestructuring with Missing Properties:");
// console.log(`Age: ${age01}`); // Output: Age: 25
// console.log(`Email: ${email}`); // Output: Email: undefined
// Nested Destructuring: Destructuring can also be used for nested objects, but care must be taken to ensure that all nested properties exist.
let nestedObject = {
    name01: "John",
    address: {
        street: "123 Main St",
        city: "Anytown",
    },
};
let { name01, address: { street, city }, } = nestedObject;
console.log("\nNested Destructuring:");
console.log(`Name: ${name01}`); // Output: Name: John
console.log(`Street: ${street}`); // Output: Street: 123 Main St
console.log(`City: ${city}`); // Output: City: Anytown
// Unexpected Behavior: Renaming properties incorrectly or trying to destructure null or undefined can lead to errors, so defensive programming practices are recommended.
let anotherPerson = {
    firstName: "Bob",
    // lastName: "Jones" // Uncomment this line to simulate missing lastName
};
// let { firstName: first, lastName: last } = anotherPerson; // Renaming properties incorrectly
// console.log("\nDestructuring with Renaming (potential error):");
// console.log(`First Name: ${first}`); // Output: First Name: Bob
// console.log(`Last Name: ${last}`); // Output: Last Name: undefined (if lastName is not defined)
var AccountType;
(function (AccountType) {
    AccountType["PERSONAL"] = "Personal";
    AccountType["STARTUP"] = "Startup";
    AccountType["ENTERPRISE"] = "Enterprise";
})(AccountType || (AccountType = {}));
var BillingSchedule;
(function (BillingSchedule) {
    BillingSchedule[BillingSchedule["FREE"] = 0] = "FREE";
    BillingSchedule[BillingSchedule["MONTHLY"] = 1] = "MONTHLY";
    BillingSchedule[BillingSchedule["QUARTERLY"] = 2] = "QUARTERLY";
    BillingSchedule[BillingSchedule["YEARLY"] = 3] = "YEARLY";
})(BillingSchedule || (BillingSchedule = {}));
const accountType = AccountType.PERSONAL;
const billingSchedule = BillingSchedule.FREE;
console.log(accountType); // "Personal"
console.log(billingSchedule); // 0
console.log(BillingSchedule.MONTHLY); // 1
console.log(BillingSchedule.QUARTERLY); // 2
console.log(BillingSchedule.YEARLY); // 3
// Heterogenous enum
var AccountType2;
(function (AccountType2) {
    AccountType2[AccountType2["CUSTOM"] = 0] = "CUSTOM";
    AccountType2["PERSONAL"] = "Personal";
    AccountType2["STARTUP"] = "Startup";
    AccountType2["ENTERPRISE"] = "Enterprise";
})(AccountType2 || (AccountType2 = {}));
const accountTypeCustom = AccountType2.CUSTOM;
console.log(accountTypeCustom); // 0
