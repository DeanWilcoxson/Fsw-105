//Array
var peopleWhoWantToSeeMadMaxFuryRoad = [{
        name: "Mike",
        age: 12,
        gender: "Male"
    },
    {
        name: "Madeline",
        age: 80,
        gender: "Female"
    },
    {
        name: "Cheryl",
        age: 22,
        gender: "Female"
    },
    {
        name: "Sam",
        age: 30,
        gender: "Male"
    },
    {
        name: "Suzy",
        age: 4,
        gender: "Female"
    }
];
console.log("=======Numbers 1 & 2=======");
//#1 Loop through the array and log to the console "old enough" if they are 18 or older, and "not old enough" if they aren't 18.
for (i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
    if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18) {
        //#2 Log to the console a personalized message.
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is Old Enough to watch Mad Max: Fury Road.");
    } else {
        //#2 Log to the console a personalized message.
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is Not Old Enough to Watch Mad Max: Fury Road.");
    }
}
console.log("=======Number 3=======");
//#3 Check to see if the movie goer is a male or female for an even more personalized message.
for (i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
    if ((peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18) && (peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "Male")) {
        console.log("Yay! " + peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is Old Enough to watch Mad Max: Fury Road, Let Him in.");
    } else if ((peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18) && (peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "Female")) {
        console.log("Yay! " + peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is Old Enough to watch Mad Max: Fury Road, Let Her in.");
    } else if ((peopleWhoWantToSeeMadMaxFuryRoad[i].age <= 18) && (peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "Male")) {
        console.log("Dang! " + peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is Not Old Enough to Watch Mad Max: Fury Road, Don't let HIM in.");
    } else if ((peopleWhoWantToSeeMadMaxFuryRoad[i].age <= 18) && (peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "Female")) {
        console.log("Dang! " + peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is Not Old Enough to Watch Mad Max: Fury Road, Don't let HER in.");
    }
}
console.log("=======Number 4=======");
/*#4 Create a for loop that iterates through 101 numbers (from 0 - 100). 
If the current iteration is an Odd number, print "Odd" to the console, otherwise print "Even".*/
var arrayOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100];
for (i = 0; i < arrayOfNumbers.length; i++) {
    if (arrayOfNumbers[i] % 2 == 1) {
        console.log("Odd");
    } else if (arrayOfNumbers[i] % 2 == 0) {
        console.log("Even");
    }
}

/* # Extra Credit: Imagine you have a button that toggles a light on and off.Loop through the following array of numbers and toggle the button the numbers of times
for each number.The array[2, 3, 2] would toggle the button 7 times.
The light is off to start with.Log to the console whether or not the light is on at the end.*/
/* console.log("=======Extra Credit=======");
var extraCreditArray = [2, 3, 2];
for (i = 0; i < extraCreditArray.length; i++) {
    if (extraCreditArray[i] % 2 === 1) {
        console.log("The Light is On");
    } else {
        console.log("The Light is Off");
    }
} */