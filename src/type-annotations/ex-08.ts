/*
Exercise 8 - Store

Create an object named `product`.

It has:

`name`
`price`
`inStock`

All with defined types.
*/

const product: {
    nameProduct: string;
    price: number;
    inStock: boolean
} = {

    nameProduct: "Nike Air Jordan",
    price: 67,
    inStock: false

}

if(product.inStock === false) {

    console.log(`${product.nameProduct} isn't avaliable`)

}