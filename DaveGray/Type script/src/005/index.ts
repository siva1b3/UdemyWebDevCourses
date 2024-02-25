/*
 * In Angular development, adhering to best practices for
 * TypeScript syntax ensures code readability, maintainability, and consistency.
 * Here are some recommended TypeScript syntax practices for Angular:
 *
 * 1. Use Type Annotations: Explicitly declare types for variables,
 * parameters, return types, and class properties whenever possible.
 * This enhances code clarity and helps catch errors early.
 *
 *    // Type annotation for variable
 *    let count: number = 10;
 *
 *    // Type annotation for function parameter and return type
 *    function add(x: number, y: number): number {
 *        return x + y;
 *    }
 *
 *    // Type annotation for class property
 *    class ExampleComponent {
 *        message: string = "Hello, Angular!";
 *    }
 *
 * 2. Avoid Type Assertion (Angle-Bracket Syntax):
 * Instead, use the `as` keyword for type assertion,
 * especially in JSX/TSX files to prevent conflicts with JSX syntax.
 *
 *    // Preferred: Type assertion with 'as' keyword
 *    let value = 10 as number;
 *
 *    // Not preferred: Angle-bracket syntax for type assertion
 *    let value = <number>10;
 *
 * 3. Use Generics: Generics allow for writing reusable components and functions that can work with different data types. Leverage generics where appropriate, especially for services and utility functions.
 *
 *    // Example of a generic function
 *    function identity<T>(arg: T): T {
 *        return arg;
 *    }
 *
 * 4. Avoid Any Type: Minimize the use of the `any` type, as it undermines TypeScript's static type checking. Instead, use specific types or generics to maintain type safety.
 *
 *    // Avoid using 'any' type
 *    let data: any = fetchData();
 *
 *    // Prefer specifying specific types or generics
 *    let data: UserData[] = fetchData();
 *
 * 5. Use Interfaces for Complex Types: Define interfaces to represent complex data structures, such as objects received from API responses or data models.
 *
 *    // Example interface for user data
 *    interface User {
 *        id: number;
 *        name: string;
 *        email: string;
 *    }
 *
 * 6. Use Enums for Named Constants: Use enums to represent a set of named constants, such as status codes or options.
 *
 *    // Example enum for status codes
 *    enum HttpStatusCode {
 *        OK = 200,
 *        NOT_FOUND = 404,
 *        SERVER_ERROR = 500
 *    }
 *
 * 7. Follow Angular Style Guide: Adhere to the Angular style guide, which provides recommendations for coding standards, file structure, naming conventions, and more. Following the style guide promotes consistency across Angular projects.
 *
 * By following these best practices, you can write clean, maintainable, and type-safe TypeScript code in Angular applications, ensuring better development experience and robustness of your codebase.
 *
 */

type one = string;
type two = string | number;
type three = "hello";

// ! Convert to more or less specific types
let a1: one = "hello"; // Variable a1 is assigned a value of type 'one', which is a string.
let b1 = a1 as two; // Type assertion: a1 is asserted as type 'two', which is a union of string or number.
let c2 = a1 as three; // Type assertion: a1 is asserted as type 'three', which is a literal type "hello".

let d1 = <one>"world"; // Type assertion using angle bracket syntax.
let e1 = <string>"world"; // Type assertion of a string literal.
let e2 = <number>23; // Type assertion of a number literal.
let e3 = <number | string>23; // Type assertion of a union type of number or string.

// ! Assertion example
function concatOrAdd(
  a: number = 0,
  b: number = 0,
  c: "add" | "concat"
): number | string {
  if (c === "add") return a + b; // If 'c' is 'add', returns the sum of 'a' and 'b'.
  return "" + a + b; // If 'c' is 'concat', returns the concatenation of 'a' and 'b'.
}

// ! Error due to type mismatch
// let myString: string = concatOrAdd(1, 2, "concat");

// ! Solving error by using assertion
let myString: string = concatOrAdd(1, 2, "concat") as string;
// Assertion stating that we will get only a string, narrowing the (number | string) type to string type.

// ! Another example
// be careful this we return string but we are asserting it as number
let myVal: number = concatOrAdd(1, 2, "concat") as number;
// Assertion stating that we will get only a number, narrowing the (number | string) type to number type.

// * bypass TypeScript
// ! error
// The following line would result in a TypeScript error because you're trying to assert a number as a string.
// let myval2: string = 10 as string;

// bypassing the error by first asserting as 'unknown', then as 'string'.
let myval2: string = 10 as unknown as string;

// ! The DOM -- assertion is used in the DOM a lot
// Selecting an <img> element from the DOM
let img = document.querySelector("img");
// The type of 'img' is (HTMLImageElement | null)

// To ensure 'img' is only an HTMLImageElement, we can use two approaches:

// 1. Remove the 'null' part by using the '!' symbol (Type Assertion)
let img1 = document.querySelector("img")!;
// This asserts that 'img1' is an HTMLImageElement and not null.

// 2. Assert that the element is an HTMLImageElement only (Type Assertion)
let img2 = document.querySelector("img") as HTMLImageElement;
// This explicitly asserts that 'img2' is an HTMLImageElement.

img1.src; // Accessing the src property of img1
img2.src; // Accessing the src property of img2

// Retrieving an element with the ID "#img"
let myImg = document.getElementById("#img");

// Retrieving an element with the ID "#img" and asserting that it's not null
let myImg1 = document.getElementById("#img")!;

// Asserting that the element with the ID "#img" is specifically an HTMLImageElement
let myImg2 = document.getElementById("#img") as HTMLImageElement;

// Accessing the src property of myImg2
let src = myImg2.src;
