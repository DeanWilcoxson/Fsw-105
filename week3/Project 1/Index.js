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
console.log("=======Numbers 1=======");
//#1 Loop through the array and log to the console "old enough" if they are 18 or older, and "not old enough" if they aren't 18.
for (i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
    if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18) {
        console.log("Old Enough");
    } else {
        console.log("Not Old Enough");
    }
}
console.log("=======Numbers 2=======");
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
var count = 0;
for (var i = 0; i < 101; i++) {
    if (count % 2 == 0) {
        console.log(count + " - even.");
        count++;
    } else if (count % 2 !== 0) {
        console.log(count + " - odd.");
        count++;
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