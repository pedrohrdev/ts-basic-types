/*
The TypeScript `object` type is used when you want to
type an object—that is, anything other than primitive types. You
could type something as `object`, and that "something" could be:
objects (`{}`),
arrays (`[]`),
functions (`() => {}`),
class instances or dates (`new Date()`). However, you typically
don't see code like:

let user: object = { 

    name: "Pedro"
    
}` —partly because you wouldn't even be able to access the data (like `.name`).
Instead, you'll usually see definitions like 

type User = {
    name: string;
    age: number
}` or: 

interface User {
    name: string;
    age: number
}` or: 

}` rather than `let user: object`.
*/

type User = {
    name: string;
    age: number;
};

const user: User = {
    name: "Pedro",
    age: 16
};

console.log(user.name);