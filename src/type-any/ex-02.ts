/*
Exercise 2 - Function using `any`

Create a function named:

printValue(value)

It should accept a parameter of type `any` and simply print the value to the console.

Then, call the function with various values.
*/

function printValue(value: any): any {

    console.log(value);

};

printValue('Hello');
printValue(42);
printValue([2, 5 , 3, 98]);
printValue(false);