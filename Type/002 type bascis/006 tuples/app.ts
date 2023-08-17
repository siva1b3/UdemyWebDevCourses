const person: {
  name: string;
  age: number;
  hobbies: string[];
  // ! tuples are used if we want an mixed array with
  // ^ specifed type for each element
  role: [number, string, boolean, number];

  // ! we can give names to each value in tuple
  // * either we give names to all values in tuple
  // ! or
  // ^ we not give names to all values in tuple
  // ? giving names only some elements will not work
  roleWithNames: [
    roleid: number,
    rolename: string,
    isTeamLead: boolean,
    deptNo: number
  ];
} = {
  name: "siva",
  age: 26,
  hobbies: ["sports", "movies"],
  role: [1, "admin", true, 23],
  roleWithNames: [1, "admin", true, 23],
};

// ! A good practice is to make your tuple readonly.
// ^ Tuples only have strongly defined types for the initial values:
// * Example
// ? define our tuple
let ourTuple: [number, boolean, string];

// & initialize correctly
ourTuple = [5, false, "Coding God was here"];

// ! We have no type safety in our tuple for indexes 3+
ourTuple.push("Something new and wrong");
console.log(ourTuple);

// * define our readonly tuple
const ourReadonlyTuple: readonly [number, boolean, string] = [
  5,
  true,
  "The Real Coding God",
];

// ^ throws error as it is readonly.
ourReadonlyTuple.push("Coding God took a day off");

// ! You can declare an array of tuple also.
// ^ Example: Tuple Array Copy
let employee: [number, string][];
employee = [
  [1, "Steve"],
  [2, "Bill"],
  [3, "Jeff"],
];
