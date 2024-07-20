// String variable with explicit type annotation
let userName: string = "siva naga Babu";

// Logging the userName variable
console.log(userName);

// Number variables with explicit type annotations
let firstNumber: number = 12;
let secondNumber: number = 6;
let thirdNumber: number = 2;

// Example of using 'as' syntax for type assertion (preferred)
let greetingMessage = "world" as string;
let favoriteNumber = 23 as number;
let flexibleValue = 23 as number | string;

// Example of using angle bracket syntax for type assertion (older style)
let oldGreetingMessage = <string>"world";
let oldFavoriteNumber = <number>23;
let oldFlexibleValue = <number | string>23;

// Arithmetic operations
let Add: number = firstNumber + secondNumber;
let difference: number = firstNumber - secondNumber;
let product: number = firstNumber * secondNumber;
let quotient: number = firstNumber / secondNumber;

// Edge cases for arithmetic operations
let zeroDivision: number = firstNumber / 0; // Infinity
let negativeNumber: number = -firstNumber; // -12
let largeNumber: number = Number.MAX_SAFE_INTEGER + 1; // 9007199254740992 (may lead to precision issues)

// String Operations
let fullMessage: string = `${greetingMessage}, ${favoriteNumber}!`; // Template literal
let repeatedMessage: string = greetingMessage.repeat(3); // "HelloHelloHello"

// Edge cases for string operations
let emptyString: string = ""; // Empty string
let nullString: string | null = null; // null value
let undefinedString: string | undefined = undefined; // undefined value

// Combining numbers and strings
let numberAsString: string = firstNumber.toString(); // "12"
let combinedMessage: string = greetingMessage + " " + numberAsString; // "Hello 12"

// Edge case: Concatenating undefined or null
let combinedWithNull: string = greetingMessage + " " + nullString; // "Hello null"
let combinedWithUndefined: string = greetingMessage + " " + undefinedString; // "Hello undefined"

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

// Demonstrating modern TypeScript practices:
// 1. Use explicit type annotations where possible.
// 2. Prefer 'as' syntax for type assertions due to readability and JSX compatibility.

// Explanation:
// - 'userName' holds a string representing a user's name.
// - 'console.log(userName)' outputs 'userName' to the console.
// - 'firstNumber', 'secondNumber', 'thirdNumber' are variables with specific numeric types and values.
// - 'greetingMessage', 'favoriteNumber', 'flexibleValue' use 'as' syntax for type assertions, which is preferred in modern TypeScript.
// - 'oldGreetingMessage', 'oldFavoriteNumber', 'oldFlexibleValue' demonstrate the older angle bracket syntax for type assertions.

// Interface defining the structure of user data
interface UserData {
  id: number;
  name: string;
  email: string;
}

// Example function to fetch user data from an API
const fetchUserData = async (): Promise<UserData | null> => {
  try {
    // Simulated API response (replace with actual API endpoint in real application)
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/1"
    );

    // Extract JSON data from the response
    const data = await response.json();

    // Type assertion using 'as' syntax to ensure data structure matches UserData interface
    // This is necessary because response.json() returns data of type 'any', and we need to assert it as UserData
    return {
      id: data.id as number,
      name: data.name as string,
      email: data.email as string,
    };
  } catch (error) {
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
  } else {
    // Log a message if user data fetching failed
    console.log("Failed to fetch user data.");
  }
};

// Calling the displayUserData function to initiate data fetching and display
displayUserData();
