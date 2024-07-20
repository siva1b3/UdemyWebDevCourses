// Variable declarations with appropriate types

let userName01: string;
// Stores the user's name

let lifeCount: number;
// Stores the number of lives

let isEditing: boolean;
// Indicates if the user is currently editing

let albumDetails: any;
// Can hold any type of value related to an album

// Assigning values to variables
userName01 = "siva"; // String value assigned to userName01
lifeCount = 45; // Numeric value assigned to lifeCount
isEditing = true; // Boolean value indicating editing state
albumDetails = "text"; // Initially assigning a string to albumDetails
albumDetails = 456; // Reassigning a number to albumDetails
albumDetails = true; // Reassigning a boolean to albumDetails

// Logging variable values to the console
console.log(userName01); // Output: siva
console.log(lifeCount); // Output: 45
console.log(isEditing); // Output: true

// Function to calculate the sum of two numbers
const addNumbers = (a: number, b: number): number => {
  return a + b;
};

// Function to concatenate two strings
const concatenateStrings = (a: string, b: string): string => {
  return a + b;
};

// Function to concatenate a number and a string, converting the number to string
const concatenateNumberAndString = (a: number, b: string): string => {
  return a + b; // Number is converted to string and concatenated
};

// Function to log the sum of two numbers without returning any value
const logSum = (a: number, b: number): void => {
  console.log(a + b);
};

// Union types
let flexibleType: string | number;

flexibleType = "siva";
flexibleType = 34;

let isActive: boolean | number;

isActive = true;
isActive = 0;

// Regular Expression type
let regexExpression = /\w+/g;

let regexPattern: RegExp;
regexPattern = /\w+/g;

// Example of using a union type
let userID: string | number; // userID can be a string or a number
userID = "user123"; // string assignment
userID = 123456; // number assignment

let notSure: any = 10;
notSure = "Hello";
notSure = false;

// Function that accepts a string or number
function printIdentifier(id: string | number) {
  console.log(id);
}

printIdentifier("ABC123"); // Valid
printIdentifier(123); // Valid

// Edge Case: Union Types and Type Narrowing

// Type narrowing in TypeScript requires checks
function printID(id: string | number): void {
  if (typeof id === "string") {
    console.log(`String ID: ${id.toUpperCase()}`); // Safe: id is string here
  } else {
    console.log(`Number ID: ${id.toFixed(2)}`); // Safe: id is number here
  }
}

// Function Overloading:

// Function overloading allows defining multiple function signatures for the same function name (fetchDetails in this case).
// Each signature specifies the types of parameters it accepts and the return type it should produce.

// Function Signatures:

// Signature 1: Accepts either a string or a number and returns a string.
function fetchDetails(value: string | number): string;

// Signature 2: Accepts an array of strings or numbers and returns a string.
function fetchDetails(value: string | number[]): string;

// Actual Implementation:

// The function fetchDetails itself implements the logic based on the type of value:
// - If value is a string (typeof value === "string"), it returns a string prefixed with "String value: ".
// - If value is a number (typeof value === "number"), it returns a string prefixed with "Number value: ".
// - If value is an array (Array.isArray(value)), it joins the elements into a comma-separated string prefixed with "Number array value: ".
function fetchDetails(value: string | number | number[]): string {
  if (typeof value === "string") {
    return `String value: ${value}`;
  } else if (typeof value === "number") {
    return `Number value: ${value}`;
  } else {
    return `Number array value: ${value.join(", ")}`;
  }
}

// Example Usage:

// We demonstrate calling fetchDetails with different types of arguments:
console.log(fetchDetails("Hello")); // Outputs "String value: Hello".
console.log(fetchDetails(123)); // Outputs "Number value: 123".
console.log(fetchDetails([1, 2, 3])); // Outputs "Number array value: 1, 2, 3".

// This code showcases TypeScript's ability to handle function overloading using union types,
// ensuring type safety and clarity in function usage and implementation.

// ! Function Overloading in TypeScript:

// * Function overloading allows defining multiple function signatures for the same function name (calculateArea in this case).
// & Each signature specifies the types of parameters it expects and the return type it should produce.

// ^ Main Function Implementation:

// * The main function calculateArea(shape: any, ...args: any[]): number {...} handles the calculation based on the shape and its corresponding arguments.
// ^ While this approach dynamically processes any shape and arguments, function overloading provides several benefits:

// ! 1. Type Safety and Clarity:
//    - Function overloading defines clear expectations on the types and order of parameters, enhancing code readability and preventing type-related bugs.

// ! 2. Intellisense and IDE Support:
//    - IDEs can provide accurate auto-completion and parameter suggestions based on defined function signatures, improving developer productivity.

// ! 3. Compile-Time Checking:
//    - TypeScript performs type checks at compile time. Function overloading helps TypeScript enforce these checks more effectively, reducing runtime errors.

// ! 4. Readability and Maintainability:
//    - By explicitly declaring function signatures, the code becomes more readable and maintainable, as it separates different logical paths within the function.

// ! 5. Documentation and Intent:
//    - Function signatures serve as documentation, communicating the intended usage of the function to other developers.

// ! Conclusion:
// Function overloading, while not strictly necessary for the main function to work, significantly enhances code quality, developer experience, and maintainability in TypeScript projects.

// Function Overloading with Union Types:

// Function to calculate the area of a circle or rectangle
// Signature 1: Accepts shape as "circle" and radius as number, returns area as number.
function calculateArea(shape: "circle", radius: number): number;
// Signature 2: Accepts shape as "rectangle", width as number, height as number, returns area as number.
function calculateArea(
  shape: "rectangle",
  width: number,
  height: number
): number;
// The actual implementation of calculateArea handles different shapes and calculates their areas.
function calculateArea(shape: any, ...args: any[]): number {
  if (shape === "circle") {
    const [radius] = args;
    return Math.PI * radius * radius; // Calculates area of circle
  } else if (shape === "rectangle") {
    const [width, height] = args;
    return width * height; // Calculates area of rectangle
  } else {
    throw new Error("Invalid shape provided"); // Throws error for unsupported shape
  }
}

// Examples:
console.log(calculateArea("circle", 5)); // Output: ~78.54
console.log(calculateArea("rectangle", 3, 4)); // Output: 12
console.log(calculateArea("circle", 1));
console.log(calculateArea("rectangle", 2, 3));
// console.log(calculateArea("triangle", 3, 4)); // Throws error: Invalid shape provided

// Type Guards and Type Narrowing:

// Function to process a value that can be a string or number
function processValue(value: string | number): void {
  if (typeof value === "string") {
    console.log(`String value: ${value.toUpperCase()}`); // Converts and logs uppercase string
  } else if (typeof value === "number") {
    console.log(`Number value: ${value.toFixed(2)}`); // Formats and logs number with 2 decimals
  } else {
    throw new Error("Unexpected type"); // Throws error for unexpected type
  }
}

// Examples:
processValue("hello"); // Output: String value: HELLO
processValue(42); // Output: Number value: 42.00
// processValue(true); // Throws error: Unexpected type

// Example: Type Guards and Type Narrowing

// Define a type for a primitive value that could be a string or number
type Primitive = string | number;

// Function to process a primitive value and log its type-specific details
function processPrimitive(value: Primitive): void {
  if (typeof value === "string") {
    // Inside this block, TypeScript knows 'value' is a string
    console.log(`Processing string: ${value.toUpperCase()}`);
  } else if (typeof value === "number") {
    // Inside this block, TypeScript knows 'value' is a number
    console.log(`Processing number: ${value.toFixed(2)}`);
  } else {
    // If TypeScript cannot narrow down to string or number, throw an error
    throw new Error(`Unexpected type: ${typeof value}`);
  }

  // After the if-else checks, TypeScript knows 'value' is either a string or a number
  console.log(`Length of value: ${value.toString().length}`); // TypeScript knows 'toString' exists for string or number
}

// Examples
processPrimitive("hello"); // Output: Processing string: HELLO, Length of value: 5
processPrimitive(42); // Output: Processing number: 42.00, Length of value: 2

// Uncommenting the line below would result in a TypeScript error because 'boolean' is not allowed as a type in 'Primitive'
// processPrimitive(true);

// Example: Type Guards and Type Narrowing in Array Processing

// Define a type for a primitive value that could be a string or number
type Primitive01 = string | number;

// Function to process an array of primitives and calculate statistics
function processArray(arr: Primitive01[]): void {
  let sum: number = 0;
  let stringCount: number = 0;

  // Iterate through each element in the array
  arr.forEach((value) => {
    if (typeof value === "string") {
      // Inside this block, TypeScript knows 'value' is a string
      console.log(`String value: ${value}`);
      stringCount++;
    } else if (typeof value === "number") {
      // Inside this block, TypeScript knows 'value' is a number
      console.log(`Number value: ${value}`);
      sum += value;
    } else {
      // If TypeScript cannot narrow down to string or number, throw an error
      throw new Error(`Unexpected type: ${typeof value}`);
    }
  });

  // After the if-else checks, TypeScript knows 'value' is either a string or a number
  console.log(`Total strings: ${stringCount}`);
  console.log(`Sum of numbers: ${sum.toFixed(2)}`);
}

// Examples
processArray(["hello", 42, "world", 7.5]);
// Output:
// String value: hello
// Number value: 42
// String value: world
// Number value: 7.5
// Total strings: 2
// Sum of numbers: 49.50

// Uncommenting the line below would result in a TypeScript error because 'boolean' is not allowed as a type in 'Primitive'
// processArray(["apple", true, 3.14]);
