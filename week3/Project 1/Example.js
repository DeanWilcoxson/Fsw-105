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