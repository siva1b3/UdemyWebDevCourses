// Tuple with string and number
let person: [string, number] = ["Siva", 25];

// Union type in arrays
let mixedArray: (string | number)[] = ["ABC123", 123, "XYZ456", 456];

let userId01: string | null;
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

let regex: RegExp = /^[a-zA-Z0-9]+$/; // Matches alphanumeric characters only

let str: string = "Hello123";
if (regex.test(str)) {
  console.log("Valid string");
} else {
  console.log("Invalid string");
}

let regex1: RegExp = /hello/;
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
let userDetails: [string, number, boolean];
// Tuple: [username, age, isAdmin]
userDetails = ["siva", 30, true];

// Function with optional parameters
const greetUser = (name: string, age?: number): string => {
  if (age) {
    return `Hello, ${name}. You are ${age} years old.`;
  } else {
    return `Hello, ${name}.`;
  }
};

// Function with default parameters
const multiply = (a: number, b: number = 1): number => {
  return a * b;
};

// Function with a rest parameter
const sumAll01 = (...numbers: number[]): number => {
  return numbers.reduce((total, num) => total + num, 0);
};

// Function with a return type of void (no return value)
const logUserDetails = (details: [string, number, boolean]): void => {
  console.log(
    `Username: ${details[0]}, Age: ${details[1]}, Admin: ${details[2]}`
  );
};

// Example of using object type
interface User {
  name: string;
  age: number;
  isActive: boolean;
}

const user: User = {
  name: "Siva",
  age: 30,
  isActive: true,
};

// Function with object parameter
const displayUserInfo = (user: User): void => {
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
let anyValue: any = "This is a string";
let stringLength: number = (anyValue as string).length; // Correctly asserted as string

// Edge Case 2: Enum Value Out of Bounds
enum Color01 {
  Red,
  Green,
  Blue,
}
let myColor01: Color01 = Color01.Green; // Valid
// let invalidColor01: Color01 = 4; // Error: Type '4' is not assignable to type 'Color'

// Edge Case 4: Optional Parameters and Undefined

// Optional parameters are undefined if not provided
const greet = (name: string, age?: number): string => {
  return age !== undefined
    ? `Hello, ${name}. You are ${age} years old.`
    : `Hello, ${name}.`;
};

console.log(greet("Alice")); // "Hello, Alice."
console.log(greet("Bob", 25)); // "Hello, Bob. You are 25 years old."

// Edge Case 5: Default Parameters and Undefined

// Default parameters do not override explicitly passed undefined
const multiplyWithDefault = (a: number, b: number = 2): number => {
  return a * b;
};

console.log(multiplyWithDefault(5)); // 10, since default b is used
console.log(multiplyWithDefault(5, undefined)); // 10, since b is explicitly undefined

// Edge Case 6: Handling Objects with Optional Properties

interface Product {
  id: number;
  name: string;
  price?: number; // Optional property
}

// If optional properties are not provided, handle them safely
const printProduct = (product: Product): void => {
  console.log(`Product ID: ${product.id}`);
  console.log(`Product Name: ${product.name}`);
  if (product.price !== undefined) {
    console.log(`Product Price: $${product.price}`);
  } else {
    console.log(`Price not available.`);
  }
};

const product1: Product = { id: 1, name: "Laptop" };
const product2: Product = { id: 2, name: "Phone", price: 699 };

printProduct(product1); // "Product ID: 1", "Product Name: Laptop", "Price not available."
printProduct(product2); // "Product ID: 2", "Product Name: Phone", "Product Price: $699"

// Edge Case 7: Overloading Functions

// TypeScript allows function overloading, but all overloads must have compatible return types
function calculate(x: number, y: number): number; // Overload signature
function calculate(x: string, y: string): string; // Overload signature
function calculate(x: any, y: any): any {
  // Implementation signature
  return x + y;
}

console.log(calculate(5, 10)); // 15
console.log(calculate("Hello, ", "World!")); // "Hello, World!"

// Edge Case 8: Excess Property Checking in Object Literals

// TypeScript checks object literals for extra properties
interface User01 {
  name: string;
  age: number;
}

const newUser: User01 = {
  name: "Jane",
  age: 28,
  // email: "jane@example.com" // Error: Object literal may only specify known properties
};

// To avoid this error, use type assertions or avoid object literals with extra properties
const anotherUser = {
  name: "John",
  age: 30,
} as User;

// Edge Case 2: Tuples with Incorrect Length or Types
// This will throw an error because the tuple length or types do not match
// let invalidPerson: [string, number] = ["Siva", 25, true]; // Error: Tuple type '[string, number]' of length '2' has no element at index '2'
// let invalidPerson2: [string, number] = [25, "Siva"]; // Error: Type 'number' is not assignable to type 'string'

// Edge Case 3: Enum with String Values
enum Status01 {
  Active = "ACTIVE",
  Inactive = "INACTIVE",
  Suspended = "SUSPENDED",
}

let currentStatus: Status01 = Status01.Active;
console.log(currentStatus); // Output: ACTIVE

// Edge Case 4: Any Type and Safety
let anyValue01: any = 10;
anyValue = "Now a string";
anyValue = { name: "Object" };

let safeString: string = <string>anyValue; // Cast safely
console.log(safeString); // Output: [Object]

let unsafeString: string = anyValue; // No type safety here, might cause runtime error
// console.log(unsafeString.toUpperCase()); // Runtime error if anyValue is not a string

// Edge Case 7: Arrays with Union Types and Type Safety
let mixedArray01: (string | number)[] = ["ABC123", 123, "XYZ456", 456];

// Safe operations on mixed array
mixedArray.forEach((item) => {
  if (typeof item === "string") {
    console.log(`String item: ${item.toUpperCase()}`);
  } else {
    console.log(`Number item: ${item.toFixed(2)}`);
  }
});

// Edge Case 8: Enum with Explicit Values
enum Size {
  Small = "S",
  Medium = "M",
  Large = "L",
}

let size: Size = Size.Medium;
console.log(size); // Output: M
