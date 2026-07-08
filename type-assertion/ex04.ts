/*
Exercise 4

Explain, in your own words, the difference between these two snippets:

let x: string = "Pedro";

and

let x = value as string;
*/

// The first one involves a Type Annotation; in other words,
// we are explicitly declaring that the variable
// `x` is of type `string`. This means that
// TypeScript will ensure `x` can only hold
// values ​​of type `string`, and any attempt
// to assign a value of a different type will result in a compilation error.

// The second one is a Type Assertion; essentially, we are telling TypeScript
// to trust us because we know it is a string. However, this can lead
// to runtime errors if the value isn't actually a string, since TS
// starts trusting us and stops checking the type.