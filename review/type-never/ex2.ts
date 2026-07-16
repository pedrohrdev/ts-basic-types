/*
Create a function named `infiniteLoop` that executes a `while(true)`.
Correctly define the return type.
*/

function infiniteLoop(): never {
    while(true) {
        console.log(33.5 * 2)
    }
}

infiniteLoop()