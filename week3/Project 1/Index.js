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

for (i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
    if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18) {
        console.log("Old Enough");
    } else {
        console.log("Not Old Enough");
    }
}