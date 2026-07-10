/*
Exercise 1

Create a type named:

type Logger

that represents a function that takes a string and returns nothing.

Then:

Create a variable named `log` of this type.
Make it print the received message using `console.log`.
Call `log("Olá, TypeScript!")`.
*/

type Logger = (message: string) => void;

let log: Logger = (message) => {
    console.log(message)
}

log("Yoo, what's up!")