/*
Exercise 1

Given:

let value: unknown = "TypeScript";

Without using `any`, print the number of characters in the string using a type assertion.
*/

let value: unknown = 'TypeScript';

let newValue: string = value as string;
console.log(`The number of characters in the string is: ${newValue.length}`);