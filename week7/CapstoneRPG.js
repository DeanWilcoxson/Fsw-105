/* jshint esversion: 6 */
const readline = require("readline-sync");
let healthPoints = 100;
let isAlive = true;
let gutsAttack = Math.floor(Math.random() * 20 + 5);
let weaponOfChoice = "The DragonSlayer, A Massive Demon Slaying Great Sword";

function Item(title, effect) {
    this.title = title;
    this.effect = effect;
}
Item.prototype.displayItems = function() {
    console.log(`${this.title}${this.effect}`);
};

let items = [];
let armor = new Item("Berserker Armor: ", "Gain Attack Power, But Lose Health");
let potion = new Item("Potion: ", "Adds 25 Health");
items.push(armor, potion);

function Demons(name, health, attackPower, isAlive = true) {
    this.name = name;
    this.health = health;
    this.attackPower = attackPower;
    this.isAlive = isAlive;
}

let demons = [];


//Welcome Message
const welcomeName = readline.question(`\n\tWelcome Struggler, \nIt seems you have been freed from the Mortal-Coil! 
Fate has delivered you from Human Inevitability (Death). \nWhat is your Name? So I may address you properly Struggler.\n\n`);
console.log(`\tAhh! ${welcomeName}, the name of a true Hero! You have been transported to a distant land.. in a far off dream.. in which the natural order has no place.
Demons traverse this world, that lies outside of time and space. Your mere presence here is Like a beacon to the damned and all things that lurk in the shadows.
Here you will find NO reprieve, NO rest, NO reservations from the forces that aim to tear you limb from limb. So I say to you this. 
Struggle, Fight, Contend, for that alone is the sword of one whom defies death. ${welcomeName}, you have the makings of a Great-Hero. However,
many that have stood where you stand now, have had the same great makings. Don't be caught off guard for terror lurks around every corner...`);
goBerserk();
//Main Menu
function goBerserk() {
    while (healthPoints > 0) {
        const options = readline.keyIn(`\n\tMenu: \n[1]Wander \t[2]Status \t[3]Items \t[4]Exit\n\n`, { limit: `$<1-4>` });
        if (options == 1) {
            travel();
        } else if (options == 2) {
            console.log(`Name: ${welcomeName} \nHP: ${healthPoints} \nWeapon: ${weaponOfChoice} \nAttack:${gutsAttack}`);
        } else if (options == 3) {
            for (i = 0; i < items.length; i++) {
                items[i].displayItems();
            }
            let useItem = readline.keyIn(`\nWould you like to use an item? \n[1]Yes [2]Not Yet\n\n`, { limit: `$<1-2>` });
            if (useItem == 1) {
                let itemUse = readline.keyIn(`
                \n[1] Healing Potion (Gain 25 Health)
                \n[2] Berserker Armor (Raise Attack, but Lose Health) 
                \n[3] Menu (Return to the Main Menu)\n\n`, { limit: `$<1-3>` });
                if (itemUse == 1) {
                    console.log(`\nYou have Used a potion.`);
                    usePotion();
                } else if (itemUse == 2) {
                    console.log(`\nYou have put on the Berserker Armor.`);
                    useAttackUp();
                } else if (itemUse == 3) {
                    goBerserk();
                }
            } else if (useItem == 2) {
                goBerserk();
            }
        } else if (options == 4) {
            console.log(`\nYou are a pitiful Weakling! You've seen the terror that is the Darkness, and have fled? You have left the rest of humanity vulnerable.`);
            healthPoints = 0;
        }
    }
    if (healthPoints <= 0) {
        isAlive = false;
    }
}



//Item Use 1
function usePotion() {
    for (i = 0; i < items.length; i++) {
        if (items[i] != potion) {
            console.log("You have already used your Potion");
        } else if (items[i] == potion) {
            healthPoints += 25;
            items.shift(potion);
            console.log(`\nYou Have Gained 25 HP. Your new HP is: ${healthPoints}`);
            console.log(`The potion was removed from your Items`);
        }
    }
}
//Item Use 2
function useAttackUp() {
    for (i = 0; i < items.length; i++) {
        if (items[i] != armor) {
            console.log("You are already wearing your armor!");
        } else if (items[i] == armor) {
            gutsAttack += 10;
            healthPoints -= 20;
            items.shift(armor);
            console.log(`\nYou Have gained Attack Power From your Berserker Armor. But You have Lost Health.`);
            console.log(`Your new attack power is: ${gutsAttack}`);
            console.log(`Your Health has been lowered by 20. It is now: ${healthPoints}`);
            console.log(`The armor was removed from your Items (You're wearing it!)`);
        }
    }

}

//Walk
function travel() {
    let enemySpawnChance = Math.floor(Math.random());
    if (enemySpawnChance > 0.70) {
        console.log(`\nThis place is a Wasteland`);
        goBerserk();
    } else if (enemySpawnChance < 0.70) {
        console.log("\nA Demon has noticed you. It's on your trail.");
        impendingThreat();
    } else(
        console.log("You can see nothing for miles.")
    );
}
//Enemy chance to appear
function impendingThreat() {
    console.log("There are only two choices. Draw First blood, or.. try to make a break for it and hope that it cant fly.");
    let options = readline.keyIn(`\n\tMenu:\n[1] Struggle and Fight the Demon \t[2] Run\n\n`, { limit: `$<1-2>` });
    if (options == 1) {
        console.log(`\nYou lunge toward the Demon for a preemptive strike! Hyahhhh!!!!`);
        demonSpawn();
    } else if (options == 2) {
        let chanceToFlee = Math.random();
        if (chanceToFlee > 0.5) {
            console.log("You kick in a sewer grate that is nearby, and escape down the tunnel.");
            goBerserk();
        } else if (chanceToFlee < 0.5) {
            console.log("\nTrying to flee??? Weakling!");
            demonSpawn();
        }
    }
}
//Which enemy Function to run
function demonSpawn() {
    let demon = Math.random();
    if (demon < 0.2) {
        console.log("\tGrunbeld, The Great Flame Dragon Has Appeared");
        grunbeld();
    } else if ((demon > 0.2) && (demon < 0.4)) {
        console.log("\tNosferatu Zodd, The Immortal Has Appeared");
        zodd();
    } else if ((demon > 0.4) && (demon < 0.6)) {
        console.log("\tBeelzebub, Lord of the Flies Has Appeared");
        beelzebub();
    } else if ((demon > 0.6) && (demon < 0.8)) {
        console.log("\tGanon, The Calamity Has Appeared");
        ganon();
    } else if ((demon > 0.8) && (demon < 0.9)) {
        console.log("\tVlad Tepes, Dracula Has Appeared");
        dracula();
    } else if (demon > 0.9) {
        console.log("\tGriffith, King of Longing Has Appeared");
        griffith();
    }
}

function block() {
    enemyAttack = Math.floor(Math.random() * 5 - 5);
    healthPoints -= -enemyAttack;
}

//Enemy Function 1
let grunbeldDemon = new Demons("Grunbeld, The Great Flame Dragon", `${grunbeldsHealth}`, `${grunbeldsAttack}`);
demons.push(grunbeldDemon);

function grunbeld() {
    grunbeldIsAlive = true;
    let grunbeldsHealth = 40;
    let grunbeldsAttack = Math.floor(Math.random() * 5 + 5);
    console.log(`\nI serve the King of Longing, Now, Know your place sacrifice! And DIE!!`);
    while ((grunbeldsHealth > 0) && (healthPoints > 0)) {
        let options = readline.keyIn(`\n[1] Attack [2] Block [3] Items\n\n`, { limit: `$<1-3>` });
        if (options == 1) {
            grunbeldsHealth -= gutsAttack;
            healthPoints -= grunbeldsAttack;
            console.log(`\tYou Have dealt ${gutsAttack} damage to Grunbeld!`);
            console.log(`Grunbeld dealt ${grunbeldsAttack} damage to ${welcomeName}!`);
            console.log(`\tYour Health is now ${healthPoints}`);
            console.log(`Grunbelds Health is now ${grunbeldsHealth}`);
        } else if (options == 2) {
            block();
            console.log("\nYou Blocked the attack, but took chip Damage");
            console.log(`\nYour Health is now ${healthPoints}`);
        } else if (options == 3) {
            for (i = 0; i < items.length; i++) {
                items[i].displayItems();
            }
            let useItem = readline.keyIn(`\nWould you like to use an item? \n[1]Yes [2]No\n\n`, { limit: `$<1-2>` });
            if (useItem == 1) {
                let itemUse = readline.keyIn(`
                \n[1] Healing Potion (Gain 25 Health)
                \n[2] Berserker Armor (Raise Attack Up, but lose Health)\n\n`, { limit: `$<1-2>` });
                if (itemUse == 1) {
                    console.log(`\nYou have Used a potion.`);
                    usePotion();
                    grunbeld();
                } else if (itemUse == 2) {
                    console.log(`\nYou have put on the Berserker Armor.`);
                    useAttackUp();
                    grunbeld();
                }
            }
        }
        if (grunbeldsHealth <= 0) {
            grunbeldIsAlive = false;
            demons.pop(grunbeldDemon);
            console.log("\nUghhh! NO!! How could you defeat me..");
            goBerserk();
        } else if (healthPoints <= 0) {
            isAlive = false;
        }
    }
}

//Enemy Function 2
function zodd() {
    zoddIsAlive = true;
    let zoddsHealth = 75;
    let zoddsAttack = Math.floor(Math.random() * 5 + 10);
    while ((zoddsHealth > 0) && (healthPoints > 0)) {
        let options = readline.keyIn(`\n[1] Attack [2] Block [3] Items\n\n`, { limit: `$<1-3>` });
        console.log(`\nAmazing! I found someone to do battle with! You cannot flee! You must do battle with me!`);
        if (options == 1) {
            zoddsHealth -= gutsAttack;
            healthPoints -= zoddsAttack;
            console.log(`\nYou Have dealt ${gutsAttack} damage to Zodd!`);
            console.log(`Zodd dealt ${zoddsAttack} damage to ${welcomeName}!`);
            console.log(`\nYour Health is now ${healthPoints}.`);
            console.log(`Zodd Health is now ${zoddsHealth}.`);
        } else if (options == 2) {
            console.log("\nYou blocked my attack successfully, Well done.");
            console.log("\nIn the past 50 years, not a single warrior has been capable of defending themselves from my attack, Except you.");
        } else if (options == 3) {
            console.log(`Items: ${loot}`);
            let useItem = readline.keyIn(`\nWould you like to use an item? \n[1]Yes [2]No\n\n`, { limit: `$<1-2>` });
            if (useItem == 1) {
                let itemUse = readline.keyIn(`
                \n[1] Healing Potion (Gain 25 Health)
                \n[2] Berserker Armor (Raise Attack Up, but lose Health)\n\n`, { limit: `$<1-2>` });
                if (itemUse == 1) {
                    console.log(`\nYou have Used a potion.`);
                    usePotion();
                } else if (itemUse == 2) {
                    console.log(`\nYou have put on the Berserker Armor.`);
                    useAttackUp();
                }
            }
        }
        if (zoddsHealth <= 0) {
            console.log("\nUghh!!! Throughout my 300 years of slaughtering, You are the first one who has wounded me like this!!!");
            console.log("\nHahaha! Mortal, You bear the brand of the sacrificial offering. There is no need for me to kill you, for you will surely meet your end Soon!");
            console.log("\nNosferatu Zodd flew off.");
            zoddIsAlive = false;
            goBerserk();
        } else if (healthPoints <= 0) {
            console.log("\nWhat are you doing? Giving Up? Is this the limit of your strength? I suppose you have done admirably for a human, but if you cannot fight anymore I will tear you limb from limb!!");
            isAlive = false;
        }
    }
}

//Enemy Function 3
function griffith() {
    griffithIsAlive = true;
    let griffithsHealth = 100;
    let griffithsAttack = Math.floor(Math.random() * 20 + 2);
    console.log(`\nIt Seems you're still struggling to survive? Not for much longer!`);
    while ((griffithsHealth > 0) && (healthPoints > 0)) {
        let options = readline.keyIn(`\n[1] Attack \n[2] Block\n\n`, { limit: `$<1-2>` });
        if (options == 1) {
            griffithsHealth -= gutsAttack;
            healthPoints -= griffithsAttack;
            console.log(`\nYou Have dealt ${gutsAttack} damage to Griffith!`);
            console.log(`Griffith dealt ${griffithsAttack} damage to ${welcomeName}!`);
            console.log(`\nYour Health is now ${healthPoints}`);
            console.log(`Griffiths Health is now ${griffithsHealth}`);
        } else if (options == 2) {
            block();
            console.log("\nYou Blocked the attack, but took chip Damage");
            console.log(`\nYour Health is now ${healthPoints}`);
        }
        if (griffithsHealth <= 0) {
            griffithIsAlive = false;
            console.log("\nUghhh! NO!! How could you defeat me..");
            goBerserk();
        } else if (healthPoints <= 0) {
            isAlive = false;
        }
    }
}

//Enemy Function 4
function beelzebub() {
    beelzebubIsAlive = true;
    let beelzebubsHealth = 40;
    let beelzebubsAttack = Math.floor(Math.random() * 5 + 5);
    while ((beelzebubsHealth > 0) && (healthPoints > 0)) {
        let options = readline.keyIn(`\n[1] Attack \n[2] Block\n\n`, { limit: `$<1-2>` });
        if (options == 1) {
            beelzebubsHealth -= gutsAttack;
            healthPoints -= beelzebubsAttack;
            console.log(`\nYou Have dealt ${gutsAttack} damage to Beelzebub!`);
            console.log(`Beelzebub dealt ${beelzebubsAttack} damage to ${welcomeName}!`);
            console.log(`\nYour Health is now ${healthPoints}`);
            console.log(`Beelzebubs Health is now ${beelzebubsHealth}`);
        } else if (options == 2) {
            block();
            console.log("\nYou Blocked the attack, but took chip Damage");
            console.log(`\nYour Health is now ${healthPoints}`);
        }
        if (beelzebubsHealth <= 0) {
            beelzebubIsAlive = false;
            console.log("\nUghhh! NO!! How could you defeat me..");
            goBerserk();
        } else if (healthPoints <= 0) {
            isAlive = false;
        }
    }
}

//Enemy Function 5
function ganon() {
    ganonIsAlive = true;
    let ganonsHealth = 40;
    let ganonsAttack = Math.floor(Math.random() * 5 + 5);
    console.log(`\nDid you by chance notice how all the monsters frozen it time around here become drawn to you and Awaken?`);
    console.log(`Your hatred and rage has awoken me ${welcomeName}, Thank you! Now Let me feast!!!`);
    while ((ganonsHealth > 0) && (healthPoints > 0)) {
        let options = readline.keyIn(`\n[1] Attack \n[2] Block\n\n`, { limit: `$<1-2>` });
        if (options == 1) {
            ganonsHealth -= gutsAttack;
            healthPoints -= ganonsAttack;
            console.log(`\nYou Have dealt ${gutsAttack} damage to Ganon!`);
            console.log(`Ganon dealt ${ganonsAttack} damage to ${welcomeName}!`);
            console.log(`\nYour Health is now ${healthPoints}`);
            console.log(`Ganons Health is now ${ganonsHealth}`);
        } else if (options == 2) {
            block();
            console.log("\nYou Blocked the attack, but took chip Damage");
            console.log(`\nYour Health is now ${healthPoints}`);
        }
        if (ganonsHealth <= 0) {
            ganonIsAlive = false;
            console.log(`\nhahaha I can never Die, I am simply reincarnated in another form. Ill see you again "hero".`);
            goBerserk();
        } else if (healthPoints <= 0) {
            console.log(`He who wields such power as mine would be a fitting King of this world. Don't you think?..`);
            isAlive = false;
        }
    }
}

//Enemy Function 6
function dracula() {
    draculaIsAlive = true;
    let draculasHealth = 40;
    let draculasAttack = Math.floor(Math.random() * 5 + 5);
    while ((draculasHealth > 0) && (healthPoints > 0)) {
        let options = readline.keyIn(`\n[1] Attack \n[2] Block\n\n`, { limit: `$<1-2>` });
        if (options == 1) {
            draculasHealth -= gutsAttack;
            healthPoints -= draculasAttack;
            console.log(`\nYou Have dealt ${gutsAttack} damage to Dracula!`);
            console.log(`\nDracula dealt ${draculasAttack} damage to ${welcomeName}!`);
            console.log(`\nYour Health is now ${healthPoints}`);
            console.log(`\nDraculas Health is now ${draculasHealth}`);
        } else if (options == 2) {
            block();
            console.log("\nYou Blocked the attack, but took chip Damage");
            console.log(`\nYour Health is now ${healthPoints}`);
        }
        if (draculasHealth <= 0) {
            grunbeldIsAlive = false;
            console.log("\nUghhh! NO!! How could you defeat me..");
            goBerserk();
        } else if (healthPoints <= 0) {
            isAlive = false;
        }
    }
}