/* Example: Loop through the following array and count how many "computers" there are. Log the final count:

*Hint: to accomplish this assignment, we can use an If Statement with a For Loop. If you need a refresher on If Statements,
 please review the "JavaScript Conditionals" video from Week 2.

Solution:*/
var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer", "computer"];
var count = 0;

for (var i = 0; i < officeItems.length; i++) {
    if (officeItems[i] === "computer") {
        count++;
    }
}
console.log(count);



/* # Extra Credit: Imagine you have a button that toggles a light on and off.Loop through the following array of numbers and toggle the button the numbers of times
for each number.The array[2, 3, 2] would toggle the button 7 times.
The light is off to start with.Log to the console whether or not the light is on at the end.*/
console.log("=======Extra Credit=======");
var extraCreditArray = [2, 3, 2];
for (i = 0; i < extraCreditArray.length; i++) {
    if (extraCreditArray[i] % 2 === 1) {
        console.log("The Light is On");
    } else {
        console.log("The Light is Off");
    }
}