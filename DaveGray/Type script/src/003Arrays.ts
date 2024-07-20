let num: number = 10;
let decimal: number = 10.5;
let message: string = "Hello, TypeScript!";
let isDone: boolean = false;

let stringArr01 = ["siva", "naga", "babu"];
let numberArr = [1, 2, 3];
let mixedArray02 = [1, 2, "siva", "naga"];

stringArr01[0] = "main";
// stringArr01.push(43);
// ! will cause error

mixedArray02[0] = "gh";

// array
let numbers: number[] = [1, 2, 3, 4, 5];
let names: string[] = ["Siva", "John", "Alice"];

// stringArr01 = mixedArray02;
// ! will give error

mixedArray02 = stringArr01;
// ^ works

// Array declaration with numbers
let numbers01: number[] = [1, 2, 3, 4, 5];
console.log("Array declaration with numbers:");
console.log("numbers01:", numbers01); // Output: [1, 2, 3, 4, 5]

// Array declaration with strings
let names01: string[] = ["Alice", "Bob", "Charlie"];
console.log("\nArray declaration with strings:");
console.log("names01:", names01); // Output: ['Alice', 'Bob', 'Charlie']

// Empty array declaration using 'any' type
let emptyArray: any[] = [];
console.log("\nEmpty array declaration using 'any' type:");
console.log("emptyArray:", emptyArray); // Output: []

// Array with mixed types (number and string)
let mixedArray03: (number | string)[] = [1, "two", 3, "four"];
console.log("\nArray with mixed types (number and string):");
console.log("mixedArray03:", mixedArray03); // Output: [1, 'two', 3, 'four']

// Array of objects (each object represents a person01)
interface Person01 {
  name: string;
  age: number;
}
let people: Person01[] = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 35 },
];
console.log("\nArray of objects (each object represents a person01):");
console.log("people:", people);
/* Output:
people: [
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 25 },
  { name: 'Charlie', age: 35 }
]
*/

// Nested array (matrix of numbers)
let matrix: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log("\nNested array (matrix of numbers):");
console.log("matrix:", matrix);
/* Output:
matrix: [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]
*/

// Array with tuples (each tuple represents a person's name and age)
let tupleArray: [string, number][] = [
  ["Alice", 25],
  ["Bob", 30],
  ["Charlie", 35],
];
console.log(
  "\nArray with tuples (each tuple represents a person's name and age):"
);
console.log("tupleArray:", tupleArray);
/* Output:
tupleArray: [
  ['Alice', 25],
  ['Bob', 30],
  ['Charlie', 35]
]
*/

// Edge case: Single element array
let singleElement: number[] = [42];
console.log("\nEdge case: Single element array:");
console.log("singleElement:", singleElement); // Output: [42]

// Edge case: Readonly array
let readonlyArray: ReadonlyArray<number> = [1, 2, 3];
console.log("\nEdge case: Readonly array:");
console.log("readonlyArray:", readonlyArray); // Output: [1, 2, 3]

// Edge case: Array with union types and undefined
let unionAndUndefinedArray: (number | undefined)[] = [1, undefined, 3];
console.log("\nEdge case: Array with union types and undefined:");
console.log("unionAndUndefinedArray:", unionAndUndefinedArray); // Output: [1, undefined, 3]

// Edge case: Array with literal types
let literalArray: ("red" | "green" | "blue")[] = ["red", "green", "blue"];
console.log("\nEdge case: Array with literal types:");
console.log("literalArray:", literalArray); // Output: ['red', 'green', 'blue']

// Edge case: Array with never type (empty array)
let neverArray: never[] = [];
console.log("\nEdge case: Array with never type (empty array):");
console.log("neverArray:", neverArray); // Output: []

// Array of functions (each function logs a message)
let functionArray: (() => void)[] = [
  () => console.log("Function 1"),
  () => console.log("Function 2"),
];
console.log("\nArray of functions (each function logs a message):");
functionArray.forEach((func, index) => {
  console.log(`Function ${index + 1}:`);
  func(); // Executes the function
});
/* Output:
Function 1:
Function 2:
*/

// Method 1: Using square brackets with initial values
let numbers03: number[] = [1, 2, 3, 4, 5];
console.log("Method 1: Using square brackets with initial values");
console.log("numbers03:", numbers03); // Output: [1, 2, 3, 4, 5]

// Method 2: Using the Array constructor with initial values
let numbers04: number[] = new Array(1, 2, 3, 4, 5);
console.log("\nMethod 2: Using the Array constructor with initial values");
console.log("numbers04:", numbers04); // Output: [1, 2, 3, 4, 5]

// Method 3: Using the Array constructor with a single number to initialize an empty array of that length
let emptyArray1: number[] = new Array(5); // Creates an array with 5 empty slots
console.log(
  "\nMethod 3: Using the Array constructor with a single number to initialize an empty array of that length"
);
console.log("emptyArray1:", emptyArray1); // Output: [ <5 empty items> ]
console.log("emptyArray1 element 01", emptyArray1[0]); // Output: [ undefined ]
console.log("emptyArray1 element 02", emptyArray1[1]); // Output: [ undefined ]

// Method 4: Using square brackets with type annotation for an empty array
let emptyArray2: string[] = [];
console.log(
  "\nMethod 4: Using square brackets with type annotation for an empty array"
);
console.log("emptyArray2:", emptyArray2); // Output: []

// Method 5: Using Array.from() to create an array from array-like or iterable objects
let iterableArray: number[] = Array.from([1, 2, 3, 4, 5]);
console.log(
  "\nMethod 5: Using Array.from() to create an array from array-like or iterable objects"
);
console.log("iterableArray:", iterableArray); // Output: [1, 2, 3, 4, 5]

// Method 6: Using Array.from() with a mapping function
let mappedArray: number[] = Array.from([1, 2, 3, 4, 5], (x) => x * 2);
console.log("\nMethod 6: Using Array.from() with a mapping function");
console.log("mappedArray:", mappedArray); // Output: [2, 4, 6, 8, 10]

// Method 7: Using Array.from() with a generator function
function* generateNumbers() {
  yield 1;
  yield 2;
  yield 3;
}
let generatedArray: number[] = Array.from(generateNumbers());
console.log("\nMethod 7: Using Array.from() with a generator function");
console.log("generatedArray:", generatedArray); // Output: [1, 2, 3]

// Method 8: Using Array.of() to create an array with any number of elements
let arrayOfNumbers: number[] = Array.of(1, 2, 3, 4, 5);
console.log(
  "\nMethod 8: Using Array.of() to create an array with any number of elements"
);
console.log("arrayOfNumbers:", arrayOfNumbers); // Output: [1, 2, 3, 4, 5]

// Method 9: Using spread operator with initial values
let spreadArray: number[] = [...numbers03];
console.log("\nMethod 9: Using spread operator with initial values");
console.log("spreadArray:", spreadArray); // Output: [1, 2, 3, 4, 5]

// Array of numbers
let numbers05: number[] = [10, 20, 30, 40, 50];

// Accessing a single element
let thirdElement: number = numbers05[2]; // Accesses the third element (30)

// Example usage
console.log("Accessing a single element:");
console.log("Third element:", thirdElement); // Output: 30

// Array of strings
let names02: string[] = ["Alice", "Bob", "Charlie", "David", "Eve"];

// Accessing multiple elements (slicing)
let selectedNames: string[] = names02.slice(1, 4); // Retrieves elements at index 1, 2, and 3

// Example usage
console.log("\nAccessing multiple elements (slicing):");
console.log("Selected names:", selectedNames); // Output: ['Bob', 'Charlie', 'David']

// Array of objects
interface Person03 {
  name: string;
  age: number;
}
let people01: Person03[] = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 35 },
];

// Accessing multiple elements using forEach
console.log("\nAccessing multiple elements using forEach:");
people01.forEach((person) => {
  console.log(`${person.name} is ${person.age} years old`);
});
/* Output:
Alice is 30 years old
Bob is 25 years old
Charlie is 35 years old
*/

// Original array
let numbers06: number[] = [1, 2, 3, 4, 5];

// Using push() to add elements
numbers06.push(6, 7);

// Example usage
console.log("Using push() method to add elements:");
console.log("Updated numbers06 array:", numbers06); // Output: [1, 2, 3, 4, 5, 6, 7]

// Original array
let numbers07: number[] = [1, 2, 3, 4, 5];

// Using pop() to remove an element
let lastNumber: number | undefined =
  numbers07.length > 0 ? numbers07.pop() : undefined;

// Example usage
console.log("\nUsing pop() method to remove the last element:");
console.log("Popped element:", lastNumber); // Output: 5
console.log("Updated numbers array:", numbers07); // Output: [1, 2, 3, 4]

// Original array
let names04: string[] = ["Alice", "Bob", "Charlie"];

// Using shift() to remove the first element
let firstPerson: string | undefined =
  names04.length > 0 ? names04.shift() : undefined;

// Example usage
console.log("\nUsing shift() method to remove the first element:");
console.log("Shifted element:", firstPerson); // Output: 'Alice'
console.log("Updated names04 array:", names04); // Output: ['Bob', 'Charlie']

// Original array
let names05: string[] = ["Bob", "Charlie"];

// Using unshift() to add elements
let newLength: number = names05.unshift("Alice", "David");

// Example usage
console.log("\nUsing unshift() method to add elements:");
console.log("New length after unshift:", newLength); // Output: 4
console.log("Updated names05 array:", names05); // Output: ['Alice', 'David', 'Bob', 'Charlie']

// Original array
let fruits03: string[] = ["Apple", "Banana", "Cherry", "Date"];

// Using splice() to remove and add elements
fruits03.splice(2, 1, "Grape", "Fig");

// Example usage
console.log("\nUsing splice() method to remove and add elements:");
console.log("Updated fruits03 array:", fruits03); // Output: ['Apple', 'Banana', 'Grape', 'Fig', 'Date']

// Original array
let numbers08: number[] = [1, 2, 3, 4, 5];

// Using slice() to create a new array with a subset of elements
let slicedArray: number[] = numbers08.slice(1, 4);

// Example usage
console.log("\nUsing slice() method to create a subset of elements:");
console.log("Sliced array:", slicedArray); // Output: [2, 3, 4]
console.log("Original numbers08 array:", numbers08); // Output: [1, 2, 3, 4, 5]
