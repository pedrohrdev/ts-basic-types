/*
Create a function named `erroLogin` that takes a message (string) and throws an error.

The function must have a return type of `never`.
*/

function erroLogin(erro: string): never {
    throw new Error(erro)
};

erroLogin('Senha incorreta')