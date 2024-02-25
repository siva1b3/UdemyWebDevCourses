let myName: string;
let NumberOfLife: number;
let isEditing: boolean;
let album: any;

myName = "siva";
NumberOfLife = 45;
isEditing = true;
album = "text";
album = 456;
album = true;

console.log(myName);
console.log(NumberOfLife);
console.log(isEditing);

const sum = (a: number, b: number) => {
  return a + b;
};

const concat = (a: string, b: string) => {
  return a + b;
};

const concatWithNumbers = (a: number, b: string) => {
  return a + b;
};

// ! union types
let dualType: string | number;

dualType = "siva";
dualType = 34;

let isActive: boolean | number;

isActive = true;
isActive = 0;

let num: number = 10;
let decimal: number = 10.5;
let message: string = "Hello, TypeScript!";
let isDone: boolean = false;

// array
let numbers: number[] = [1, 2, 3, 4, 5];
let names: string[] = ["Siva", "John", "Alice"];

// Tuple with string and number
let person: [string, number] = ["Siva", 25];

// enum
enum Color {
  Red,
  Green,
  Blue,
}

let c1: Color = Color.Green;
console.log(c1); // Output: 1

let notSure: any = 10;
notSure = "Hello";
notSure = false;

// Union type: string or number
let id: string | number;
id = "ABC123"; // Valid
id = 123; // Valid
// id = true;
// Error: Type 'boolean' is not assignable to type 'string | number'

// Function that accepts a string or number
function printId(id: string | number) {
  console.log(id);
}

printId("ABC123"); // Valid
printId(123); // Valid
// printId(true);
// Error: Argument of type 'boolean' is not assignable to parameter of type 'string | number'

// Union type in arrays
let mixedArray: (string | number)[] = ["ABC123", 123, "XYZ456", 456];

let userId: string | null;
userId = "ABC123";
userId = null; // Valid

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
