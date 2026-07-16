/*
Exercise 2: The Safe Waiter
You have a function that receives the name of a
dish. But there's a catch: the customer might
change their mind and not order anything (the order might be null).

If the request is null, the function should return
"No request made". If the dish is ordered, it should
return "Preparing your dish: [DISH NAME]".

Your mission:

Complete the function below by typing the order parameter
and handling the case where it is null so that
TypeScript doesn't complain.
*/

function prepareOrder(dish: string | null) {
    if(dish === null) {
        return "No request made";
    } else {
        return `Preparing your dish: ${dish}`
    };
};

console.log(prepareOrder("Pizza"))
console.log(prepareOrder(null))