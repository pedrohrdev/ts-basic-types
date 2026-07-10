// Exercise 2 — Real-world

// Complete the function using an exhaustive check.

type Role =
    | { type: "admin" }
    | { type: "user" }
    | { type: "guest" };

function getPermission(role: Role) {
    switch (role.type) {
        case "admin":
            return "Full access";

        case "user":
            return "Limited access";

        case "guest":
            return "Read only";

        default:
            let _exhaustiveCheck: never = role;
            return _exhaustiveCheck;
            // This code ahead will never be reached, but it ensures that
            // all possible cases of the Role type are handled. If a new
            // role is added in the future, TypeScript will throw an error
            // here, reminding you to handle the new case.
    }
}

// Use never correctly in the default case. This is one of the most valuable patterns to learn because it helps catch missing cases at compile time.