// Create an `ApiResponse` type with "success",
// "error", and "loading" states. Use a `switch`
// statement to handle each case, and in the
// `default` case, perform an exhaustive check
// using `never`, as you studied previously. 

type ApiResponse = "success" | "error" | "loading";

function handleApiResponse(response: ApiResponse): void {

    switch(response) {
        case "success":
            console.log("API call was successful.");
            break;

        case "error":
            console.log("There was an error with the API call.");
            break;

        case "loading":
            console.log("API call is currently loading.");
            break;

        default:
            let exhaustiveCheck: never = response;
            return exhaustiveCheck; // This line ensures that all
            // cases are handled and will cause a compile-time
            // error if a new response type is added without updating this function.
    }    
}

handleApiResponse("success"); // Output: API call was successful.
handleApiResponse("error");   // Output: There was an error with the API call.
handleApiResponse("loading"); // Output: API call is currently loading.