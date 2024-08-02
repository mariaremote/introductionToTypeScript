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
// function displayInfo(person1) {
//   console.log(`${person1.name} lives in ${person1.address?.city}`);
// }

// assigning an array of types
let people: Person[] = [person1, person2];

// literal types represent concrete values instead of types
let myName: "Joe"; // myName can only be "Joe"
myName = "Joe"; // valid
// myName = "Bill"; // error: Type '"Bill"' is not assignable to type '"Joe"'

// union types allow for multiple types
type User = {
  id: number;
  username: string;
  role: "admin" | "editor" | "viewer";
};
type UserRole = "admin" | "editor" | "viewer";
let role: UserRole = "admin"; // valid
// role = "superuser"; // error: Type '"superuser"' is not assignable to type 'UserRole'
// let user: User = {
//   username: "joe",
//   role: "admin",
// };

let nextUserCounter = 1;
const users: User[] = [
  { id: nextUserCounter++, username: "joe", role: "admin" },
  { id: nextUserCounter++, username: "jane", role: "editor" },
  { id: nextUserCounter++, username: "john", role: "viewer" },
];

function fetchUserDetails(username: string): User {
  const userDetails = users.find((user) => user.username === username);
  if (!userDetails) {
    throw new Error(`User ${username} not found`);
  }
  return userDetails;
}

// utility types to modify existing types
type UpdatedUser = Partial<User>; // makes all properties of the User type optional
type NewUser = Omit<User, "id">; // makes all properties of the User type required except for the "id" property

function updateUser(id: number, updates: UpdatedUser): void {
  const foundUser: User | undefined = users.find((user) => user.id === id);
  if (!foundUser) {
    throw new Error(`User ${id} not found`);
  }
  Object.assign(foundUser, updates);
}

updateUser(1, { username: "new_joe" });
updateUser(2, { role: "admin" });

function addNewUser(newUser: NewUser): User {
  const user: User = {
    id: nextUserCounter++,
    ...newUser,
  };
  users.push(user);
  return user;
}

addNewUser({ username: "jackie", role: "editor" });

console.log(users);

// generic types allow for flexibility in types

const gameScores = [14, 23, 45, 67, 89, 100];
const favoriteThings = [
  "raindrops on roses",
  "whiskers on kittens",
  "bright copper kettles",
  "warm woolen mittens",
];
const voters = [
  { name: "Alice", age: 45 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 77 },
];

function getLastItem<Type>(array: Type[]): Type | undefined {
  return array[array.length - 1];
}

console.log(getLastItem(gameScores)); // 100
console.log(getLastItem(favoriteThings)); // "warm woolen mittens"
console.log(getLastItem(voters)); // { name: "Charlie", age: 77 }
