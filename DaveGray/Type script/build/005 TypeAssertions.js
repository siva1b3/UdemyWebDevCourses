"use strict";
// Example: Type assertion with the `as` keyword
let userInput = "Hello TypeScript!";
let messageLength = userInput.length; // Asserting userInput as a string
console.log(messageLength); // Output: 17
// Example 1: Converting from more specific toless specific types
const variableOne = "hello"; // variableOne is of type LiteralHelloType
const variableTwo = variableOne; // Converting from LiteralHelloType to StringType
const variableThree = variableOne; // Converting from LiteralHelloType to StringOrNumberType
// Example 2: Converting from union type to specific types
const variableFour = 42; // variableFour is of type StringOrNumberType
const variableSix = variableFour; // Converting from StringOrNumberType to number
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
const ele1 = "hai"; // ele1 is asserted as StringType
const ele2 = ele1; // ele1 is asserted from StringType to StringOrNumberType
const ele3 = ele1; // ele1 is asserted from StringType to LiteralHelloType
// Output the results with descriptive messages
console.log(`ele1 as StringType: ${ele1}`); // Output: ele1 as StringType: hai
console.log(`ele2 as StringOrNumberType: ${ele2}`); // Output: ele2 as StringOrNumberType: hai (StringType to StringOrNumberType)
console.log(`ele3 as LiteralHelloType: ${ele3}`); // Output: ele3 as LiteralHelloType: hai (StringType to LiteralHelloType)
// Note: The older syntax with angle brackets (<Type>) is being phased out
// in favor of the 'as' keyword for type assertions in TypeScript.
// Function definition with TypeScript type annotations
const addOrConcat = (a, // First parameter, expected to be a number
b, // Second parameter, expected to be a number
c // Third parameter, a literal type "add" or "concat"
) => {
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
const resultConcat = addOrConcat(2, 3, "concat");
console.log(`Result of concatenation: ${resultConcat}`);
// Example 2: Addition case
const resultAdd = addOrConcat(2, 3, "add");
console.log(`Result of addition: ${resultAdd}`);
// Asserting values with TypeScript type assertions
// Asserting the return value as a number when c is "add"
let additionResult = addOrConcat(2, 3, "add");
console.log(`Asserted addition result as number: ${additionResult}`);
// Asserting the return value as a string when c is "concat"
let concatenationResult = addOrConcat(2, 3, "concat");
console.log(`Asserted concatenation result as string: ${concatenationResult}`);
/**
 * Converts a value to its string representation if it's a number.
 * @param value The value to convert, which is of type 'unknown'.
 * @returns The string representation of the number, or null if 'value' is not a number.
 */
function convertToNumberString(value) {
    // First assertion: Treat 'value' as a number or null
    const numValue = value;
    // Second assertion: If 'numValue' is a number, convert it to string
    // Note: Since 'numValue' could be null or a number, we need to check its type before converting.
    const strValue = numValue;
    if (typeof numValue === "number") {
        // Convert number to string using String() function
        return String(numValue);
    }
    else {
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
const myImgNotNull = document.getElementById("img");
// Correct way: assert as image element
const nextImg = document.getElementById("img");
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
const specificImg = document.querySelector("img[data-type='thumbnail']");
if (specificImg) {
    console.log("Found specific image element:");
    console.log(specificImg.src);
}
