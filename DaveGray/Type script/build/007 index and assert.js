"use strict";
// Index Signatures
// Example transactions for today
const todayTransactions = {
    pizza: -10,
    books: -5,
    job: 50,
};
// Example 2: Dynamic access using a string variable
const specificCategory = "books";
// Uncommenting the line below will result in a TypeScript error:
// const todayBooks = todayTransactions[specificCategory];
// TypeScript Error Explanation:
// Element implicitly has an 'any' type because expression of type 'string'
// can't be used to index type 'Transaction'. No index signature with a parameter
// of type 'string' was found on type 'Transaction'.
// Attempt to access 'books' dynamically with 'as keyof Transaction'
const todayBooks = todayTransactions[specificCategory];
console.log(`Today's spending on books:`, todayBooks); // Outputs: -5
// Another way to access using 'as keyof typeof todayTransactions'
const todayBooks2 = todayTransactions[specificCategory];
console.log(`Another way to get spending on books:`, todayBooks2); // Outputs: -5
// Edge Case 1: Trying to access a non-existent property
const nonExistentCategory = "music";
const todayMusic = todayTransactions[nonExistentCategory];
console.log(todayMusic); // Outputs: undefined
// Edge Case 3: Accessing with a numeric index
const numericIndex = 1;
// TypeScript will throw an error because numeric indices are not allowed unless the object explicitly supports them
// Uncommenting the line below will result in a TypeScript error:
// const todayNumeric = todayTransactions[numericIndex as keyof Transaction];
// Edge Case 4: Accessing using a computed property name using literals
const computedPropertyName = "pizza";
// TypeScript can infer the type correctly when using computed property names
const todayPizza = todayTransactions[computedPropertyName];
console.log(`Today's spending on pizza:`, todayPizza); // Outputs: -10
// Edge Case 5: Accessing with a variable of type 'any'
let anyCategory = "job";
// Example product sales report data
const salesReport = {
    productId: 12345,
    totalSales: 1500,
    unitsSold: 3000,
    averagePrice: 50.25,
    highestPrice: 75,
    lowestPrice: 25,
    revenue: 75000,
    profit: 25000,
    expenses: 50000,
    returnRate: 0.05, // 5% return rate
};
// Accessing and displaying properties
// 1st trail
const logProductData = (salesData) => {
    Object.entries(salesData).forEach(([key, value]) => {
        console.log(`${key} is ${value}`);
    });
};
logProductData(salesReport);
// 2nd trail
const logProductData02 = (salesData, keyValues) => {
    // Loop through each key in the salesData object
    for (const key in salesData) {
        if (key === keyValues) {
            console.log(key);
        }
    }
};
// Example usage:
logProductData02(salesReport, "expenses");
for (const [key, value] of Object.entries(salesReport)) {
    console.log(`${key}: ${value}`);
}
// Example object with monthly incomes for each stream
const monthlyIncomes = {
    salary: 100,
    bonos: 200,
    sideHustle: 50,
};
// Loop through each income stream in monthlyIncomes
for (const revenue in monthlyIncomes) {
    // Check if the property belongs to the object itself (not inherited)
    if (monthlyIncomes.hasOwnProperty(revenue)) {
        // Log each income stream and its corresponding value
        console.log(`${revenue} is ${monthlyIncomes[revenue]}`);
    }
}
