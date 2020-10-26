//--------------------------Preliminaries----------------------------------------
//Number 1
if (5 >= 3); { console.log("is greater than"); }

//Number 2
if ("cat" === 3); { console.log("is the length"); }

//Number 3
if ("cat" === "dog") { console.log("the same"); } else if ("cat" !== "dog") { console.log("not the same"); }

//--------------------------Bronze medal-----------------------------------------
//Number 1
var person = { name: "Bobby", age: 12, };
if ("Bobby".age === 18) { console.log(person.name + " is allowed"); } else if ("Bobby".age !== 18) { console.log(person.name + " is underage"); }

//Number 2
if ("Bobby".charAt(0) === "B") { console.log("allowed"); }

//Number 3
if (("Bobby".charAt(0) === "B") && ("Bobby".age === 18)) { console.log("allowed"); }

//--------------------------Silver Medal-----------------------------------------
//Number 1
if (1 === "1") { console.log("strict"); } else if (1 == "1") { console.log("loose"); } else console.log("not equal at all");

//Number 2
if ((1 <= 2) && (2 === 4)) { console.log("yes"); }

//--------------------------Gold Medal (Extra Credit)----------------------------

//-----Number 1 (Replace above If-statements with Ternary's.)

//Preliminary Number 1
5 >= 3 ? ($Result = "is greater than") : ($Result = "is not greater than");
console.log($Result);

//Preliminary Number 2
//This if-statement reacts differently when in ternary format. Is that correct?
"cat" === 3 ? ($Result = "is the length") : ($Result = "is not the length");
console.log($Result);

//Preliminary Number 3
"cat" === "dog" ? ($Result = "the same") : ($Result = "not the same");
console.log($Result);

//Bronze Number 1
var person = { name: "Bobby", age: 12 };
"Bobby".age === 18 ? ($Result = "allowed") : ($Result = "underage");
console.log($Result);

//Bronze Number 2
"Bobby".charAt(0) === "B" ? ($Result = "allowed") : ($Result = "Invalid");
console.log($Result);

//Bronze Number 3
"Bobby".charAt(0) === "B" && "Bobby".age === 18 ? ($Result = "allowed") : ($Result = "not allowed");
console.log($Result);

//Silver Number 1
1 === 1 || 1 == "1" ? $Result = "strict" || "loose" : $Result = "not equal at all";
console.log($Result);

//Silver Number 2
1 <= 2 && 2 === 4 ? $Result = "yes" : $Result = "no";
console.log($Result);

//-----Number 2 (Write an If-statement that checks to see if "dog" is a string.)

//-----Number 3 (Write an If-statement that checks to see if "true" is a boolean.)

//-----Number 4 (Write an If-statement that checks to see if a variable has been defined or not.)

//-----Number 5 (Write an If-statement asking if "s" greater than 12?)

//-----Number 6 (Try it with a few more letters and a few numbers.)

//-----Number 7 (Write a Ternary statement that console.logs whether a number is odd or even.)