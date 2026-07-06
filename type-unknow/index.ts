// The type unknown is a special type in TypeScript that
// represents any value. It is similar to the any type, but
// it is safer because it requires type checking before performing operations on values of this type.

// Here's an example of using the unknown type:
let value: unknown;

value = 42;
value = "Hello, world!";

// To perform operations on a value of type unknown, you need to first check its type:
if (typeof value === "string") {
    console.log(value.toUpperCase()); // Safe to call string methods
} else if (typeof value === "number") {
    console.log(value.toFixed(2)); // Safe to call number methods
} else {
    console.log("Value is of an unknown type");
}

// You can also use type assertions to tell TypeScript the specific type of an unknown value:
let anotherValue: unknown = "TypeScript";

let stringValue: string = anotherValue as string; // Type assertion
console.log(stringValue.length); // Output: 10

// However, be cautious with type assertions, as they can lead to runtime errors if the assertion is incorrect.