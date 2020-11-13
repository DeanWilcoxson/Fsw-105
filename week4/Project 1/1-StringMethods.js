/*Function #1 - Make a function that will return any given string into all caps followed
by the same string all lowercase.*/
console.log("=======Function1 Output=======");

function upperAndLower(string) {
    console.log(string.toUpperCase() + " " + string.toLowerCase());
}
var myNylonString = upperAndLower("Hey Everybody! I hope you got this correct!");

/*Function #2 - Make a function that returns a number half the length, and rounded down. 
You'll need to use Math.floor().*/
console.log("=======Function2 Output=======");

function middleIndex(string) {
    console.log(Math.floor(string.length / 2));
}
var middleLetter = middleIndex("num 2");

/*Function #3 - Make a function that uses slice() and the other functions you've 
written to return the first half of the string.*/
console.log("=======Function3 Output=======");

function firstHalf(string) {
    console.log(string.slice(0, string.length / 2));
}
var myNewString = firstHalf("Do you understand these functions?");

/*Function #4 - Make a function that takes a string and returns that string where 
the first half is capitalized, and the second half is lower cased. 
(If the string length is odd, capitalize the shorter of the first half.)*/
console.log("=======Function4 Output=======");

function firstHalfAllCaps(str) {

    var halfPoint = (str.length / 2);
    var fHalf = str.slice(0, halfPoint);
    var sHalf = str.slice(halfPoint);
    var response = fHalf.toUpperCase() + sHalf.toLowerCase();
    console.log(response);
}
var myPhrase = firstHalfAllCaps("Never give up");