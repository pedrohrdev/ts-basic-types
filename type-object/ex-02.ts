/*
Exercise 2
Create a function named `showObject(...)`.

It should accept any object using the `object` type.

Then, make four calls:

showObject({
name: "Pedro"
})
showObject([1, 2, 3])
showObject(new Date())

Pass a function:

() => console.log("Hello")

Notice that they all work.

Then try doing this:

showObject("Pedro")

and observe the TypeScript error.
*/

function showObject(obj: object): void {
    console.log(obj);
};

showObject({
name: "Pedro"
});

showObject([1, 2, 3]);

showObject(new Date());

showObject(() => console.log("Hello"));

// This will cause a compile-time error, as "Pedro" is not of type `object`.
// showObject("Pedro");