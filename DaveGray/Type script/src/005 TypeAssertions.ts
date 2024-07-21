// Example: Type assertion with the `as` keyword
let userInput: unknown = "Hello TypeScript!";
let messageLength = (userInput as string).length; // Asserting userInput as a string
console.log(messageLength); // Output: 17

// Type assertion in TypeScript is essentially telling the TypeScript compiler,
// "Trust me, I know the type of this variable,
// even if you can't infer it yourself from the code."

// Define custom type aliases
type StringType = string; // Type alias for string
type StringOrNumberType = string | number; // Union type alias for string or number
type LiteralHelloType = "hello"; // Literal type alias for the string "hello"

// Example 1: Converting from more specific toless specific types
const variableOne: LiteralHelloType = "hello"; // variableOne is of type LiteralHelloType
const variableTwo = variableOne as StringType; // Converting from LiteralHelloType to StringType
const variableThree = variableOne as StringOrNumberType; // Converting from LiteralHelloType to StringOrNumberType

// Example 2: Converting from union type to specific types
const variableFour: StringOrNumberType = 42; // variableFour is of type StringOrNumberType
const variableSix = variableFour as number; // Converting from StringOrNumberType to number

// Output the results
console.log("Example 1:");
console.log(variableOne); // Output: hello
console.log(variableTwo); // Output: hello
console.log(variableThree); // Output: hello

console.log("Example 2:");
console.log(variableFour); // Output: 42
console.log(variableSix); // Output: 42

// Example of older syntax for type assertions
// Type assertion: <StringType>
const ele1 = <StringType>"hai"; // ele1 is asserted as StringType
const ele2 = <StringOrNumberType>ele1; // ele1 is asserted from StringType to StringOrNumberType
const ele3 = <LiteralHelloType>ele1; // ele1 is asserted from StringType to LiteralHelloType

// Output the results with descriptive messages
console.log(`ele1 as StringType: ${ele1}`); // Output: ele1 as StringType: hai
console.log(`ele2 as StringOrNumberType: ${ele2}`); // Output: ele2 as StringOrNumberType: hai (StringType to StringOrNumberType)
console.log(`ele3 as LiteralHelloType: ${ele3}`); // Output: ele3 as LiteralHelloType: hai (StringType to LiteralHelloType)

// Note: The older syntax with angle brackets (<Type>) is being phased out
// in favor of the 'as' keyword for type assertions in TypeScript.

// Function definition with TypeScript type annotations
const addOrConcat = (
  a: number, // First parameter, expected to be a number
  b: number, // Second parameter, expected to be a number
  c: "add" | "concat" // Third parameter, a literal type "add" or "concat"
): string | number => {
  // Return type can be either string or number
  switch (c) {
    case "add":
      return a + b; // If c is "add", return the sum of a and b (a number)
    case "concat":
      return "" + a + b; // If c is "concat", concatenate a and b as strings
    default:
      return "undefined"; // Default case returns a string "undefined"
  }
};

// Example usages with better log messages and variable names

// Example 1: Concatenation case
const resultConcat: string | number = addOrConcat(2, 3, "concat");
console.log(`Result of concatenation: ${resultConcat}`);

// Example 2: Addition case
const resultAdd: string | number = addOrConcat(2, 3, "add");
console.log(`Result of addition: ${resultAdd}`);

// Asserting values with TypeScript type assertions

// Asserting the return value as a number when c is "add"
let additionResult: number = addOrConcat(2, 3, "add") as number;
console.log(`Asserted addition result as number: ${additionResult}`);

// Asserting the return value as a string when c is "concat"
let concatenationResult: string = addOrConcat(2, 3, "concat") as string;
console.log(`Asserted concatenation result as string: ${concatenationResult}`);

/**
 * Converts a value to its string representation if it's a number.
 * @param value The value to convert, which is of type 'unknown'.
 * @returns The string representation of the number, or null if 'value' is not a number.
 */
function convertToNumberString(value: unknown): string | null {
  // First assertion: Treat 'value' as a number or null
  const numValue = value as number | null;

  // Second assertion: If 'numValue' is a number, convert it to string
  // Note: Since 'numValue' could be null or a number, we need to check its type before converting.
  const strValue = numValue as unknown as string;

  if (typeof numValue === "number") {
    // Convert number to string using String() function
    return String(numValue);
  } else {
    // Return null if 'value' is not a number
    return strValue;
  }
}

// Example usage:
console.log(convertToNumberString(10)); // Output: "10"
console.log(convertToNumberString("hello")); // Output: "hello"

// Get all img elements in the document
const imgElements = document.getElementsByTagName("img");

// Get an element by its ID (incorrect usage)
const myImg = document.getElementById("img");

// Correct way: assert as not null
const myImgNotNull = document.getElementById("img")!;

// Correct way: assert as image element
const nextImg = document.getElementById("img") as HTMLImageElement;

// Example: accessing attributes and properties
console.log("All img elements:");
for (let i = 0; i < imgElements.length; i++) {
  console.log(imgElements[i].src); // Access src attribute directly
}

// Example: manipulating attributes and properties
nextImg.src = "new_image.jpg"; // Change src attribute

// Example: adding event listeners
myImgNotNull.addEventListener("click", () => {
  console.log("Image clicked!");
});

// Example: using querySelector to get specific elements
const specificImg = document.querySelector(
  "img[data-type='thumbnail']"
) as HTMLImageElement | null;
if (specificImg) {
  console.log("Found specific image element:");
  console.log(specificImg.src);
}
