// Using a switch statement to output traffic signs to motorists

var light = "violet";

switch(light) {
    case "green":
        console.log("Drive");
        break;
    case "orange":
        console.log("Get Ready");
        break;
    case "red":
        console.log("Don't Drive");
        break;
    default:
        console.log("Traffic light malfunction");
        break;
}