// What's Type Alias in TypeScript?
/*
Type aliases in TypeScript allow you to create a new name
for a type. This can be useful for simplifying complex
types, improving code readability, and making it easier to manage types across your codebase.

ex: 

type Age = number;

ahead you can use the Age type alias in your code instead of
using the number type directly. This can make your code more
readable and easier to understand, especially when dealing with complex types.

*/


type Age = number;

type Person = {
    nameUser: string;
    age: Age;
    salary: number;
    colorPreference?: string; // Optional property
};

type colorRGB = "red" | "green" | "blue";
type colorCMYK = "cyan" | "magenta" | "yellow" | "black";

type ColorPreference = colorRGB | colorCMYK;

const person1: Person = {
    nameUser: "Pedro",
    age: 30,
    salary: 500_000,
};

function setColorPreference(person: Person, color: ColorPreference): Person {
    return { ...person, colorPreference: color };
}

console.log(setColorPreference(person1, "red")); // Valid
console.log(setColorPreference(person1, "cyan")); // Valid
// console.log(setColorPreference(person1, "purple")); // Invalid, will cause a TypeScript error    