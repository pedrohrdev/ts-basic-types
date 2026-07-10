/*
Exercício 2 — Produtos (caso real)

Crie um tipo produto, e um array com 5 produtos

depois percorra o array e para cada produto, se discount for um numero
calcule o preco final e mostre, caso contrario, mostre o preco normal

no final mostre produtos com desconto e produtos sem desconto e a 
soma do valor de todos os descontos 
*/

type Product = {
    name: string;
    price: number;
    discount: number | null;
};

const products: Product[] = [
    { name: "Monster Mango", price: 12, discount: 2 },
    { name: "Monster Original", price: 12, discount: null },
    { name: "Monster White", price: 12, discount: 2 },
    { name: "Monster Pink", price: 12, discount: null },
    { name: "Monster Brazil", price: 12, discount: 2 }
]

// Variavel para no final mostrar a soma de todos os descontos
let discountTotal = 0;

console.log("Produtos com desconto:");

for(const product of products) {

    if(typeof product.discount === "number") {

        discountTotal += product.discount;

        console.log(`Produto: ${product.name}, Preço final: ${product.price - product.discount}, Desconto: ${product.discount}`);

    }
    
};

console.log("Produtos sem desconto:");

for(const product of products) {

    if(product.discount === null) {

        console.log(`Produto: ${product.name}, Preço normal: ${product.price}`);

    }
    
};

console.log(`Soma de todos os descontos: ${discountTotal}`);