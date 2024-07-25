// Define the interface for a Book
interface Book {
  title: string;
  author: string;
  pages: number;
  publisher?: string; // Making publisher optional
}

// Creating a type with some required and some optional properties using Partial
const partialBook: Partial<Book> = {
  title: "TypeScript in Depth",
  author: "Basarat Ali Syed",
};

// Log the partialBook object and its properties
console.log("Partial Book:", partialBook);
console.log("Title:", partialBook.title); // Accessing the title property

// Valid object with complete details of Book
const completeBook: Book = {
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

try {
  // Attempting to assign an incomplete Book object will result in a type error
  const incompleteBook: Book = {
    title: "Clean Code",
    author: "Robert C. Martin",
    pages: 464,
    publishedBy: "Prentice Hall", // Error: 'publishedBy' does not exist on type 'Book'
  };

  // Log the incompleteBook object (will not execute due to TypeScript error)
  console.log("\nIncomplete Book:", incompleteBook);

  // Attempting to assign an invalid property to partialBook will also result in a type error
  const partialBook2: Partial<Book> = {
    title: "Clean Code",
    author: "Robert C. Martin",
    publishedBy: "Prentice Hall", // Error: 'publishedBy' does not exist on type 'Partial<Book>'
  };

  // Log the partialBook2 object (will not execute due to TypeScript error)
  console.log("\nPartial Book 2:", partialBook2);
} catch {
  console.log("catch");
}

try {
  // Define an interface for Address
  interface Address09 {
    street: string;
    city: string;
    postalCode: string;
  }

  // Define an interface for Person with a nested Address
  interface Person09 {
    name: string;
    age: number;
    address: Address09; // Address is a nested object
  }

  // Create a nested object with some optional properties using Partial
  const partialPerson: Partial<Person09> = {
    name: "Alice",
    address: {
      street: "dads",
    },
  };

  // Log the partialPerson object and its properties
  console.log("Partial Person:", partialPerson);
  console.log("Name:", partialPerson.name); // Accessing the name property
  console.log("Address:", partialPerson.address); // Accessing the entire address object

  // Valid complete object with all required details including nested object
  const completePerson: Person09 = {
    name: "Bob",
    age: 30,
    address: {
      street: "123 Main St",
      city: "Los Angeles",
      postalCode: "90001",
    },
  };

  // Log the completePerson object and its properties
  console.log("\nComplete Person:", completePerson);
  console.log("Name:", completePerson.name); // Accessing the name property
  console.log("Age:", completePerson.age); // Accessing the age property
  console.log("Address:", completePerson.address); // Accessing the entire address object

  // Attempting to assign an incomplete nested object will result in a type error
  const incompletePerson: Person = {
    name: "Charlie",
    age: 25,
    address: {
      city: "Chicago",
    },
    // Error: Property 'street' and 'postalCode' are missing in type 'Partial<Address>'
  };

  // Log the incompletePerson object (will not execute due to TypeScript error)
  console.log("\nIncomplete Person:", incompletePerson);

  // Attempting to assign an invalid property to partialPerson will result in a type error
  const partialPerson2: Partial<Person> = {
    name: "David",
    age: 28,
    address: {
      city: "San Francisco",
      country: "USA", // Error: 'country' does not exist on type 'Partial<Address>'
    },
  };
  // Log the partialPerson2 object (will not execute due to TypeScript error)
  console.log("\nPartial Person 2:", partialPerson2);
} catch {
  console.log("catch");
}

// Custom type to make specific elements of a tuple optional
type PartialTuple<T extends any[]> = {
  [K in keyof T]?: T[K];
};

// Example tuple type
type CustomTupleType = [string, number, boolean];

// Using PartialTuple with a custom tuple type
type PartialCustomTupleType = PartialTuple<CustomTupleType>;

// Example usage
const partialCustomTuple: PartialCustomTupleType = ["Hello", 42];

// Log the partial custom tuple and its properties
console.log("Partial Custom Tuple:", partialCustomTuple);
console.log("First Element:", partialCustomTuple[0]); // Accessing the first element
console.log("Second Element:", partialCustomTuple[1]); // Accessing the second element
