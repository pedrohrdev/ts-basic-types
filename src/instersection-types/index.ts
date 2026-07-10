// What's intersection types in TypeScript?
// Intersection types allow you to combine multiple types into one. 
// This means that a value of an intersection type must satisfy all the types it combines. 
// In TypeScript, you can create an intersection type using the '&' operator.

type Person = {
  name: string;
  age: number;
};

type Employee = {
  employeeId: number;
  department: string;
};

// Creating an intersection type that combines Person and Employee
type EmployeePerson = Person & Employee;

const employee1: EmployeePerson = {
  name: "Alice",
  age: 28,
  employeeId: 12345,
  department: "Engineering",
};

console.log(employee1); // Output: { name: 'Alice', age: 28, employeeId: 12345, department: 'Engineering' }