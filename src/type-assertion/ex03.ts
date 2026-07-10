/*
Exercise 3

Create a function:

function printUpperCase(value: unknown) {
// ...
}

Inside it, use a type assertion to treat `value`
as a string and print it in uppercase. Then, reflect: why
might this implementation be dangerous?
*/

function printUpperCase(value: unknown): void {

    console.log(
        
        (value as string).toUpperCase()

    );

};

printUpperCase("Hello, World!"); // This will work fine
printUpperCase(123); // This will throw an error at runtime

// Reflection: This implementation is dangerous because it
// assumes that the value passed to the function is always
// a string. If a non-string value is passed, it will cause
// a runtime error when trying to call `toUpperCase()` on
// a non-string type.