/*
Exercise 1 

Create a variable named `book` of type `object`.

It should store:

title
author
pages

Then:

run `console.log(book);`

Do not try to access the properties; just print the entire object.
*/

const book: object = {
    name: "Can't Hurt Me",
    author: "David Goggins",
    pages: 364
};

console.log(book);
// Showing the entire object works.

console.log(book.name); // This will cause a compile-time error, as
// the `name` property is not accessible on type `object`.

// This is precisely the behavior we wanted to observe: when using
// `object`, TypeScript only knows that the variable holds an
// object, but it does not know which properties it has.