const person: {
  name: string;
  age: number;
  // ! we will create string arrays using
  // * "string[]" its an array with strings in it
  hobbies: string[];
} = {
  name: "siva",
  age: 26,
  hobbies: ["sports", "movies"],
};

console.log(person.name);

let favoriteActivities: string[];
favoriteActivities = ["hobbie1", "hobbie2", "hobbie3"];

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}
