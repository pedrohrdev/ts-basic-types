// Type never on Typescript is a special type that represents
// values that never occur. It is often used to indicate that
// a function never returns or that a variable can never hold
// a value. In this file, we will explore the usage of the
// `never` type in TypeScript.


// // Here we define a function `throwError` that takes a string
// message as an argument and throws an error with that message. The
// return type of this function is `never`, indicating that it will never return a value.
function throwError(message: string): never {
    throw new Error(message);
}


// // The `never` type can also be used in functions that have infinite loops.
function infiniteLoop(): never {
    while (true) {
        // This loop will run forever, so the function never returns.
    }
}

// // The `never` type can also be used in type guards to ensure that
// all possible cases are handled. For example, consider the following
// function that takes a value of type `string | number` and returns
// a string representation of that value.
function stringify(value: string | number): string {
    if (typeof value === 'string') {
        return value;
    } else if (typeof value === 'number') {
        return value.toString();
    } else {
        // If we reach this point, it means that the value is neither
        // a string nor a number, which should never happen. We can
        // use the `never` type to indicate that this code path is
        // unreachable.
        throwError('Unexpected value type');
    }
}