/*
Exercise 1 — Easy

Create a tuple named `student` containing:

Name (string)
Age (number)
Is enrolled (boolean)

Then:

assign values;
print each position using `console.log`.
*/

// Tuple with the pré-values, and the valuyes
let student: [string, boolean, number?] = ["Pedro", true];

// Destructuring just the name and if student is rolled
let [nameStudent, isRolled] = student;

// Showing it in terminal
console.log(nameStudent);
console.log(isRolled);

student[2] = 16;

console.log(student);
