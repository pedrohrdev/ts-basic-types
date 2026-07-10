/*
Exercise 2

Create a type:

type User = {
name: string; 
age: number;
};

Then:

const data: unknown = {
name: "Pedro",
age: 16
};

Use a type assertion to access name and age.
*/

type User = {
    nameUser: string;
    age: number;
};

const data: unknown = {
    nameUser: "Pedro",
    age: 16
};

const userData: User = data as User;

console.log(`Name of user ${userData.nameUser};`)
console.log(`Age of user ${userData.age};`)