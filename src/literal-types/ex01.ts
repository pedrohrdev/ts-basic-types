// Create a `TrafficLight` type that only
// accepts "red", "yellow", and "green". Write
// a function that takes this type as an
// argument and displays a different message for each color.

type TrafficLight = "red" | "yellow" | "green";

function displayTrafficLightMessage(light: TrafficLight): void {

    switch (light) {

        case "red":
            console.log("Stop! The light is red.");
            break;

        case "yellow":
            console.log("Caution! The light is yellow.");
            break;

        case "green":
            console.log("Go! The light is green.");
            break;

        default:
            console.log("Invalid traffic light color.");

    }

};

displayTrafficLightMessage("red");    // Output: Stop! The light is red.
displayTrafficLightMessage("yellow"); // Output: Caution! The light is yellow.
displayTrafficLightMessage("green");  // Output: Go! The light is green.