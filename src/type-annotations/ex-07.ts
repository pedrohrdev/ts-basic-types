/*
Exercise 7 - Average

Create a function named `average`.

It takes three numbers.

It returns the average.
*/

function average(n1: number, n2: number, n3: number): number {

    return ((n1 + n2 + n3) / 3).toFixed(2)

};

console.log(average(6, 7, 3))