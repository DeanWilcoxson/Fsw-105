//Readline Sync 
var readlineSync = require("readline-sync");
var num1 = readlineSync.questionInt("First Number:");
var num2 = readlineSync.questionInt("Second Number:");
var operation = readlineSync.question("Perform Which Calculation: add, sub, mul, div:");
//Addition Function
function add(num1, num2) {
    return (num1 + num2);
}
var addResult = add(num1, num2);
//Subtraction Function
function sub(num1, num2) {
    return (num1 - num2);
}
var subtractResult = sub(num1, num2);
//Multiplication Function
function mul(num1, num2) {
    return (num1 * num2);
}
var multiplyResult = mul(num1, num2);
//Division Function
function div(num1, num2) {
    return (num1 / num2);
}
var divideResult = div(num1, num2);
// If/Else Block (Conditions for which function to run)
if (operation === "add") {
    add(num1, num2);
    console.log(num1 + " + " + num2 + " = " + addResult);
} else if (operation === "sub") {
    sub(num1, num2);
    console.log(num1 + " - " + num2 + " = " + subtractResult);
} else if (operation === "mul") {
    mul(num1, num2);
    console.log(num1 + " * " + num2 + " = " + multiplyResult);
} else if (operation === "div") {
    div(num1, num2);
    console.log(num1 + " / " + num2 + " = " + divideResult);
} else {
    console.log("Please enter an accepted operator");
}