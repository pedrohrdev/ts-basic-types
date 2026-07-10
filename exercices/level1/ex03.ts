/*
Exercise 3 — Type Assertions

You received a value from the backend as `unknown`:

let data: unknown = {
id: 1,
name: "Pedro",
active: true,
};

Without using `any`, do the following:

Create a `User` type with:
`id: number`
`name: string`
`active: boolean`
Use a type assertion to treat `data` as `User`.
Log to the console:
User: Pedro (ID: 1) - Active: true
Rules
❌ Do not use `any`.
✅ Use `type`.
✅ Use `as`.
✅ Explicit typing where it makes sense.
*/

let data: unknown = {
    id: 1,
    name: "Pedro",
    active: true
}

type User = {
    id: number;
    name: string;
    active: boolean
};

let user: User = data as User;

console.log(`${user.name} (ID: ${user.id} - Active: ${user.active})`)