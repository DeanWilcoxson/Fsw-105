/*jshint esversion: 6 */
/*1) Replace all the vars with let and const. Alter the code however necessary to make sure this continues to work (so the pet's name isn't "John", but instead "spot" is returned). 
You only need to delete var and insert let and const. John is the pet owner, and his name should be stored differently than the other names.*/
console.log("=====Number1=====");
const manName = "John";
const age = 101;

function runForLoops(pets) {
    const petObjects = [];
    for (let i = 0; i < pets.length; i++) {
        let pet = { type: pets[i] };
        if (pets[i] === "cat") {
            name = "fluffy";
        } else { name = "spot"; }
        console.log("pet name: ", name);
        pet.name = name;
        petObjects.push(pet);
    }
    console.log("Man Name: ", manName);
    return petObjects;
}
runForLoops(["cat", "dog"]);

/*2) Re-write this .map() using an arrow function:
Be aware that if JavaScript sees a { directly after the => it will think it's starting a function, and not starting an object, so the : will be an unexpected symbol. */
console.log("=====Number2=====");
const carrots = ["bright orange", "ripe", "rotten"];

function mapVegetables(arr) {
    return arr.map(function(carrot) {
        return { type: "carrot", name: carrot };
    });
}

/*3) Re-write this .filter() using an arrow function:*/
console.log("=====Number3=====");
const people = [{
        name: "Princess Peach",
        friendly: false
    },
    {
        name: "Luigi",
        friendly: true
    },
    {
        name: "Luigi",
        friendly: true
    },

    {
        name: "Luigi",
        friendly: true
    }
];

/*4) Re-write the following functions to be arrow functions:*/
console.log("=====Number4=====");

function doMathSum(a, b) {
    return a + b;
}
var produceProduct = function(a, b) {
    return a * b;
};
/*5) Write a printString function that takes firstName, lastName, and age as parameters and returns a string like the following:
firstName should default to "Jane", lastName should default to "Doe", age should default to 100*/
console.log("=====Number5=====");

function printString(fName, lName, age) {

}
/*6) Use template literals to build the string from Requirement 5*/
console.log("=====Number6=====");

/*7) Use the shorthand syntax to make the following filter take up one line. Copy and paste the array to test it.*/
console.log("=====Number7=====");
const animals = [
    { type: "dog", name: "theodore" },
    { type: "cat", name: "whiskers" },
    { type: "pig", name: "piglette" },
    { type: "dog", name: "sparky" }
];

function filterForDogs(arr) {
    return arr.filter(animal => {
        if (animal.type === "dog") {
            return true;
        } else {
            return false;
        }
    });
}
/*8) Using template literals, write a function that takes location and name parameters and outputs a message formatted like this:*/
console.log("=====Number8=====");