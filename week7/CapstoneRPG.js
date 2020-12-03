/* jshint esversion: 6 */
const readline = require("readline-sync");
const demons = [
    `Grunbeld: The Great Flame Dragon`,
    `Nosferatu Zod: The Immortal`,
    `Femto: Wing of Darkness/ King of Longing`,
    `Beelzebub: Lord of the Lies`,
    `Vlad Tepes: The Impaler`,
    `Ganon: The Calamity`,
];
const loot = [`DragonSlayer: Massive Demon Slaying GreatSword`, `Potion`];
const welcomeName = readline.question(`\n\tWelcome Struggler, 
\nIt seems you have been freed from the Mortal-Coil!
\nFate has delivered you from Human Inevitability(Death).
\nWhat is your Name? So I may address you properly Struggler.\n`);
console.log(`(You have 100 Health)`);
let HealthPoints = 100;
console.log(`\n\t${welcomeName}, it shall be! 
\nYou have been transported to a distant land.. in a far off dream.. in which the natural order has no place.
\nDemons traverse this world, that lies outside of time and space.
\nYour mere presence here is Like a beacon to the damned and all things that lurk in the shadows.
\nHere you will find NO reprieve, NO rest, NO reservations from the forces that aim to tear you limb from limb.
\nSo I say to you this, Struggle, Fight, Contend, for that alone is the sword of one whom defies death. 
\n\t${welcomeName}, you have the makings of a Great-Hero. However,
\nmany that have stood where you stand now, have had the same great makings,
\ndon't be caught off guard for terror lurks around every corner..`);
while (HealthPoints > 0) {
    const options = readline.keyIn(`\n[1] Struggle \t[2] Status \t[3] Seppuku\n`, { limit: `$<1-3>` });
    if (options == 1) {
        console.log(`You Weakling! You have seen the terror that is the Darkness and have fled? Only to leave the rest of humanity vulnerable.`);
        return HealthPoints == 0;
    }
    if (options == 2) {
        console.log(`You Weakling! You have seen the terror that is the Darkness and have fled? Only to leave the rest of humanity vulnerable.`);
        return HealthPoints == 0;
    }
    if (options == 3) {
        console.log(`You Weakling! You have seen the terror that is the Darkness and have fled? Only to leave the rest of humanity vulnerable.`);
        return HealthPoints == 0;
    }
}