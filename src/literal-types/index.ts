// Literal Types represent a specifc value, don't
// a generic type. They are used to create more specific
// types in TypeScript. For example, instead of using a
// generic string type, you can use a literal type to 
// specify that a variable can only have a specific string value.

let role: "admin" | "user" | "guest";

role = "admin"; // valid
role = "user";
// valid
role = "guest"; // valid
// role = "superuser"; // invalid, will cause a TypeScript error

// Literal types can also be used with numbers and booleans
let status: 200 | 404 | 500;

status = 200; // valid
status = 404; // valid
// status = 403; // invalid, will cause a TypeScript error

let isActive: true | false;

isActive = true; // valid
isActive = false; // valid
// isActive = null; // invalid, will cause a TypeScript error

// Literal types can also be used both with union
// types and type aliases to create more complex types.

type UserRole = "admin" | "user" | "guest";

let userRole: UserRole;

userRole = "admin"; // valid
userRole = "user"; // valid
userRole = "guest"; // valid
// userRole = "superuser"; // invalid, will cause a TypeScript error
