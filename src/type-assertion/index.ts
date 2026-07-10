// Type Assertion in TypeScript allows you to override
// the type inference of a variable or expression. It
// is a way to tell the TypeScript compiler that you
// know more about the type of a value than it does. This
// can be useful when you are certain about the type
// of a value, but TypeScript cannot infer it correctly.

// Example 1: Using the 'as' keyword for type assertion(the most recommended way)

let someValue: unknown = "Hello, TypeScript!";
// Here, we assert that 'someValue' is of type 'string'
let strLength: number = (someValue as string).length;

console.log(`The length of the string is: ${strLength}`);
