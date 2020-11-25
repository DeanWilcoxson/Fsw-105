/* jshint esversion: 6 */
const readline = require("readline-sync");
const name1 = readline.question("\n I am the Entity, What is your name unfortunate one?: ");
let lifePoint = true;
let gotKey = false;
console.log("\n \t What kind of a name is " + name1 + "?? Hahahah");
while (lifePoint == true) {
    const choices = readline.keyIn(`Hahaha Which do you prefer TO BE YOUR END ${name1}!? 
        \n \t You Have but three options:
        \n 1.Try your luck in the pit. But Beware, Unknown dangers lurk there, where no light resides. 
        \n 2.Try to open a door. You will need a key for that genius! Good luck finding one!!!
        \n 3.Look for a key. However, I'll never let you escape! I don't get amusement like this very often you Worm!`, { limit: `$<1-3>` });
    if (choices == 1) {
        console.log(`\n \t Hahaha ${name1} You Fool! The pit will consume you, just like it did to ALL the others before you!`);
        lifePoint = false;
        console.log("\n \t Game Over");
    } else if (choices == 2 && gotKey == false) {
        console.log(`\n \t Hahaha ${name1} You Fool! You need a key to unlock a door. Good luck finding it!!!`);
    } else if (choices == 2 && gotKey == true) {
        console.log(`\n \t WHAT! You Unlocked the door?! You actually found a key? In this needle and a Hay stack situation?? Impossible Noo!!!!
        \n Thanks for playing!!! It was fun!`);
        lifePoint = false;
    } else if (choices == 3 && gotKey == false) {
        console.log("\n \t You Found a Key!!");
        console.log(`\n \t Hey! What are you doing over there, stop looking through my stuff!! You'll Never find that key. I'm a Slob for a reason Hahahaha!`);
        gotKey = true;
    } else if (choices == 3 && gotKey == true) {
        console.log("\n \t Whats that in your hand? Give me that back!");
    }
}