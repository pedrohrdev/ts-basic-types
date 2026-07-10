/*
Exercício 1 — Login

Crie um tipo chamado UserId que pode ser:

number
string

Depois:

Crie uma função login(id: UserId).
Se for um número, exiba:
Logging in with numeric ID: 123
Se for uma string, exiba:
Logging in with username: pedro
Exemplo
login(15)

login("pedro")

Objetivo: usar

|
typeof
*/

// Criar o tipo user id
type UserId = number | string;

// criar uma funcao login, q se o id for number, exiba "Logging in with numeric ID: 123"
// e se fopr string, exiba "Logging in with username: pedro"
function login(id: UserId): void {
    if(typeof id === "number") {
        console.log(`Logging in with numeric ID: ${id}`);
    } else {
        console.log(`Logging in with username: ${id}`);
    }
};

login(15); // Output: Logging in with numeric ID: 15
login("pedro"); // Output: Logging in with username: pedro