// Exercise 1 — Basic

// What will each function's return type be?

function a() {
    console.log("Hello");
}

function b() {
    throw new Error("Oops");
}

function c() {
    while (true) {}
}

// What is the return type of a?
// R: The return type of function `a` is `void`, as it does not return any value.

// What is the return type of b?
// R: The return type of function `b` is `never`, as it always throws an error and never returns.

// What is the return type of c?
// R: The return type of function `c` is `never`, as it has an infinite loop and never returns.