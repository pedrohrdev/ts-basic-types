// What is type any in TypeScript?
// In TypeScript, the `any` type is a special
// type that can represent any value. It is used
// when you want to opt-out of type checking for a
// particular variable or parameter. When a variable
// is declared with the `any` type, it can hold values
// of any type, including numbers, strings,
// objects, arrays, and even functions.

// But using `any` can lead to potential issues, as
// it bypasses the benefits of TypeScript's type system. It
// is generally recommended to use more specific types whenever
// possible to take advantage of TypeScript's static type
// checking and to catch errors at compile time.

// So while `any` can be useful in certain scenarios, it should be used sparingly and with caution.

// This is a case where you wouldn't
// want to use `any`, because you don't want the function
// to accept just any type of parameter, but rather only a string.
// Therefore, in this case, the ideal approach would be to type the function to accept
// only strings.

function showMessage(msg) {
    return msg;
}

// This is a case where you would want to use a specific type, in this case, string,
// to ensure that the function only accepts string parameters. This helps to catch errors
// at compile time and provides better type safety.
function showMessageTyped(msg: string): string {

    return msg;

};

console.log(showMessageTyped("Hello, World!")); // This will work fine
console.log(showMessageTyped(123)); // This will cause a compile-time error, as 123 is not a string
