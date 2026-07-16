/*
Medium

Make the code work without using `as`.

// Display:
// Your age is 16

Hint: use `typeof`.
*/
const age: unknown = 16;

if(typeof age === "number") {
    console.log(`Your age is ${age}`)
};
