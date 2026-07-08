/*

Exercise 2 — Login

Create a type named:

UserId

It can be:

number
string

Then create a function:

login(id: UserId): void
Rules

If the id is a number, print:

Logging in with numeric ID: 123

If it is a string, print:

Logging in with username: pedro
Test
login(123);
login("pedro");

Expected output:

Logging in with numeric ID: 123
Logging in with username: pedro
Rules
❌ Do not use any
✅ Use a type alias
✅ Use |
✅ Use typeof
✅ The function must return void
⭐ Extra Challenge (highly recommended)

After creating the basic version, modify the function to validate the data.

If it receives:

login("");

it should print:

Username cannot be empty.

If it receives:

login(-10);

it should print:

Numeric ID must be greater than 0.

Otherwise, proceed with the login as usual.

Difficulty: ⭐⭐☆☆☆
*/

type UserId = number | string;

type User = {
    name: string;
    email: string;
    id?: UserId
}

const user1: User = {
    name: "Pedro",
    email: "pedrohrdev@gmail.com",
    id: 67
};

const user2: User = {
    name: "Benjamin",
    email: "benjamingamer962@gmail.com",
}

function login(user: User): void {

    if(typeof(user.id) === 'number') {
        console.log(`Login with numeric ID: ${user.id}`)
    } else {
        console.log(`Login with username: ${user.name}`)
    };

};

login(user1);
login(user2);