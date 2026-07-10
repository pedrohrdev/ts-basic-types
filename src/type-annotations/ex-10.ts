/*Exercise 10 (Challenge)

Create a function called `createUser`.

It accepts:

`nameUser`
`age`
`isProgrammer`

And returns an object:

{
name,
age,
isProgrammer
}

Everything must be typed. */

function createUser(
    nameUser: string,
    age: number,
    isProgrammer: boolean
): {
    nameUser: String;
    age: number;
    isProgrammer: boolean
} {

    return {
        nameUser,
        age,
        isProgrammer
    }

};

console.log(createUser('Pedro', 16, true))