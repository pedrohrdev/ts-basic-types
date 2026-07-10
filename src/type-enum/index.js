"use strict";
// The Enum type is a special kind of type that
// allows you to define a set of named constants. In
// TypeScript, enums can be defined using the `enum` keyword. Enums
// can be numeric or string-based, and they provide a way to group related values together.
// Here's an example of a numeric enum:
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
    Direction[Direction["Left"] = 3] = "Left";
    Direction[Direction["Right"] = 4] = "Right";
})(Direction || (Direction = {}));
console.log(Direction.Up); // Output: 1
console.log(Direction.Down); // Output: 2
console.log(Direction.Left); // Output: 3
console.log(Direction.Right); // Output: 4
