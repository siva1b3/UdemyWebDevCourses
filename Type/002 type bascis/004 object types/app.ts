// ! defining object
const person = {
  name: "siva",
  age: 26,
};

console.log(person.name);

// ! defining object with object specified
// ^ but specifying only objcet will do nothing
// * we need to give what are there in object like - keys
// ! or else we will get error
const person1: object = {
  name: "siva",
  age: 26,
};

console.log(person1.name);

// ! inline objecet creation
// * not a good method just like inline styles
// ? but still accepted
const person2: {
  name: string;
  age: number;
} = {
  name: "siva",
  age: 26,
};

console.log(person2.name);

// ! Nested Objects & Types
// * Of course object types can also be created for nested objects.
const product: {
  id: string;
  price: number;
  tags: string[];
  details: {
    title: string;
    description: string;
  };
} = {
  id: "abc1",
  price: 12.99,
  tags: ["great-offer", "hot-and-new"],
  details: {
    title: "Red Carpet",
    description: "A great carpet - almost brand-new!",
  },
};
