//#1 Write a function that accepts two numbers as parameters, and returns the sum.
function sum(num1, num2) {
    return (num1 + num2);
}
var sumResult = sum(100, 100);
console.log(sumResult);

//Write a function that accepts three numbers as parameters, and returns the largest of those numbers.
function whichNumberIsLargest(num1, num2, num3) {
    if ((num1 > num2) && (num1 > num3)) {
        console.log(num1 + " is the Largest Number");
    } else if ((num2 > num1) && (num2 > num3)) {
        console.log(num2 + " is the Largest Number");
    } else if ((num3 > num1) && (num3 > num2)) {
        console.log(num3 + " is the Largest Number");
    }
}
var arrayOfNumbers = whichNumberIsLargest(5, 4, 3);

/*Write a function that accepts one number as a parameter, and returns whether that number is even or odd. 
(Return the string "even" or "odd");*/
function oddOrEven(num1) {
    if (num1 % 2 === 1) {
        console.log("Odd");
    } else if (num1 % 2 === 0) {
        console.log("Even");
    }
}
var myFavoriteNumber = oddOrEven(10);

/*Write a function that accepts a string as a parameter. 
If the length of the string is less than or equal to twenty characters long, return the string concatenated with itself (string + string). 
If the string is more than twenty characters long, return the first half of the string.*/
/* function stringParameter(string) {
    var x;
    if (string.length < 20) {
        x = Math.floor(string.length + string.length);
    } else {
        x = Math.floor(string.length / 2) - 1;
    }
    return string.substring(0, x);
}

var half = stringParameter("HowdyDoodyGalsAndFellas");

console.log(half); */