# Conditional Examples

Both if else and switch are used to determine the program execution flow based on whether or not some conditions have been met.

This is why they are sometimes referred to as flow control statements. They control flow of execution of your code, so that some code can be skipped, while other code can be executed.

At the heart of both flow control structures lies the evaluation of one or more conditions.


Generally, if-else is better suited if there is a binary choice in the condition.

When there are a smaller number of possible outcomes of truthy checks, it's still possible to use an if-else statement, such as:

```
var light = "blue";

if(light == "green") {
    console.log("Drive")
} else if(light == "orange") {
    console.log("Get Ready")
} else if(light == "red") {
    console.log("Don't drive")
} else {
    console.log("Traffic light malfunction")
}
```
