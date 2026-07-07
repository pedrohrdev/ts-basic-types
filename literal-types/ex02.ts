// Create a `PaymentMethod` type with
// "cash", "credit", and "pix". Write a function
// that indicates how the payment will be processed.

type PaymentMethod = "cash" | "credit" | "pix";

function processPayment(method: PaymentMethod): void {
    switch(method) {
        
        case "cash":
            console.log("Processing payment with cash.");
            break;

        case "credit":
            console.log("Processing payment with credit card.");
            break;

        case "pix":
            console.log("Processing payment with Pix.");
            break;

        default:
            let exhaustiveCheck: never = method;
            return exhaustiveCheck; // This line ensures that all cases are handled and will cause a compile-time error if a new payment method is added without updating this function.
    }
}

processPayment("cash");    // Output: Processing payment with cash.
processPayment("credit");
// Output: Processing payment with credit card.
processPayment("pix");     // Output: Processing payment with Pix.