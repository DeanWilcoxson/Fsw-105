//--------------------------Preliminaries----------------------------------------
//Number 1
if (5 >= 3); { console.log("is greater than"); }

//Number2
if ("cat" === 3); { console.log("is the length"); }

//Number3
if ("cat" === "dog") { console.log("the same"); } else if ("cat" !== "dog") { console.log("not the same"); }

//--------------------------Bronze medal-----------------------------------------
//Number1
var person = { name: "Bobby", age: 12 };
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

//Gold Medal
//Ternary Replacement
//Preliminary Number1
5 >= 3 ? $Result = "is greater than" : $Result = "is not greater than";
console.log($Result);

//Preliminary Number2
"cat" === 3 ? $Result = "is the length" : $Result = "is not the length";
console.log($Result);
//The if-statement above reacts differently when in ternary format. Is that correct?

//Preliminary Number3
"cat" === "dog" ? $Result = "the same": $Result = "not the same";
console.log($Result);

//Bronze Number1
var person = { name: "Bobby", age: 12 };
"Bobby".age === 18 ? $Result = "allowed" : $Result = "underage";
console.log($Result);