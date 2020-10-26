// Preliminaries
if (5 >= 3); { console.log("is greater than"); }
if ("cat" === 3); { console.log("is the length"); }
if ("cat" === "dog") { console.log("the same"); } else if ("cat" !== "dog") { console.log("not the same"); }

//Bronze medal
var person = { name: "Bobby", age: 12 };
if ("Bobby".age === 18) { console.log("allowed"); } else if ("Bobby".age !== 18) { console.log("underage"); }
if ("Bobby".charAt(0) === "B") { console.log("allowed"); }
if (("Bobby".charAt(0) === "B") && ("Bobby".age === 18)) { console.log("allowed"); }

//Silver Medal
if (1 === 1) { console.log("strict"); } else if (1 == "1") { console.log("loose"); } else console.log("not equal at all");
if ((1 <= 2) && (2 === 4)) { console.log("yes"); }

//Gold Medal
//Ternary Replacement
5 >= 3 ? $Result = "is greater than" : $Result = "is not greater than";
console.log($Result);