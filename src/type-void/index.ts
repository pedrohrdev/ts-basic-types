// What's the void type in TypeScript?

// The void type in TypeScript is a special type that
// represents the absence of a value. It is commonly used
// as the return type for functions that do not return any value.
// When a function is declared with a return type of
// void, it indicates that the function does not produce a
// meaningful result and is intended to perform some side effects instead.

// Here's an example of a function that uses the void type:

function logMessage(message: string): void {

    console.log(message);

};

logMessage("This is a log message."); // This will log the message to the console

logMessage('==================================================================')

const person = {
    name: "Pedro",
    age: 16,

    greet(): void { // The greet method is declared with a return type of void, indicating that it does not return any value.
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
};

person.greet(); // This will log the greeting message to the console