//Function 1 - Write a function that accepts two numbers as parameters, and returns the sum.
function sum(num1, num2) {
    return (num1 + num2);
}
var sumResult = sum(100, 100);
console.log(sumResult);

//Function 2 - Write a function that accepts three numbers as parameters, and returns the largest of those numbers.
function whichNumberIsLargest(num1, num2, num3) {
    return (Math.max(num1, num2, num3));
}
var arrayOfNumbers = whichNumberIsLargest(5, 4, 3);
console.log(arrayOfNumbers);


/*Function 3 - Write a function that accepts one number as a parameter, and returns whether that number is even or odd. 
(Return the string "even" or "odd");*/
function oddOrEven(num1) {
    if (num1 % 2 === 1) {
        console.log("Odd");
    } else if (num1 % 2 === 0) {
        console.log("Even");
    }
}
var myFavoriteNumber = oddOrEven(10);

/*Function 4 - Write a function that accepts a string as a parameter. 
If the length of the string is less than or equal to twenty characters long, return the string concatenated with itself (string + string). 
If the string is more than twenty characters long, return the first half of the string.*/
function stringFunction(string) {
    if (string.length <= 20) {
        console.log(string + " " + string);
    } else if (string.length > 20) {
        console.log(string.slice(0, string.length / 2));
    }
}
var randomPhrase = stringFunction("I hope I get it!");
/*Extra Credit Function 1 - Write a function that accepts a number‘ n’ as a parameter.Then print the first‘ n’ Fibonacci numbers and
return their sum.   The first numbers are: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144]
So, if n were 6, the sum of 1 + 1 + 2 + 3 + 5 + 8 would be 20. (Don't hardcode the sequence!)*/


/*Extra Credit Function 2 - Write a function that accepts a string as a parameter.
Return the most frequently occurring letter in that string.(White spaces count as a letter)*/