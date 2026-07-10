/*
Exercise 4 — Type Assertions + Arrays

You received a value from the backend:

let values: unknown = [10, 20, 30, 40];
Do the following:
Use a type assertion to treat `values` as an array of numbers (`number[]`).
Calculate the sum of all elements.
Log to the console:
Total: 100
Rules
❌ Do not use `any`.
✅ Use `as`.
✅ Do not change the original type of `values`.
✅ Try to solve it using an array method (e.g., `reduce`).
*/

let values: unknown = [10, 20, 30, 40];

let data: number[] = values as number[];

const total = data.reduce((acc, current) => acc + current, 0);

console.log(total)