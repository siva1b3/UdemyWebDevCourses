"use strict";
// Class definition for a coder using TypeScript
// ! More verbose method
class CoderVerbose {
    // Properties
    name; // Name of the coder
    music; // Favorite music genre
    age; // Age of the coder
    lang; // Programming language preference
    // Constructor with parameters
    constructor(name, music, age, lang) {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
}
// ! Less verbose method with DRY principles
class Coder {
    name;
    music;
    age;
    lang;
    // Properties with access modifiers and default values
    constructor(name, // Read-only property for name
    music, // Property for music preference
    age, // Private property for age
    lang = "TypeScript" // Protected property with default value
    ) {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    // Method to retrieve age with proper formatting
    getFormattedAge() {
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
    computer; // New property specific to webDev class
    constructor(computer, name, music, age, lang) {
        super(name, music, age, lang); // Call to base class constructor
        this.computer = computer; // Initialize new property
    }
    getLang() {
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
// Class representing a Dog, implementing the Animal interface
class Dog {
    name; // Property: name of the dog
    constructor(name) {
        this.name = name;
    }
    // Method required by Animal interface
    makeSound() {
        console.log(`${this.name} barks.`);
    }
}
// Class representing a Sparrow, implementing the Bird interface
class Sparrow {
    name; // Property: name of the sparrow
    constructor(name) {
        this.name = name;
    }
    // Method required by Animal interface
    makeSound() {
        console.log(`${this.name} chirps.`);
    }
    // Method required by Bird interface
    fly() {
        console.log(`${this.name} flies.`);
    }
}
// Usage examples
const myDog = new Dog("Buddy");
myDog.makeSound(); // Output: Buddy barks.
const mySparrow = new Sparrow("Sunny");
mySparrow.makeSound(); // Output: Sunny chirps.
mySparrow.fly(); // Output: Sunny flies.
// Base class representing a generic animal
class BaseAnimal {
    name;
    type; // Protected property: type of animal
    /**
     * Creates an instance of BaseAnimal.
     * @param name The name of the animal.
     */
    constructor(name) {
        this.name = name;
        this.type = "Animal";
    }
    /**
     * Makes a generic sound.
     */
    makeSound() {
        console.log(`${this.name} makes a generic sound.`);
    }
}
// Class representing a Dog, extends BaseAnimal and implements Animal, Mover interfaces
class Dog02 extends BaseAnimal {
    breed; // Private property: breed of the dog
    /**
     * Creates an instance of Dog.
     * @param name The name of the dog.
     * @param breed The breed of the dog.
     */
    constructor(name, breed) {
        super(name); // Call to parent class constructor
        this.breed = breed;
    }
    /**
     * Makes a specific sound for dogs.
     */
    makeSound() {
        console.log(`${this.name} the ${this.breed} barks.`);
    }
    /**
     * Moves the dog a certain distance.
     * @param distance The distance to move.
     */
    move(distance) {
        console.log(`${this.name} the ${this.breed} moves ${distance} meters.`);
    }
    /**
     * Simulates fetching behavior.
     */
    fetchBall() {
        console.log(`${this.name} fetches the ball.`);
    }
}
// Class representing a Bird02, implements Animal and Mover interfaces
class Bird02 {
    name;
    /**
     * Creates an instance of Bird02.
     * @param name The name of the bird.
     */
    constructor(name) {
        this.name = name;
    }
    /**
     * Makes a specific sound for birds.
     */
    makeSound() {
        console.log(`${this.name} chirps.`);
    }
    /**
     * Moves the bird a certain distance.
     * @param distance The distance to move.
     */
    move(distance) {
        console.log(`${this.name} flies ${distance} meters.`);
    }
    /**
     * Simulates nest-building behavior.
     */
    buildNest() {
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
    name;
    // Static property to keep track of the number of cars created
    static carNumber = 0;
    // Static method to retrieve the current count of cars
    static getCarNumber() {
        return this.carNumber;
    }
    // Private instance property to store the unique ID of each car
    id;
    /**
     * Creates an instance of Cars.
     * @param name The name of the car.
     */
    constructor(name) {
        this.name = name;
        // Log that a new car is created
        console.log(`Creating a new car: ${name}`);
        // Increment carNumber and assign it as the unique ID for the current car instance
        this.id = ++Cars.carNumber;
    }
    /**
     * Method to get the unique ID of the car.
     * @returns The ID of the car.
     */
    getId() {
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
    _name;
    _age; // Private property
    // Constructor with private _name and age parameters
    constructor(_name, age) {
        this._name = _name;
        this._age = age;
    }
    // Getter for name property
    get name() {
        return this._name;
    }
    // Setter for name property
    set name(newName) {
        // Validate input before updating
        if (newName.length > 0) {
            this._name = newName;
        }
        else {
            console.log("Name cannot be empty.");
        }
    }
    // Getter for age property
    get age() {
        return this._age;
    }
    // Setter for age property
    set age(newAge) {
        // Validate input before updating
        if (newAge >= 0 && newAge <= 150) {
            this._age = newAge;
        }
        else {
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
