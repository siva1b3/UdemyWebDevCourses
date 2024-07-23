(async () => {
  // 👇 We define a generic value called T with <T>
  function getFirstElement<T>(arr: T[]): T {
    return arr[0];
  }

  // instaed of any type we will send type also as generic to the function
  // Example usage with a number array
  const numbers02: number[] = [1, 2, 3, 4, 5];
  const firstNumber02 = getFirstElement<number>(numbers02); // Get the first number

  // Example usage with a string array
  const strings: string[] = ["apple", "banana", "orange"];
  const firstString = getFirstElement<string>(strings); // Get the first string

  // 👇 Defining our generic
  interface Person02<T> {
    id: number;
    name: string;
    age: number;
    metadata: T;
  }

  // 👇 Using our generic
  const personOne: Person02<(number | string)[]> = {
    id: 1,
    name: "Jeff",
    age: 31,
    metadata: ["male", "tall", 22],
  };

  interface ExampleData {
    sex: string;
    height: "tall" | "short";
    favouriteNumber: number;
  }

  // 👇 Using our generic
  const personTwo: Person02<ExampleData> = {
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

  // Example 1: Person with metadata as a boolean
  interface BooleanData {
    isActive: boolean;
  }

  const personThree: Person02<BooleanData> = {
    id: 2,
    name: "Alice",
    age: 28,
    metadata: {
      isActive: true,
    },
  };
  console.log("🚀 ~ file: 008 Generics.ts:64 ~ personThree:", personThree);

  // Example 2: Person with metadata as a complex object
  interface ComplexData {
    details: {
      address: string;
      phone: string;
    };
    hobbies: string[];
  }

  const personFour: Person02<ComplexData> = {
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
  function combineValues<T>(value1: T, value2: T): [T, T] {
    return [value1, value2];
  }

  // Example: Combine two numbers
  const numberTuple: [number, number] = combineValues<number>(10, 20);
  console.log("🚀 ~ file: 008 Generics.ts:92 ~ numberTuple:", numberTuple); // Output: [10, 20]

  // Example: Combine two strings
  const stringTuple: [string, string] = combineValues<string>("hello", "world");
  console.log("🚀 ~ file: 008 Generics.ts:96 ~ stringTuple:", stringTuple); // Output: ["hello", "world"]

  // Example: Combine two booleans
  const booleanTuple: [boolean, boolean] = combineValues<boolean>(true, false);
  console.log("🚀 ~ file: 008 Generics.ts:100 ~ booleanTuple:", booleanTuple); // Output: [true, false]

  // 👇 Defining our new class with a generic
  class ExampleClass<T> {
    // 👇 Initializing a new property with an array of the generic value
    private values: T[] = [];

    // 👇 Setting the argument for this method to be the generic
    setValue(value: T): void {
      this.values.push(value);
    }

    // 👇 Setting the return value of this method to be an array of the generic
    getValues(): T[] {
      return this.values;
    }
  }

  // 👇 Using 'number' as the type to replace our generic 'T'
  const example = new ExampleClass<number>();

  // 👇 We can now only pass in numbers. Any other type will error.
  example.setValue(24);
  example.setValue(42);
  const values = example.getValues();

  console.log(values); // [24, 42]

  interface ObjOne {
    fact: string;
    length: number;
  }

  interface BitcoinData {
    time: {
      updated: string;
      updatedISO: string;
      updateduk: string;
    };
    disclaimer: string;
    chartName: string;
    bpi: {
      USD: {
        code: string;
        symbol: string;
        rate: string;
        description: string;
        rate_float: number;
      };
      GBP: {
        code: string;
        symbol: string;
        rate: string;
        description: string;
        rate_float: number;
      };
      EUR: {
        code: string;
        symbol: string;
        rate: string;
        description: string;
        rate_float: number;
      };
    };
  }

  // Defining our function with a generic type (T)
  async function fetchData<T>(API_URL: string) {
    console.log("🚀 ~ file: 008 Generics.ts:172 ~ API_URL:", API_URL);

    const response = await fetch(API_URL);
    // 👇 Telling TS that the response data is the type of T (our generic)
    const data = (await response.json()) as T;
    console.log("🚀 ~ file: 008 Generics.ts:143 ~ data:", data);

    return data;
  }

  const data = await fetchData<ObjOne>("https://catfact.ninja/fact");
  // The returned data would have a type of ObjOne
  console.log("🚀 ~ file: 008 Generics.ts:148 ~ data:", data);

  const bitCoin = await fetchData<BitcoinData>(
    "https://api.coindesk.com/v1/bpi/currentprice.json"
  );

  console.log("🚀 ~ file: 008 Generics.ts:189 ~ bitCoin.time:", bitCoin.time);
  console.log("🚀 ~ file: 008 Generics.ts:191 ~ bitCoin:", bitCoin);

  // Generic function with multiple generics
  function mergeArrays<T, K>(arr1: T[], arr2: K[]): (T | K)[] {
    return [...arr1, ...arr2];
  }

  const numArray = [1, 2, 3];
  const strArray = ["hello", "world"];
  // 👇 You can explicity define the generics like this.
  const mergedArray = mergeArrays<number, string>(numArray, strArray);
  console.log("🚀 ~ file: 008 Generics.ts:201 ~ mergedArray:", mergedArray); // Output: [1, 2, 3, "hello", "world"]

  // 👇 Or, you can let TS infer the types like this but will work.
  const mergedArray2 = mergeArrays(numArray, strArray);
  console.log("🚀 ~ file: 008 Generics.ts:204 ~ mergedArray2:", mergedArray2); // Output: [1, 2, 3, "hello", "world"]
})();
