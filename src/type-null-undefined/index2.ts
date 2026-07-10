// Case 2 - undefined
// undefined represents the absence of a value, typically when a variable is declared but not initialized.

const users = [
    "Pedro",
    "João",
    "Lucas"
];

const userA = users.find(user => user === "Maria");

console.log(userA);

// Here will be printed undefined because the user "Maria" does not exist in the array.