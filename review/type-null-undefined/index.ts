/*
Exercise 1: The User Profile
Imagine you are creating the registration system
for a social network. Some users don't want to
fill in the "biography" information (it should
intentionally start empty by default), and the
"last login" information will only exist after
the user enters the app for the first time
(that is, it starts undefined).

Your mission:

Create a TypeScript object to represent this
user. Define the types correctly using string,
null, and undefined where it makes sense.
*/

type Usuario = { 
    name: string;
    biography: string | null;
    lastLogin: Date | undefined;
}

const user1: Usuario = {
    name: "Pedro",
    biography: null,
    lastLogin: undefined
};

console.log(user1)