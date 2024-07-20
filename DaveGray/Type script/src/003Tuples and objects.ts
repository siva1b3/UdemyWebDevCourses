// Declaring a tuple
let person05: [string, number];

// Initializing a tuple
person05 = ["Alice", 30];

// Accessing elements
let name06: string = person05[0]; // "Alice"
let age: number = person05[1]; // 30

// Tuple with different types
let mixedTuple: [string, number, boolean];
mixedTuple = ["John", 25, true];

// Accessing elements of mixedTuple
let name2: string = mixedTuple[0]; // "John"
let age2: number = mixedTuple[1]; // 25
let isActive01: boolean = mixedTuple[2]; // true

// Declaring and initializing a tuple
let product01: [string, number, boolean];
product01 = ["Laptop", 1500, true];

// Accessing elements
let productName: string = product01[0]; // "Laptop"
let productPrice: number = product01[1]; // 1500
let productAvailable: boolean = product01[2]; // true

// Modifying elements
product01[1] = 1600; // Change the price

// Accessing modified element
let updatedProductPrice: number = product01[1]; // 1600

// Define an interface for Employee objects
interface Employee {
  name: string;
  age: number;
  greet(): void; // Method to greet
}

// Define an interface for Address objects
interface Address {
  street: string;
  city: string;
}

// Define an interface for Company objects
interface Company {
  name: string;
  address: Address;
  employees: Employee[]; // Array of Employee objects
}

// Creating an array of Employee objects
let employees: Employee[] = [
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
let companyAddress: Address = {
  street: "123 Main St",
  city: "Anytown",
};

// Creating a Company object
let company01: Company = {
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

// Define an interface for the Car object
interface Car {
  make: string;
  start(): void; // Method declaration for starting the engine
}

// Create a Car object based on the Car interface
let car: Car = {
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

let {
  name01,
  address: { street, city },
} = nestedObject;
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

enum AccountType {
  PERSONAL = "Personal",
  STARTUP = "Startup",
  ENTERPRISE = "Enterprise",
}

enum BillingSchedule {
  FREE = 0,
  MONTHLY,
  QUARTERLY,
  YEARLY,
}

const accountType = AccountType.PERSONAL;
const billingSchedule = BillingSchedule.FREE;

console.log(accountType); // "Personal"
console.log(billingSchedule); // 0
console.log(BillingSchedule.MONTHLY); // 1
console.log(BillingSchedule.QUARTERLY); // 2
console.log(BillingSchedule.YEARLY); // 3
// Heterogenous enum

enum AccountType2 {
  CUSTOM,
  PERSONAL = "Personal",
  STARTUP = "Startup",
  ENTERPRISE = "Enterprise",
}

const accountTypeCustom = AccountType2.CUSTOM;
console.log(accountTypeCustom); // 0

// enum
enum Color {
  Red,
  Green,
  Blue,
}

let c1: Color = Color.Green;
console.log(c1); // Output: 1

// Example of using enum type
enum Status {
  Active,
  Inactive,
  Suspended,
}
let userStatus: Status = Status.Active; // Assigning enum value to userStatus
console.log(userStatus);

let user2Status: Status = Status.Inactive;
console.log(user2Status);

// Example of using object type
interface User {
  name: string;
  age: number;
  isActive: boolean;
}

const user02: User = {
  name: "Siva",
  age: 30,
  isActive: true,
};

// Function with object parameter
const displayUserInfo02 = (user: User): void => {
  console.log(
    `Name: ${user02.name}, Age: ${user02.age}, Active: ${user02.isActive}`
  );
};

// TypeScript checks object literals for extra properties
interface User01 {
  name: string;
  age: number;
}

const newUser01: User01 = {
  name: "Jane",
  age: 28,
  // email: "jane@example.com" // Error: Object literal may only specify known properties
};

// To avoid this error, use type assertions or avoid object literals with extra properties
const anotherUser01 = {
  name: "John",
  age: 30,
} as User01;
