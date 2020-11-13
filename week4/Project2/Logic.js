var readlineSync = require("readline-sync");

var num1 = readlineSync.questionInt("First Number:");
var num2 = readlineSync.questionInt("Second Number:");
var operation = readlineSync.questionInt("Perform Which Calculation: add, sub, mul, div:");


function add(num1, num2) {
    return (num1 + num2);
}
var addResult = add(100, 100);
console.log(addResult);


function subtract(num1, num2) {
    return (num1 - num2);
}
var subtractResult = subtract(100, 100);
console.log(subtractResult);


function multiply(num1, num2) {
    return (num1 * num2);
}
var multiplyResult = multiply(100, 100);
console.log(multiplyResult);


function divide(num1, num2) {
    return (num1 / num2);
}
var divideResult = divide(100, 100);
console.log(divideResult);