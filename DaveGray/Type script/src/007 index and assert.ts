// Index Signatures

/*
Problem:
--------
When accessing object properties dynamically in TypeScript using bracket notation, TypeScript expects the property key to be of a specific type that matches the object's defined keys. If the key is a string variable, TypeScript cannot guarantee that the variable will always match one of the object's keys. This results in TypeScript throwing an error.

Solution:
---------
To resolve this issue, TypeScript provides several approaches using type assertions (`as`) to inform TypeScript about the type of the dynamic property key:

1. Use `as keyof Type` to assert that the string variable is a valid key of a specific type/interface.
2. Use `as keyof typeof object` to assert that the string variable is a valid key of a specific object instance.

Examples and Edge Cases:
-------------------------
*/

// Example 1: Define a type/interface for transaction objects
interface Transaction {
  pizza: number;
  books: number;
  job: number;
}

// Example transactions for today
const todayTransactions: Transaction = {
  pizza: -10,
  books: -5,
  job: 50,
};

// Example 2: Dynamic access using a string variable
const specificCategory: string = "books";

// Uncommenting the line below will result in a TypeScript error:
// const todayBooks = todayTransactions[specificCategory];
// TypeScript Error Explanation:
// Element implicitly has an 'any' type because expression of type 'string'
// can't be used to index type 'Transaction'. No index signature with a parameter
// of type 'string' was found on type 'Transaction'.

// Attempt to access 'books' dynamically with 'as keyof Transaction'
const todayBooks = todayTransactions[specificCategory as keyof Transaction];
console.log(`Today's spending on books:`, todayBooks); // Outputs: -5

// Another way to access using 'as keyof typeof todayTransactions'
const todayBooks2 =
  todayTransactions[specificCategory as keyof typeof todayTransactions];
console.log(`Another way to get spending on books:`, todayBooks2); // Outputs: -5

// Edge Case 1: Trying to access a non-existent property
const nonExistentCategory: string = "music";
const todayMusic = todayTransactions[nonExistentCategory as keyof Transaction];
console.log(todayMusic); // Outputs: undefined

// Edge Case 3: Accessing with a numeric index
const numericIndex: number = 1;
// TypeScript will throw an error because numeric indices are not allowed unless the object explicitly supports them
// Uncommenting the line below will result in a TypeScript error:
// const todayNumeric = todayTransactions[numericIndex as keyof Transaction];

// Edge Case 4: Accessing using a computed property name using literals
const computedPropertyName: "pizza" = "pizza";
// TypeScript can infer the type correctly when using computed property names
const todayPizza = todayTransactions[computedPropertyName];
console.log(`Today's spending on pizza:`, todayPizza); // Outputs: -10

// Edge Case 5: Accessing with a variable of type 'any'
let anyCategory: any = "job";
// TypeScript won't type-check 'any', allowing any value to be used as an index, including non-existent keys
// Uncommenting the line below will result in a TypeScript error:
// const todayAny = todayTransactions[anyCategory];
// console.log(`Today's job earnings:`, todayAny); // Outputs: 50 (no type checking for 'any' variable)

// Summary:
// --------
// By using type assertions ('as') with 'keyof' to assert the correct type of dynamic property keys,
// we can safely access object properties dynamically in TypeScript, ensuring type safety and preventing runtime errors.

// Define an interface representing a product sales report with 10 numeric properties
interface ProductSalesReport {
  productId: number;
  totalSales: number;
  unitsSold: number;
  averagePrice: number;
  highestPrice: number;
  lowestPrice: number;
  revenue: number;
  profit: number;
  expenses: number;
  returnRate: number; // Percentage as number (e.g., 0.1 represents 10%)
}

// Example product sales report data
const salesReport: ProductSalesReport = {
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
const logProductData = (salesData: ProductSalesReport) => {
  Object.entries(salesData).forEach(([key, value]) => {
    console.log(`${key} is ${value}`);
  });
};

logProductData(salesReport);

// 2nd trail
const logProductData02 = (
  salesData: ProductSalesReport,
  keyValues: keyof ProductSalesReport
) => {
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

// using utility types

// Define a union type for income streams
type Streams = "salary" | "bonos" | "sideHustle";

// Define a type using Record to map income streams to numbers
type Incomes = Record<Streams, number | string>;

// Example object with monthly incomes for each stream
const monthlyIncomes: Incomes = {
  salary: 100,
  bonos: 200,
  sideHustle: 50,
};

// Loop through each income stream in monthlyIncomes
for (const revenue in monthlyIncomes) {
  // Check if the property belongs to the object itself (not inherited)
  if (monthlyIncomes.hasOwnProperty(revenue)) {
    // Log each income stream and its corresponding value
    console.log(`${revenue} is ${monthlyIncomes[revenue as keyof Incomes]}`);
  }
}
