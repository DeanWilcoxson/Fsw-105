var readlineSync = require("readline-sync");
var num1 = readlineSync.questionInt("First Number:");
var num2 = readlineSync.questionInt("Second Number:");
var operation = readlineSync.question("Perform Which Calculation: add, sub, mul, div:");

function add(num1, num2) {
    return (num1 + num2);
}
var addResult = add(num1, num2);
console.log(addResult);

function sub(num1, num2) {
    return (num1 - num2);
}
var subtractResult = sub(num1, num2);
console.log(subtractResult);

function mul(num1, num2) {
    return (num1 * num2);
}
var multiplyResult = mul(num1, num2);
console.log(multiplyResult);

function div(num1, num2) {
    return (num1 / num2);
}
var divideResult = div(num1, num2);
console.log(divideResult);
if (operation === add) {
    add(num1, num2);
} else if (operation === sub) {
    sub(num1, num2);
} else if (operation === mul) {
    mul(num1, num2);
} else if (operation === div) {
    div(num1, num2);
} else {
    console.log("Please enter an accepted operator");
}