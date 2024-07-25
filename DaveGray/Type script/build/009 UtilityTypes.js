"use strict";
// Creating a type with some required and some optional properties using Partial
const partialBook = {
    title: "TypeScript in Depth",
    author: "Basarat Ali Syed",
};
// Log the partialBook object and its properties
console.log("Partial Book:", partialBook);
console.log("Title:", partialBook.title); // Accessing the title property
// Valid object with complete details of Book
const completeBook = {
    title: "JavaScript: The Good Parts",
    author: "Douglas Crockford",
    pages: 176,
    publisher: "O'Reilly Media", // Publisher is included as it is optional in the interface
};
// Log the completeBook object and its properties
console.log("\nComplete Book:", completeBook);
console.log("Title:", completeBook.title); // Accessing the title property
console.log("Pages:", completeBook.pages); // Accessing the pages property
console.log("Publisher:", completeBook.publisher); // Accessing the publisher property
// Example usage
const partialCustomTuple = ["Hello", 42];
// Log the partial custom tuple and its properties
console.log("Partial Custom Tuple:", partialCustomTuple);
console.log("First Element:", partialCustomTuple[0]); // Accessing the first element
console.log("Second Element:", partialCustomTuple[1]); // Accessing the second element
