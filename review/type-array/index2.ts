// Type Array

// Array of numbers: 
const ages: number[] = [14, 35, 72];

console.log(ages);

// Array of string:
const names: string[] = ["asd", 'sdrq34e', `asdasd`];
console.log(names);

type User = {
    name: string;
    age: number
}

const users: User[] = [
    {
    name: "Pedroi",
    age: 15        
    }
];

console.log(users)