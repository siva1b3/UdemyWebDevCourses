// Class definition for a coder using TypeScript

// ! More verbose method
class CoderVerbose {
  // Properties
  name: string; // Name of the coder
  music: string; // Favorite music genre
  age: number; // Age of the coder
  lang: string; // Programming language preference

  // Constructor with parameters
  constructor(name: string, music: string, age: number, lang: string) {
    this.name = name;
    this.music = music;
    this.age = age;
    this.lang = lang;
  }
}

// ! Less verbose method with DRY principles
class Coder {
  // Properties with access modifiers and default values
  constructor(
    public readonly name: string, // Read-only property for name
    public music: string, // Property for music preference
    private age: number, // Private property for age
    protected lang: string = "TypeScript" // Protected property with default value
  ) {}

  // Method to retrieve age with proper formatting
  public getFormattedAge(): string {
    return `Hello, I'm ${this.age} ${this.age === 1 ? "year" : "years"} old.`;
  }
}

// Create an instance of Coder
const dave = new Coder("Dave", "Rock", 23);

// Output to console
console.log(dave); // Display coder details
console.log(dave.getFormattedAge()); // Display formatted age

// Attempting to access private age property will give error
// console.log(dave.age);
// Error: Property 'age' is private and only accessible within class 'Coder'.

// Derived class extending Coder class
class webDev extends Coder {
  public computer: string; // New property specific to webDev class

  constructor(
    computer: string,
    name: string,
    music: string,
    age: number,
    lang?: string
  ) {
    super(name, music, age, lang); // Call to base class constructor

    this.computer = computer; // Initialize new property
  }

  public getLang(): string {
    return `This was written in ${this.lang}`; // Accessing protected property from base class
  }
}

// Create an instance of webDev class
const Jin = new webDev("mac", "Jin", "Gray", 23);

console.log(Jin.name); // Output: Jin
console.log(Jin.music); // Output: Gray
console.log(Jin.getFormattedAge()); // Output: Hello, I'm 23 years old.
console.log(Jin.getLang()); // Output: This was written in TypeScript
console.log(Jin.computer); // Output: mac

// ! Interface defining properties and methods for an animal
interface Animal {
  name: string; // Property: name of the animal
  makeSound(): void; // Method: makes a sound
}

// Class representing a Dog, implementing the Animal interface
class Dog implements Animal {
  name: string; // Property: name of the dog

  constructor(name: string) {
    this.name = name;
  }

  // Method required by Animal interface
  makeSound(): void {
    console.log(`${this.name} barks.`);
  }
}

// Interface extending Animal, adding method for flying birds
interface Bird extends Animal {
  fly(): void; // Method: flies
}

// Class representing a Sparrow, implementing the Bird interface
class Sparrow implements Bird {
  name: string; // Property: name of the sparrow

  constructor(name: string) {
    this.name = name;
  }

  // Method required by Animal interface
  makeSound(): void {
    console.log(`${this.name} chirps.`);
  }

  // Method required by Bird interface
  fly(): void {
    console.log(`${this.name} flies.`);
  }
}

// Usage examples
const myDog = new Dog("Buddy");
myDog.makeSound(); // Output: Buddy barks.

const mySparrow = new Sparrow("Sunny");
mySparrow.makeSound(); // Output: Sunny chirps.
mySparrow.fly(); // Output: Sunny flies.

/**
 * TypeScript example demonstrating class inheritance, interface implementation,
 * and various properties and methods for different types of animals.
 */

// Interface defining properties and methods for an animal
interface Animal {
  name: string; // Property: name of the animal
  makeSound(): void; // Method: makes a sound
}

// Interface defining properties and methods for a mover
interface Mover {
  move(distance: number): void; // Method: moves a certain distance
}

// Base class representing a generic animal
class BaseAnimal {
  protected type: string; // Protected property: type of animal

  /**
   * Creates an instance of BaseAnimal.
   * @param name The name of the animal.
   */
  constructor(public name: string) {
    this.type = "Animal";
  }

  /**
   * Makes a generic sound.
   */
  makeSound(): void {
    console.log(`${this.name} makes a generic sound.`);
  }
}

// Class representing a Dog, extends BaseAnimal and implements Animal, Mover interfaces
class Dog02 extends BaseAnimal implements Animal, Mover {
  private breed: string; // Private property: breed of the dog

  /**
   * Creates an instance of Dog.
   * @param name The name of the dog.
   * @param breed The breed of the dog.
   */
  constructor(name: string, breed: string) {
    super(name); // Call to parent class constructor
    this.breed = breed;
  }

  /**
   * Makes a specific sound for dogs.
   */
  makeSound(): void {
    console.log(`${this.name} the ${this.breed} barks.`);
  }

  /**
   * Moves the dog a certain distance.
   * @param distance The distance to move.
   */
  move(distance: number): void {
    console.log(`${this.name} the ${this.breed} moves ${distance} meters.`);
  }

  /**
   * Simulates fetching behavior.
   */
  fetchBall(): void {
    console.log(`${this.name} fetches the ball.`);
  }
}

// Class representing a Bird02, implements Animal and Mover interfaces
class Bird02 implements Animal, Mover {
  /**
   * Creates an instance of Bird02.
   * @param name The name of the bird.
   */
  constructor(public name: string) {}

  /**
   * Makes a specific sound for birds.
   */
  makeSound(): void {
    console.log(`${this.name} chirps.`);
  }

  /**
   * Moves the bird a certain distance.
   * @param distance The distance to move.
   */
  move(distance: number): void {
    console.log(`${this.name} flies ${distance} meters.`);
  }

  /**
   * Simulates nest-building behavior.
   */
  buildNest(): void {
    console.log(`${this.name} builds a nest.`);
  }
}

// Usage examples
const myDog02 = new Dog02("Buddy", "Labrador");
myDog02.makeSound(); // Output: Buddy the Labrador barks.
myDog02.move(10); // Output: Buddy the Labrador moves 10 meters.
myDog02.fetchBall(); // Output: Buddy fetches the ball.

const myBird02 = new Bird02("Sparrow");
myBird02.makeSound(); // Output: Sparrow chirps.
myBird02.move(5); // Output: Sparrow flies 5 meters.
myBird02.buildNest(); // Output: Sparrow builds a nest.

// Define a class representing cars
class Cars {
  // Static property to keep track of the number of cars created
  static carNumber: number = 0;

  // Static method to retrieve the current count of cars
  static getCarNumber(): number {
    return this.carNumber;
  }

  // Private instance property to store the unique ID of each car
  private id: number;

  /**
   * Creates an instance of Cars.
   * @param name The name of the car.
   */
  constructor(public name: string) {
    // Log that a new car is created
    console.log(`Creating a new car: ${name}`);
    // Increment carNumber and assign it as the unique ID for the current car instance
    this.id = ++Cars.carNumber;
  }

  /**
   * Method to get the unique ID of the car.
   * @returns The ID of the car.
   */
  getId(): number {
    return this.id;
  }
}

// Creating instances of Cars
const car1 = new Cars("Audi");
const car2 = new Cars("BMW");
const car3 = new Cars("Mercedes");
const car4 = new Cars("Tesla");

// Logging the IDs of each car instance
console.log("ID of car1:", car1.getId());
console.log("ID of car2:", car2.getId());
console.log("ID of car3:", car3.getId());
console.log("ID of car4:", car4.getId());

// Logging the total number of cars created using the static method
console.log("Total number of cars created:", Cars.getCarNumber());

class Person {
  private _age: number; // Private property

  // Constructor with private _name and age parameters
  constructor(private _name: string, age: number) {
    this._age = age;
  }

  // Getter for name property
  public get name(): string {
    return this._name;
  }

  // Setter for name property
  public set name(newName: string) {
    // Validate input before updating
    if (newName.length > 0) {
      this._name = newName;
    } else {
      console.log("Name cannot be empty.");
    }
  }

  // Getter for age property
  public get age(): number {
    return this._age;
  }

  // Setter for age property
  public set age(newAge: number) {
    // Validate input before updating
    if (newAge >= 0 && newAge <= 150) {
      this._age = newAge;
    } else {
      console.log("Invalid age input.");
    }
  }
}

// Creating an instance of Person
const person1 = new Person("Alice", 30);

// Using getter to retrieve name
console.log("Name:", person1.name); // Output: Alice

// Using setter to change name
person1.name = "Bob";
console.log("Updated Name:", person1.name); // Output: Bob

// Using setter with invalid input (empty name)
person1.name = "";
console.log("Name after invalid update:", person1.name); // Output: Bob (unchanged)

// Using getter to retrieve age
console.log("Age:", person1.age); // Output: 30

// Using setter to change age
person1.age = 35;
console.log("Updated Age:", person1.age); // Output: 35

// Using setter with invalid input (negative age)
person1.age = -5;
console.log("Age after invalid update:", person1.age); // Output: 35 (unchanged)
