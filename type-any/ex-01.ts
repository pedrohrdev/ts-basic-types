/*
Exercise 1 - Accepting any type

Create a variable named `data` that can accept any type of value.

Then, perform the following assignments:

a string
a number
a boolean
an array

Finally, use `console.log()` after each change.

Objective: to realize that `any` allows for any value.
*/

let data: any;

data = 'Hello World!';
console.log(data); // Output: Hello World;

data = 67;
console.log(data); // Output: 67;

data = true;
console.log(data) // Output: true;

data = [
    1, 2, 3, 4
];
console.log(data) // Output [ 1, 2, 3, 4 ]

data = {
    nameUser: 'Pedro',
    age: 16
};
console.log(data) // Output: { nameUser: 'Pedro', age: 16 }

