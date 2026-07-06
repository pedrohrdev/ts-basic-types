// The union type in TypeScript allows you to define a
// variable that can hold multiple types. It is denoted
// using the pipe (`|`) symbol between the types. This feature
// is useful when a value can be one of several types, providing
// flexibility while still maintaining type safety.

// Here's an example of using union types:
let unionValue: string | number;

unionValue = "Hello, TypeScript!";
console.log(unionValue); // Output: Hello, TypeScript!

unionValue = 42;
console.log(unionValue); // Output: 42

// You can also use union types in function parameters:
function printValue(value: string | number): void {
    if (typeof value === "string") {
        console.log(`String value: ${value}`);
    } else {
        console.log(`Number value: ${value}`);
    }
}

printValue("Union types are powerful!"); // Output: String value: Union types are powerful!
printValue(100); // Output: Number value: 100

// Union types can also be combined with other types, such as arrays or objects:
type User = { name: string; age: number };
type Admin = { name: string; role: string };

let userOrAdmin: User | Admin;

userOrAdmin = { name: "Alice", age: 30 };
console.log(userOrAdmin); // Output: { name: 'Alice', age: 30 }

userOrAdmin = { name: "Bob", role: "Administrator" };
console.log(userOrAdmin); // Output: { name: 'Bob', role: 'Administrator' }

// In summary, union types provide a way to define variables that can hold multiple types, enhancing flexibility while maintaining type safety in TypeScript.   