/*
Exercise 2 — Intermediate

Create a type:

type User = {
id: number; 
name: string;
}

Then:

Create an array containing 5 users.
Create a function:
function findUser(id: number): User | undefined

It should search for a user by ID using `.find()`.

When calling:

const user = findUser(10);

check if the user was found before accessing `user.name`. This exercise replicates exactly one of the most common scenarios in TypeScript applications.
*/

type User = {
    nameUser: string;
    id: number;
};

const users: User[] = [
    { nameUser: "Alice", id: 1 },
    { nameUser: "Bob", id: 2 },
    { nameUser: "Charlie", id: 3 },
    { nameUser: "David", id: 4 },
    { nameUser: "Eve", id: 5 }
];

function findUser(id: number): User | undefined {

    return users.find(user => user.id === id);

};

const user = findUser(10);

if (user !== undefined) {
    console.log(`User found: ${user.nameUser}`);
} else {
    console.log("User not found.");
}