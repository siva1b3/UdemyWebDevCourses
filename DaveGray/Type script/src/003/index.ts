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
let bands: string[] = [];

bands.push("adasd");

// Declaring Arrays:
// Array literal syntax
let fruits: string[] = ["apple", "banana", "orange"];

// Generic Array syntax
let numbers1: Array<number> = [1, 2, 3, 4, 5];

// Array Type Annotations:
let numbers2: number[] = [1, 2, 3, 4, 5];
let names2: string[] = ["Alice", "Bob", "Charlie"];
let mixed: (string | number)[] = ["apple", 5, "banana", 10]; // Array with mixed types

// Readonly Arrays:
let readOnlyArray: readonly number[] = [1, 2, 3];
// readOnlyArray[0] = 4; // Error: Index signature in type 'readonly number[]' only permits reading.

// tuple
let myTuple: [number, string, boolean];
myTuple = [1, "asd", true];

ArrayMixed = [1, "asd", true];

// array of tuples
let tuplesArray: [number, string, boolean][];
tuplesArray = [
  [1, "asdasd", true],
  [1, "asdasd", true],
  [1, "asdasd", true],
  [1, "asdasd", true],
  [1, "asdasd", true],
  [1, "asdasd", true],
];

// objects
let myObj: object;

// we can assign arrays here as we know arrays also a type of objects
myObj = [];

console.log(typeof myObj);

// ! Declaring Objects:
// You can declare objects using the object literal syntax
// `{}` or the `Record<keyType, valueType>` syntax.

// Object literal syntax
let person1: { name: string; age: number } = { name: "Alice", age: 30 };

// Record syntax
let employee: Record<string, number> = { id: 123, salary: 50000 };

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
  add: function (x: number, y: number): number {
    return x + y;
  },
  subtract(x: number, y: number): number {
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

let readOnlyPerson: { readonly name: string } = { name: "Bob" };
// readOnlyPerson.name = 'Charlie'; // Error: Cannot assign to 'name' because it is a read-only property

let readOnlyPersonAndAge: { readonly name: string; age: number } = {
  name: "Bob",
  age: 23,
};

readOnlyPersonAndAge.age = 34;

// Example
let originalObject = { name: "Alice", age: 30 };
let readonlyObject: Readonly<typeof originalObject> = originalObject;

// Now, all properties of readonlyObject are readonly
// Attempting to modify them will result in a TypeScript error
// readonlyObject.name = "Bob"; // Error: Cannot assign to 'name' because it is a read-only property
// readonlyObject.age = 31; // Error: Cannot assign to 'age' because it is a read-only property

// Example
let originalObject2 = { name: "Alice", age: 30 } as const;
let readonlyObject2: typeof originalObject2 = originalObject2;

// ! Define an object type for a person
type Person = {
  name: string;
  age: number;
  gender?: string;
  email?: string;
  hobbies?: string[];
  isAdmin: boolean;
  // Properties for different types of functions
  regularFunction: () => void;
  functionExpression: () => void;
};

// Create objects using the defined type
let person3: Person = {
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

let person4: Person = {
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
function printPersonDetails(person: Person) {
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

type Person5 = {
  firstName: string;
  lastName: string;
  age: number;
  email?: string; // Optional property
  [key: string]: any; // Index signature for additional properties
};

let person6: Person5 = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  email: "john@example.com",
  address: "123 Main St",
};

let person7: Person5 = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  email: "john@example.com",
  address: "123 Main St",
};

person7 = person6;

const person8: Person5 = person6;

function printPersonInfo(person: Person5): void {
  console.log(`Name: ${person.firstName} ${person.lastName}`);
  console.log(`Age: ${person.age}`);
  if (person.email) {
    console.log(`Email: ${person.email}`);
  }
  // Print additional properties
  for (let key in person) {
    if (
      key !== "firstName" &&
      key !== "lastName" &&
      key !== "age" &&
      key !== "email"
    ) {
      console.log(`${key}: ${person[key]}`);
    }
  }
}

printPersonInfo(person6);

interface Person9 {
  firstName?: string;
  lastName: string;
  age: number;
  email?: string; // Optional property
  [key: string]: any; // Index signature for additional properties
}

function printPersonInfo2(person: Person9): void {
  console.log(`Name: ${person.firstName?.toUpperCase()} ${person.lastName}`);
  console.log(`Age: ${person.age}`);
  if (person.email) {
    console.log(`Email: ${person.email}`);
  }
  // Print additional properties
  for (let key in person) {
    if (
      key !== "firstName" &&
      key !== "lastName" &&
      key !== "age" &&
      key !== "email"
    ) {
      console.log(`${key}: ${person[key]}`);
    }
  }
}

// Example usage
let person10: Person9 = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  email: "john@example.com",
  address: "123 Main St",
};

printPersonInfo2(person10);

enum DayOfWeek {
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
}

let today: DayOfWeek = DayOfWeek.Wednesday;
console.log("Today is", DayOfWeek[today]); // Output: Today is Wednesday

enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}

let heading: Direction = Direction.Right;
console.log("Heading:", heading); // Output: Heading: RIGHT

enum Color1 {
  Red = "#FF0000",
  Green = "#00FF00",
  Blue = "#0000FF",
}

let selectedColor: Color1 = Color1.Green;
console.log("Selected Color:", selectedColor); // Output: Selected Color: #00FF00

enum Month {
  January = 1,
  February,
  March,
  April,
  May,
  June,
  July,
  August,
  September,
  October,
  November,
  December,
}

let birthMonth: Month = Month.May;
console.log("Birth Month:", birthMonth); // Output: Birth Month: 5

enum Suit {
  Hearts = "♥️",
  Diamonds = "♦️",
  Clubs = "♣️",
  Spades = "♠️",
}

let myCardSuit: Suit = Suit.Hearts;
console.log("My Card Suit:", myCardSuit); // Output: My Card Suit: ♥️
