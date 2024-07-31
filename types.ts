type Address = {
  street: string;
  city: string;
  country: string;
};

type Person = {
  name: string;
  age: number;
  isStudent: boolean;
  address?: Address;
};

let person1: Person = {
  name: "Joe",
  age: 25,
  isStudent: false,
};

let person2: Person = {
  name: "Jane",
  age: 28,
  isStudent: true,
  address: {
    street: "123 Main St",
    city: "Springfield",
    country: "USA",
  },
};

// will display "Joe lives in undefined"
function displayInfo(person1) {
  console.log(`${person1.name} lives in ${person1.address?.city}`);
}

// assigning an array of types
let people: Person[] = [person1, person2];

// literal types represent concrete values instead of types
let myName: "Joe"; // myName can only be "Joe"
myName = "Joe"; // valid
myName = "Bill"; // error: Type '"Bill"' is not assignable to type '"Joe"'
