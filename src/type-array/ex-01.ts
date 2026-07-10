/*
Exercise 1 — Products

Create an array named `products` containing at least 4 products.

Each product must have:

name
price
stock

Then:

display the array in the console;
add one more product using `push()`.
*/

type Product = {
    name: string, 
    price: number,
    stock: boolean
}

let products: Product[] = [
    {
        name: "Monster mango",
        price: 9.89,
        stock: true
    },

    {
        name: "Snickers",
        price: 4.99,
        stock: false
    },

    {
        name: "Nike Air Jordan",
        price: 498.99,
        stock: true
    },

    {
        name: "GTA VI",
        price: 499.99,
        stock: true 
    }
];

console.log(products);

products.push(
    {
        name: "Mate Erva",
        price: 21.50,
        stock: true
    }
)

console.log(products)