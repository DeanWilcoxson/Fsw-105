//--------------------------Preliminaries----------------------------------------
//Number 1
if (5 >= 3); { console.log("is greater than"); }

//Number2
if ("cat" === 3); { console.log("is the length"); }

//Number3
if ("cat" === "dog") { console.log("the same"); } else if ("cat" !== "dog") { console.log("not the same"); }

//--------------------------Bronze medal-----------------------------------------
//Number1
var person = { name: "Bobby", age: 12, };
if ("Bobby".age === 18) { console.log("allowed"); } else if ("Bobby".age !== 18) { console.log("underage"); }

//Number2
if ("Bobby".charAt(0) === "B") { console.log("allowed"); }

//Number3
if (("Bobby".charAt(0) === "B") && ("Bobby".age === 18)) { console.log("allowed"); }

//--------------------------Silver Medal-----------------------------------------
//Number1
if (1 === 1) { console.log("strict"); } else if (1 == "1") { console.log("loose"); } else console.log("not equal at all");

//Number2
if ((1 <= 2) && (2 === 4)) { console.log("yes"); }

//--------------------------Gold Medal (Extra Credit)----------------------------

//-----Number1 (Replace above If-statements with Ternary's.)

//Preliminary Number1
5 >= 3 ? ($Result = "is greater than") : ($Result = "is not greater than");
console.log($Result);

//Preliminary Number2
//This if-statement reacts differently when in ternary format. Is that correct?
"cat" === 3 ? ($Result = "is the length") : ($Result = "is not the length");
console.log($Result);

//Preliminary Number3
"cat" === "dog" ? ($Result = "the same") : ($Result = "not the same");
console.log($Result);

//Bronze Number1
var person = { name: "Bobby", age: 12 };
"Bobby".age === 18 ? ($Result = "allowed") : ($Result = "underage");
console.log($Result);

//Bronze Number2
"Bobby".charAt(0) === "B" ? ($Result = "allowed") : ($Result = "Invalid");
console.log($Result);

//Bronze Number3
"Bobby".charAt(0) === "B" && "Bobby".age === 18 ? ($Result = "allowed") : ($Result = "not allowed");
console.log($Result);

//Silver Number1
1 === 1 || 1 == "1" ? $Result = "strict" || "loose" : $Result = "not equal at all";
console.log($Result);

//Silver Number2
1 <= 2 && 2 === 4 ? $Result = "yes" : $Result = "no";
console.log($Result);

//-----Number2 (Write an If-statement that checks to see if "dog" is a string.)

//-----Number3 (Write an If-statement that checks to see if "true" is a boolean.)

//-----Number4 (Write an If-statement that checks to see if a variable has been defined or not.)

//-----Number5 (Write an If-statement asking if "s" greater than 12?)

//-----Number6 (Try it with a few more letters and a few numbers.)

//-----Number7 (Write a Ternary statement that console.logs whether a number is odd or even.)