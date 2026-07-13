/*
Exercise 5 — Type Assertions + Objects

You received an object from the backend:

let data: unknown = {
name: "Pedro",
age: 16,
};
Do the following:
Use a type assertion to treat `data` as an object of type:
type User = {
name: string; 
age: number;
};
Print exactly this to the console:
Name: Pedro
Age: 16
Rules
❌ Do not use `any`.
✅ Use `as`.
✅ Do not change the original type of `data`.
✅ Create the `User` type.
*/

type User = {
  name: string;
  age: number
};

let data: unknown = {
  name: "Pedro",
  age: 16
};

const user = data as User;

console.log(`Name: ${user.name} \n Age: ${user.age}`)