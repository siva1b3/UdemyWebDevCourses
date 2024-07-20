"use strict";
// String variable with explicit type annotation
let userName = "siva naga Babu";
// Logging the userName variable
console.log(userName);
// Number variables with explicit type annotations
let firstNumber = 12;
let secondNumber = 6;
let thirdNumber = 2;
// Example of using 'as' syntax for type assertion (preferred)
let greetingMessage = "world";
let favoriteNumber = 23;
let flexibleValue = 23;
// Example of using angle bracket syntax for type assertion (older style)
let oldGreetingMessage = "world";
let oldFavoriteNumber = 23;
let oldFlexibleValue = 23;
// Arithmetic operations
let Add = firstNumber + secondNumber;
let difference = firstNumber - secondNumber;
let product = firstNumber * secondNumber;
let quotient = firstNumber / secondNumber;
// Edge cases for arithmetic operations
let zeroDivision = firstNumber / 0; // Infinity
let negativeNumber = -firstNumber; // -12
let largeNumber = Number.MAX_SAFE_INTEGER + 1; // 9007199254740992 (may lead to precision issues)
// String Operations
let fullMessage = `${greetingMessage}, ${favoriteNumber}!`; // Template literal
let repeatedMessage = greetingMessage.repeat(3); // "HelloHelloHello"
// Edge cases for string operations
let emptyString = ""; // Empty string
let nullString = null; // null value
let undefinedString = undefined; // undefined value
// Combining numbers and strings
let numberAsString = firstNumber.toString(); // "12"
let combinedMessage = greetingMessage + " " + numberAsString; // "Hello 12"
// Edge case: Concatenating undefined or null
let combinedWithNull = greetingMessage + " " + nullString; // "Hello null"
let combinedWithUndefined = greetingMessage + " " + undefinedString; // "Hello undefined"
// Logging results to console
console.log("Difference:", difference);
console.log("Product:", product);
console.log("Quotient:", quotient);
console.log("Zero Division:", zeroDivision);
console.log("Negative Number:", negativeNumber);
console.log("Large Number:", largeNumber);
console.log("Full Message:", fullMessage);
console.log("Repeated Message:", repeatedMessage);
console.log("Combined Message:", combinedMessage);
console.log("Combined with Null:", combinedWithNull);
console.log("Combined with Undefined:", combinedWithUndefined);
// Example function to fetch user data from an API
const fetchUserData = async () => {
    try {
        // Simulated API response (replace with actual API endpoint in real application)
        const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
        // Extract JSON data from the response
        const data = await response.json();
        // Type assertion using 'as' syntax to ensure data structure matches UserData interface
        // This is necessary because response.json() returns data of type 'any', and we need to assert it as UserData
        return {
            id: data.id,
            name: data.name,
            email: data.email,
        };
    }
    catch (error) {
        // Handle errors if fetch or JSON parsing fails
        console.error("Error fetching user data:", error);
        return null; // Return null if there's an error to indicate failure
    }
};
// Example usage of fetchUserData function
const displayUserData = async () => {
    // Fetch user data asynchronously
    const user = await fetchUserData();
    // Check if user data is successfully fetched
    if (user) {
        console.log("User Data:");
        console.log(`ID: ${user.id}`);
        console.log(`Name: ${user.name}`);
        console.log(`Email: ${user.email}`);
    }
    else {
        // Log a message if user data fetching failed
        console.log("Failed to fetch user data.");
    }
};
// Calling the displayUserData function to initiate data fetching and display
displayUserData();
