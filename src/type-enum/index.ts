// The Enum type is a special kind of type that
// allows you to define a set of named constants. In
// TypeScript, enums can be defined using the `enum` keyword. Enums
// can be numeric or string-based, and they provide a way to group related values together.

// Here's an example of a numeric enum:
enum Direction {
    Up = 1,
    Down,
    Left,
    Right
}

console.log(Direction.Up); // Output: 1
console.log(Direction.Down); // Output: 2
console.log(Direction.Left); // Output: 3
console.log(Direction.Right); // Output: 4

// Here's an example of a string enum:
enum Color {
    Red = "RED",
    Green = "GREEN",
    Blue = "BLUE"
}

console.log(Color.Red); // Output: "RED"
console.log(Color.Green); // Output: "GREEN"
console.log(Color.Blue); // Output: "BLUE"

// Enums can also be used in switch statements and other control flow structures:

function getDirectionName(direction: Direction): string {
    switch (direction) {
        case Direction.Up:
            return "Up";
        case Direction.Down:
            return "Down";
        case Direction.Left:
            return "Left";
        case Direction.Right:
            return "Right";
        default:
            return "Unknown direction";
    }
}

console.log(getDirectionName(Direction.Left)); // Output: "Left"