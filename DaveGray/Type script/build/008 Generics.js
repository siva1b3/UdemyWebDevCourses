"use strict";
(async () => {
    // 👇 We define a generic value called T with <T>
    function getFirstElement(arr) {
        return arr[0];
    }
    // instaed of any type we will send type also as generic to the function
    // Example usage with a number array
    const numbers02 = [1, 2, 3, 4, 5];
    const firstNumber02 = getFirstElement(numbers02); // Get the first number
    // Example usage with a string array
    const strings = ["apple", "banana", "orange"];
    const firstString = getFirstElement(strings); // Get the first string
    // 👇 Using our generic
    const personOne = {
        id: 1,
        name: "Jeff",
        age: 31,
        metadata: ["male", "tall", 22],
    };
    // 👇 Using our generic
    const personTwo = {
        id: 1,
        name: "Jeff",
        age: 31,
        metadata: {
            sex: "female",
            height: "tall",
            favouriteNumber: 45,
        },
    };
    console.log("🚀 ~ file: 008 Generics.ts:49 ~ personTwo:", personTwo);
    const personThree = {
        id: 2,
        name: "Alice",
        age: 28,
        metadata: {
            isActive: true,
        },
    };
    console.log("🚀 ~ file: 008 Generics.ts:64 ~ personThree:", personThree);
    const personFour = {
        id: 3,
        name: "Bob",
        age: 35,
        metadata: {
            details: {
                address: "123 Main St",
                phone: "+1-234-567-8901",
            },
            hobbies: ["reading", "hiking"],
        },
    };
    console.log("🚀 ~ file: 008 Generics.ts:87 ~ personFour:", personFour);
    // Define a function that combines two values of type T into a tuple
    function combineValues(value1, value2) {
        return [value1, value2];
    }
    // Example: Combine two numbers
    const numberTuple = combineValues(10, 20);
    console.log("🚀 ~ file: 008 Generics.ts:92 ~ numberTuple:", numberTuple); // Output: [10, 20]
    // Example: Combine two strings
    const stringTuple = combineValues("hello", "world");
    console.log("🚀 ~ file: 008 Generics.ts:96 ~ stringTuple:", stringTuple); // Output: ["hello", "world"]
    // Example: Combine two booleans
    const booleanTuple = combineValues(true, false);
    console.log("🚀 ~ file: 008 Generics.ts:100 ~ booleanTuple:", booleanTuple); // Output: [true, false]
    // 👇 Defining our new class with a generic
    class ExampleClass {
        // 👇 Initializing a new property with an array of the generic value
        values = [];
        // 👇 Setting the argument for this method to be the generic
        setValue(value) {
            this.values.push(value);
        }
        // 👇 Setting the return value of this method to be an array of the generic
        getValues() {
            return this.values;
        }
    }
    // 👇 Using 'number' as the type to replace our generic 'T'
    const example = new ExampleClass();
    // 👇 We can now only pass in numbers. Any other type will error.
    example.setValue(24);
    example.setValue(42);
    const values = example.getValues();
    console.log(values); // [24, 42]
    // Defining our function with a generic type (T)
    async function fetchData(API_URL) {
        console.log("🚀 ~ file: 008 Generics.ts:172 ~ API_URL:", API_URL);
        const response = await fetch(API_URL);
        // 👇 Telling TS that the response data is the type of T (our generic)
        const data = (await response.json());
        console.log("🚀 ~ file: 008 Generics.ts:143 ~ data:", data);
        return data;
    }
    const data = await fetchData("https://catfact.ninja/fact");
    // The returned data would have a type of ObjOne
    console.log("🚀 ~ file: 008 Generics.ts:148 ~ data:", data);
    const bitCoin = await fetchData("https://api.coindesk.com/v1/bpi/currentprice.json");
    console.log("🚀 ~ file: 008 Generics.ts:189 ~ bitCoin.time:", bitCoin.time);
    console.log("🚀 ~ file: 008 Generics.ts:191 ~ bitCoin:", bitCoin);
    // Generic function with multiple generics
    function mergeArrays(arr1, arr2) {
        return [...arr1, ...arr2];
    }
    const numArray = [1, 2, 3];
    const strArray = ["hello", "world"];
    // 👇 You can explicity define the generics like this.
    const mergedArray = mergeArrays(numArray, strArray);
    console.log("🚀 ~ file: 008 Generics.ts:201 ~ mergedArray:", mergedArray); // Output: [1, 2, 3, "hello", "world"]
    // 👇 Or, you can let TS infer the types like this but will work.
    const mergedArray2 = mergeArrays(numArray, strArray);
    console.log("🚀 ~ file: 008 Generics.ts:204 ~ mergedArray2:", mergedArray2); // Output: [1, 2, 3, "hello", "world"]
})();
