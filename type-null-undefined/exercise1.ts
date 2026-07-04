/*
Exercise 1 — Easy

Create a type:

type Employee = ...

with:

name (required)
salary (optional)
department (required)

Then:

Create 3 employees.
At least one of them should not have a salary.
Iterate through the array and print:
Pedro - Salary: Not informed
Lucas - Salary: 4500

Use undefined to handle the case of the missing salary.
*/

type Employee = {
    nameEmployee: string;
    salary?: number;
    department: string;
};

const employees: Employee[] = [
    { nameEmployee: "Pedro", department: "Sales" },
    { nameEmployee: "Lucas", salary: 4500, department: "Marketing" },
    { nameEmployee: "João", salary: 3000, department: "HR" }
];

for(const employee of employees) {

    const salaryInfo = employee.salary !== undefined ? employee.salary : "Not informed";

    console.log(`${employee.nameEmployee} - Salary: ${salaryInfo}`);

};

