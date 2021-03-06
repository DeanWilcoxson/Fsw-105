console.log("-----------------Preliminaries-----------------");
//Number 1: (Write an if statement that prints 'is greater than' if 5 is greater than 3)
console.log("Number 1:");
if (5 > 3) {
    console.log("is greater than");
} else console.log("is not greater than");

//Number 2: (Write an if statement that prints "is the length" if the length of "cat" is 3)
console.log("Number 2:");
if ("cat".length == 3) {
    console.log("is the length");
} else console.log("is not the length");

//Number 3: (Write an if/else statement that checks if "cat" is equal to "dog" and prints, "not the same" when they are not equal.)
console.log("Number 3:");
if ("cat" === "dog") {
    console.log("the same");
} else if ("cat" !== "dog") {
    console.log("not the same");
}

console.log("----------------Bronze medal-------------------");
//Number 1: (Using the below object, Write an if statement that prints <theNameOfThePersonInObject> is allowed to go to the movie if they are old enough (18 or older), and the opposite if they are not older than 18.)
console.log("Number 1:");
var person = {
    name: "Bobby",
    age: 12
};
if (person.age === 18) {
    console.log(person.name + " " + "is allowed");
} else if (person.age !== 18) {
    console.log(person.name + " " + "is underage");
}

//Number 2: (Using that same object, only allow them into the movie if their name starts with \"B\".)");
console.log("Number 2:");
if (person.name.charAt(0) === "B") {
    console.log("allowed");
} else console.log("not allowed");

//Number 3: (Using that same object, only allow them into the movie if their name starts with \"B\" and they are older than 18.)
console.log("Number 3:");
if (person.name.charAt(0) === "B" && person.age === 18) {
    console.log("allowed");
} else console.log("not allowed");

console.log("----------------Silver Medal-------------------");
//Number 1: (Write an if/else if/else statement that prints "strict" if 1 strictly equals "1", prints "loose" or "abstract" if 1 equals "1" without type checking, and prints "not equal at all" if it doesn't print the other stuff.)
console.log("Number 1:");
if (1 === "1") {
    console.log("strict");
} else if (1 == "1") {
    console.log("loose");
} else console.log("not equal at all");

//Number 2: (Write an if statement that prints "yes" if 1 is less than or equal to 2 AND (&&) 2 is equal to 4.)
console.log("Number 2:");
if (1 <= 2 && 2 === 4) {
    console.log("yes");
} else console.log("no");

console.log("----------------Gold Medal---------------------");
//Number 1: (Replace above If-statements with Ternary's.)
console.log("-----Gold Number 1: Ternary Replacement");
console.log("Preliminary Number 1:");
5 >= 3 ? ($Result = "is greater than") : ($Result = "is not greater than");
console.log($Result);

console.log("Preliminary Number 2:");
"cat".length == 3 ? ($Result = "is the length") : ($Result = "is not the length");
console.log($Result);

console.log("Preliminary Number 3:");
"cat" === "dog" ? ($Result = "the same") : ($Result = "not the same");
console.log($Result);

console.log("Bronze Number 1:");
var person = {
    name: "Bobby",
    age: 12
};
person.age === 18 ? ($Result = "allowed") : ($Result = "underage");
console.log($Result);

console.log("Bronze Number 2:");
person.name.charAt(0) === "B" ? ($Result = "allowed") : ($Result = "Invalid");
console.log($Result);

console.log("Bronze Number 3:");
person.name.charAt(0) === "B" && "Bobby".age === 18 ?
    ($Result = "allowed") :
    ($Result = "not allowed");
console.log($Result);

console.log("Silver Number 1:");
1 === 1 || 1 == "1" ?
    ($Result = "strict" || "loose") :
    ($Result = "not equal at all");
console.log($Result);

console.log("Silver Number 2:");
1 <= 2 && 2 === 4 ? ($Result = "yes") : ($Result = "no");
console.log($Result);

//-----Number 2: (Write an If-statement that checks to see if "dog" is a string.)
console.log("-----Gold Number 2:");
var animal = "dog";
if (animal === "dog") {
    console.log(typeof(animal));
}

//-----Number 3: (Write an If-statement that checks to see if "true" is a boolean.)
console.log("-----Gold Number 3:");
var boolean = true;
var falsey = 0;
if (boolean !== falsey) {
    console.log(typeof(true));
} else console.log(falsey);