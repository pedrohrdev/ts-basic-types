/*
Exercise 1 — Type Alias ​​+ Object + Function

Create a type named `Book`.

It must have:

`title` (string)
`author` (string)
`pages` (number)
`available` (boolean)

Then create a function named:

`printBook(book)`

It must print exactly:

Title: Clean Code
Author: Robert C. Martin
Pages: 464
Available: Yes

If `available` is `false`, it must print:

Available: No

Then test it with this book:

Title: Clean Code
Author: Robert C. Martin
Pages: 464
Available: true

Rules
Do not use `any`.
Use the `Book` alias.
Type the function parameter.
Use template strings.
Use a ternary operator for "Yes" or "No".

Difficulty

⭐☆☆☆☆ (very easy)
*/

// Type Book containing the book info
type Book = {
    title: string;
    author: string;
    pages: number;
    available: boolean
};

const cleanCode: Book = {
    title: "Clean Code",
    author: "Robert C. Martin",
    pages: 464,
    available: true
};

const cantHurtMe: Book = {
    title: "Can't Hurt Me",
    author: "David Goggins",
    pages: 319,
    available: false
}

function printBook(book: Book): void {

    const available: string  = book.available ? "Yes" : "No";

    console.log(`
        Title: ${book.title}
        Author: ${book.author}
        Pages: ${book.pages}
        Available: ${available}            
    `)

};

printBook(cleanCode); // This will return the book's availability status and its details.
printBook(cantHurtMe) // This will return the book's information and indicate that it is not available.