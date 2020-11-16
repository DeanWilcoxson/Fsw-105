/*jshint esversion: 6 */
//=======================================================Section A - Use the built-in array method .filter() to solve all of these problems:
//1) - Given an array of numbers, return a new array that has only the numbers that are 5 or greater.
function fiveAndGreaterOnly(arr) {
    arr.filter(function(num) {
        if (num >= 5) {
            return num;
        }
    });
}
console.log(fiveAndGreaterOnly([3, 6, 8, 2]));
//2) - Given an array of numbers, return a new array that only includes the even numbers.
/* function evensOnly(arr) {

}
console.log(evensOnly([3, 6, 8, 2])); */
//Extra Credit) - Make a filtered list of all the people who are old enough to see The Matrix (17+).
/* function ofAge(arr) {

}
console.log(ofAge([
    { name: "Angelina Jolie", age: 80 },
    { name: "Eric Jones", age: 2 },
    { name: "Paris Hilton", age: 5 },
    { name: "Kanye West", age: 16 },
    { name: "Bob Ziroll", age: 100 }
])); */

//=======================================================Section B. Use the built-in .map() method on arrays to solve all of these problems:
//1) Make an array of numbers that are doubles of the first array
/* function doubleNumbers(arr) {

}
console.log(doubleNumbers([2, 5, 100])); */
//2) Take an array of numbers and make them strings
/* function stringItUp(arr) {

}
console.log(stringItUp([2, 5, 100])); */
//3) Capitalize each of an array of names
/* function capitalizeNames(arr) {

}
console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); */
//Extra Credit 1) Make an array of strings of the names
//Extra Credit 2) Make an array of strings of the names saying whether or not they can go to The Matrix

//=======================================================Section C. Use the built - in .reduce() method on arrays to solve all of these problems:
//1) Turn an array of numbers into a total of all the numbers

//2) Turn an array of numbers into a long string of all those numbers

//3) Turn an array of voter objects into a count of how many people voted

//Extra Credit 1) Given an array of all your wishlist items, return the total cost of all items
//Extra Credit 2) Given an array of arrays, flatten them into a single array

//=======================================================Section D. Use the built-in .sort() method on arrays to solve all of these problems:
//1) Sort an array from smallest number to largest

//2) Sort an array from largest number to smallest

//3) Sort an array from shortest string to longest

//Extra Credit) Sort an array alphabetically