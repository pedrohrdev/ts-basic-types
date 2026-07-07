/*
Exercise 2

Create a type:

type MathOperation

that represents a function taking two numbers and returning a number.

Then:

Create two variables of this type: `somar` and `subtrair`.
Implement both.
Call both functions and display the result in the console.
*/

type MathOperation = (a: number, b: number) => number;

let sum: MathOperation = (a, b) => a + b;
let sub: MathOperation = (a, b) => a - b;

console.log(`Let's test! \n ${sum(1, 1)}` )
console.log(`Let's test! \n ${sub(10, 1)}` )