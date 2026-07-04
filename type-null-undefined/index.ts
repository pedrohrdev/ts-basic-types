// Type null and undefined are two distinct types in TypeScript
// that represent the absence of a value. ex: 

// Case 1: null
// null represents the intentional absence of any
// object value, while undefined
type User = {
    name: string;
    age?: number;
}

const user: User = {
    name: "Pedro"
}

console.log(user.age); // undefined