// Type tuple in TypeScript is a way to define a fixed-length
// array with specific types for each element. It allows you to
// create a tuple type that can hold a set of values of different types in a specific order.

// example of defining a tuple type
type User = [string, number, boolean];

// example of creating a tuple instance

const user: User = [
    "Joao", // string
    30,         // number
    true        // boolean
];

// example of accessing tuple elements
const nameUser: string = user[0]; // Joao
const ageUser: number = user[1]; // 30
const isActiveUser: boolean = user[2]; // true

// example of destructuring a tuple
const [userName, userAge, userIsActive] = user;

console.log(userName); // Joao
console.log(userAge); // 30
console.log(userIsActive); // true

// example of using tuple in a function return type
function getUserInfo(): User {
    return ["Maria", 25, false];
}

const newUser = getUserInfo();
console.log(newUser); // ["Maria", 25, false]