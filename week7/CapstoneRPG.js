/* jshint esversion: 6 */
const readline = require("readline-sync");
////////////////////////////////////////////////////  Global Variables ////////////////////////////////////////////////////
let items = [];
let demons = [];
let player = new Player(
    readline.question(`\n\tWelcome Struggler, \nIt seems you have been freed from the Mortal-Coil! 
Fate has delivered you from Human Inevitability (Death). \nWhat is your Name? So I may address you properly Struggler.\n\n`),
    100,
    "The DragonSlayer, A Massive Demon Slaying Great Sword",
    Math.floor(Math.random() * 20 + 5),
    true
);

let armor = new Item(
    "Berserker Armor ",
    "(Gain Attack Power, But Lose Health)"
);
let potion = new Item("Potion ", "(Adds 25 Health)");
items.push(potion, armor);
let grunbeldDemon = new Demons(
    "Grunbeld, The Great Flame Dragon",
    50,
    Math.floor(Math.random() * 5 + 5),
    true
);
demons.push(grunbeldDemon);
let zoddDemon = new Demons(
    "Nosferatu Zodd, The Immortal",
    75,
    Math.floor(Math.random() * 5 + 5),
    true
);
demons.push(zoddDemon);
let griffithDemon = new Demons(
    "Griffith, King of Longing",
    100,
    Math.floor(Math.random() * 5 + 5),
    true
);
demons.push(griffithDemon);
let beelzebubDemon = new Demons(
    "Beelzebub, Lord of The Flies",
    50,
    Math.floor(Math.random() * 5 + 5),
    true
);
demons.push(beelzebubDemon);
let ganonDemon = new Demons(
    "Ganon, The Calamity",
    50,
    Math.floor(Math.random() * 5 + 5),
    true
);
demons.push(ganonDemon);
let draculaDemon = new Demons(
    "Vlad Tepes, Dracula",
    50,
    Math.floor(Math.random() * 5 + 5),
    true
);
demons.push(draculaDemon);
//////////////////////////////////////////////////// Constructor Functions & Prototypes ////////////////////////////////////////////////////
function Player(name, health, weaponOfChoice, attackPower, isAlive) {
    this.name = name;
    this.health = health;
    this.weapon = weaponOfChoice;
    this.attackPower = attackPower;
    this.isAlive = isAlive;
}
Player.prototype.displayStatus = function() {
    console.log(player);
};

function Demons(name, health, attackPower, isAlive) {
    this.name = name;
    this.health = health;
    this.attackPower = attackPower;
    this.isAlive = isAlive;
}
Demons.prototype.displayDemons = function() {
    console.log(
        `${this.name} Has Appeared! \nHealth:${this.health} \nAttack:${this.attackPower}`
    );
};
Demons.prototype.displayBounties = function() {
    console.log(demons);
};

function Item(title, effect) {
    this.title = title;
    this.effect = effect;
}
Item.prototype.displayItems = function() {
    console.log(items);
};
//////////////////////////////////////////////////// Main Menu Function And Intro ////////////////////////////////////////////////////
console.log(`\tAhh! ${player.name}, the name of a true Hero! You have been transported to a distant land.. in a far off dream.. in which the natural order has no place.
Demons traverse this world, that lies outside of time and space. Your mere presence here is Like a beacon to the damned and all things that lurk in the shadows.
Here you will find NO reprieve, NO rest, NO reservations from the forces that aim to tear you limb from limb. So I say to you this. 
Struggle, Fight, Contend, for that alone is the sword of one whom defies death. ${player.name}, you have the makings of a Great-Hero. However,
many that have stood where you stand now, have had the same great makings. Don't be caught off guard for terror lurks around every corner...`);
goBerserk();

function goBerserk() {
    while (player.isAlive === true) {
        const options = readline.keyIn(
            `\n\tMenu: \n[1]Wander \t[2]Status \t[3]Items \t[4]Exit \t[5]Enemies\n\n`, {
                limit: `$<1-5>`
            }
        );
        if (options == 1) {
            travel();
        } else if (options == 2) {
            player.displayStatus();
        } else if (options == 3) {
            for (let i = 0; i < items.length; i++) {
                items[i].displayItems();
            }
            let useItem = readline.keyIn(
                `\nWould you like to use an item? \n[1]Yes [2]Not Yet\n\n`, {
                    limit: `$<1-2>`
                }
            );
            for (let item = 0; item < items.length; item++) {
                if (items[item] === potion || items[item] === armor) {
                    if (useItem == 1) {
                        let itemUse = readline.keyIn(
                            `\n[1] Potion \t[2] Armor \t[3] Menu\n\n`, {
                                limit: `$<1-3>`
                            }
                        );
                        if (itemUse == 1) {
                            usePotion();
                        } else if (itemUse == 2) {
                            useAttackUp();
                        } else if (itemUse == 3) {
                            goBerserk();
                        }
                    } else if (useItem == 2) {
                        goBerserk();
                    }
                } else if (items[item] !== potion || items[item] !== armor) {
                    console.log(`No items in the Inventory.`);
                }
            }
        } else if (options == 4) {
            console.log(
                `\nYou are a pitiful Weakling! You've seen the terror that is the Darkness, and have fled? You have left the rest of humanity vulnerable.`
            );
            player.isAlive = false;
        } else if (options == 5) {
            for (let i = 0; i < demons.length; i++) {
                demons[i].displayBounties();
            }
        }
    }
    if (player.health <= 0) {
        player.isAlive = false;
    }
}
//////////////////////////////////////////////////// Sub Menu Functions ////////////////////////////////////////////////////
function usePotion() {
    for (let i = 0; i < items.length; i++) {
        if (items[i] !== potion) {
            console.log("You have already used your Potion");
        } else if (items[i] === potion) {
            player.health += 25;
            items.shift(potion);
            console.log(`\nYou Have Gained 25 HP. Your new HP is: ${player.health}`);
            console.log(`The Potion was removed from your Items`);
        }
    }
}

function useAttackUp() {
    for (let i = 0; i < items.length; i++) {
        if (items[i] !== armor) {
            console.log("You are already wearing your armor!");
        } else if (items[i] === armor) {
            player.attackPower += 10;
            player.health -= 20;
            items.pop(armor);
            console.log(
                `\nYou Have gained Attack Power From your Berserker Armor. But You have Lost Health.`
            );
            console.log(`Your new attack power is: ${player.attackPower}`);
            console.log(
                `Your Health has been lowered by 20. It is now: ${player.health}`
            );
            console.log(
                `${armor.title} was removed from your Items (You're wearing it!)`
            );
        }
    }
}

function travel() {
    let enemySpawnChance = Math.random();
    if (enemySpawnChance <= 0.4) {
        search();
    } else if (enemySpawnChance >= 0.4) {
        console.log("\nA Demon has noticed you. It's on your trail.");
        impendingThreat();
    } else console.log("You can see nothing for miles.");
}

function search() {
    const options = readline.keyIn(
        `It seems safe around here, Search for Items? \n\t[1]Yes \t[2]No\n\n`, {
            limit: `$<1-2>`
        }
    );
    if (options == 1) {
        let searchChance = Math.random();
        if (searchChance <= 0.3) {
            for (let i = 0; i < items.length; i++) {
                if (items[i] !== potion) {
                    items.push(potion);
                    console.log(`You have found a Potion!!!`);
                } else if (items[i] === potion) {
                    console.log("\nA Demon has noticed you. It's on your trail.");
                    impendingThreat();
                }
            }
        } else if (searchChance >= 0.3) {
            console.log("Damn, You found Nothing.");
        }
    } else if (options == 2) {
        demonSpawn();
    }
}

//////////////////////////////////////////////////// Enemy Spawn Chance Functions ////////////////////////////////////////////////////
function impendingThreat() {
    console.log(
        "There are only two choices. Draw First blood, or.. try to make a break for it and hope that it cant fly."
    );
    let options = readline.keyIn(
        `\n\t\n[1] Struggle and Fight the Demon \t[2] Run\n\n`, {
            limit: `$<1-2>`
        }
    );
    if (options == 1) {
        demonSpawn();
        console.log(
            `\nYou lunge toward the Demon for a preemptive strike! Hyahhhh!!!!`
        );
    } else if (options == 2) {
        let chanceToFlee = Math.random();
        if (chanceToFlee >= 0.5) {
            console.log(
                "You kick in a sewer grate that is nearby, and escape down the tunnel."
            );
            goBerserk();
        } else if (chanceToFlee <= 0.5) {
            console.log("\nTrying to flee??? Weakling!");
            demonSpawn();
        }
    }
}

function demonSpawn() {
    for (
        let demon = Math.floor(Math.random()); demon < demons.length; demon++) {
        if (demon <= 0.2) {
            grunbeldDemon.displayDemons();
            grunbeld();
        } else if ((demon > 0.2) && (demon <= 0.35)) {
            zoddDemon.displayDemons();
            zodd();
        } else if ((demon > 0.36) && (demon <= 0.5)) {
            beelzebubDemon.displayDemons();
            beelzebub();
        } else if ((demon > 0.5) && (demon <= 0.7)) {
            ganonDemon.displayDemons();
            ganon();
        } else if ((demon > 0.7) && (demon <= 0.85)) {
            draculaDemon.displayDemons();
            dracula();
        } else if (demons >= 0.85) {
            griffithDemon.displayDemons();
            griffith();
        }
    }
}
//////////////////////////////////////////////////// Battle Functions ////////////////////////////////////////////////////
function block() {
    let enemyAttack = Math.floor(Math.random() * 5 - 5);
    player.health -= -enemyAttack;
}

function grunbeld() {
    while (grunbeldDemon.isAlive === true) {
        console.log(
            `\nI serve the King of Longing. Now, Know your place sacrifice! and DIE!!`
        );
        let options = readline.keyIn(`\n[1] Attack \t[2] Block \t[3] Items\n\n`, {
            limit: `$<1-3>`,
        });
        if (options == 1) {
            grunbeldDemon.health -= player.attackPower;
            player.health -= grunbeldDemon.attackPower;
            console.log(`\nYou Have dealt ${player.attackPower} damage to Grunbeld!`);
            console.log(
                `Grunbeld dealt ${grunbeldDemon.attackPower} damage to ${player.name}!`
            );
            console.log(`\nYour Health is now ${player.health}`);
            console.log(`Grunbelds Health is now ${grunbeldDemon.health}`);
        } else if (options == 2) {
            block();
            console.log("\nYou Blocked the attack, but took chip Damage");
            console.log(`\nYour Health is now ${player.health}`);
        } else if (options == 3) {
            for (let i = 0; i < items.length; i++) {
                items[i].displayItems();
            }
            let useItem = readline.keyIn(
                `\nWould you like to use an item? \n[1] Yes [2] No\n\n `, {
                    limit: `$<1-2>`
                }
            );
            if (useItem == 1) {
                let itemUse = readline.keyIn(`\n[1] Potion \t[2] Armor \n\n`, {
                    limit: `$<1-2>`,
                });
                if (itemUse == 1) {
                    usePotion();
                    grunbeld();
                } else if (itemUse == 2) {
                    useAttackUp();
                    grunbeld();
                }
            }
        }
        if (grunbeldDemon.health <= 0) {
            grunbeldDemon.isAlive = false;
            console.log(
                `${grunbeldDemon.name} Has been checked off the list of demons you are hunting.`
            );
            console.log("\nUghhh! NO!! How could you defeat me..");
            console.log(player);
            console.log(grunbeldDemon);
            goBerserk();
        } else if (player.health <= 0) {
            player.isAlive = false;
        }
    }
}

function zodd() {
    console.log(
        `\nAmazing!I found someone to do battle with!You cannot flee!You must do battle with me!`
    );
    while (zoddDemon.isAlive === true) {
        let options = readline.keyIn(`\n[1] Attack \t[2] Block \t[3] Items\n\n`, {
            limit: `$<1-3>`,
        });
        if (options == 1) {
            zoddDemon.health -= player.attackPower;
            player.health -= zoddDemon.attackPower;
            console.log(`\nYou Have dealt ${player.attackPower} damage to Zodd!`);
            console.log(
                `Zodd dealt ${zoddDemon.attackPower} damage to ${player.name}!`
            );
            console.log(`\nYour Health is now ${player.health}.`);
            console.log(`Zodd Health is now ${zoddDemon.health}.`);
        } else if (options == 2) {
            console.log("\nYou blocked my attack successfully, Well done.");
            console.log(
                "\nIn the past 50 years, not a single warrior has been capable of defending themselves from my attack, Except you."
            );
        } else if (options == 3) {
            for (let i = 0; i < items.length; i++) {
                items[i].displayItems();
                let useItem = readline.keyIn(
                    `\nWould you like to use an item? \n[1] Yes [2] No\n\n `, {
                        limit: `$<1-2>`
                    }
                );
                if (useItem == 1) {
                    let itemUse = readline.keyIn(
                        `\n[1] Healing Potion(Gain 25 Health) \n[2] Berserker Armor(Raise Attack Up, but lose Health) \n\n`, {
                            limit: `$<1-2>`,
                        }
                    );
                    if (itemUse == 1) {
                        usePotion();
                        zodd();
                    } else if (itemUse == 2) {
                        useAttackUp();
                        zodd();
                    }
                }
            }
        }
        if (zoddDemon.health <= 0) {
            zoddDemon.isAlive = false;
            console.log(
                "\nUghh!!! Throughout my 300 years of slaughtering, You are the first one who has wounded me like this!!!"
            );
            console.log(
                "\nHahaha! Mortal, You bear the brand of the sacrificial offering. There is no need for me to kill you, for you will surely meet your end Soon!"
            );
            console.log("\nNosferatu Zodd flew off.");
            console.log(
                `${zoddDemon.name} Has been checked off the list of demons you are hunting.`
            );
            console.log(player);
            console.log(zoddDemon);
            goBerserk();
        } else if (player.health <= 0) {
            console.log(
                `\nWhat are you doing? Giving Up? Is this the limit of your strength? \nI suppose you have done admirably for a human, but if you cannot fight anymore I will tear you limb from limb!!`
            );
            player.isAlive = false;
        }
    }
}

function griffith() {
    console.log(
        `\nIt Seems you're still struggling to survive? Not for much longer!`
    );
    while (griffithDemon.isAlive === true) {
        let options = readline.keyIn(`\n[1] Attack \n[2] Block \n[3] Items\n\n`, {
            limit: `$<1-3>`,
        });
        if (options == 1) {
            griffithDemon.health -= player.attackPower;
            player.health -= griffithDemon.attackPower;
            console.log(`\nYou Have dealt ${player.attackPower} damage to Griffith!`);
            console.log(
                `Griffith dealt ${griffithDemon.attackPower} damage to ${player.name}!`
            );
            console.log(`\nYour Health is now ${player.health}`);
            console.log(`Griffiths Health is now ${griffithDemon.health}`);
        } else if (options == 2) {
            block();
            console.log("\nYou Blocked the attack, but took chip Damage");
            console.log(`\nYour Health is now ${player.health}`);
        } else if (options == 3) {
            for (let i = 0; i < items.length; i++) {
                items[i].displayItems();
                let useItem = readline.keyIn(
                    `\nWould you like to use an item? \n[1] Yes [2] No\n\n `, {
                        limit: `$<1-2>`,
                    }
                );
                if (useItem == 1) {
                    let itemUse = readline.keyIn(
                        `\n[1] Healing Potion(Gain 25 Health) \n[2] Berserker Armor(Raise Attack Up, but lose Health) \n\n`, {
                            limit: `$<1-2>`,
                        }
                    );
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
        }
        if (griffithDemon.health <= 0) {
            griffithDemon.isAlive = false;
            console.log(
                `${griffithDemon.name} Has been checked off the list of demons you are hunting.`
            );
            console.log("\nUghhh! NO!! How could you defeat me..");
            console.log(player);
            console.log(griffithDemon);
            goBerserk();
        } else if (player.health <= 0) {
            player.isAlive = false;
            console.log("You were just a cobblestone After all.");
        }
    }
}

function beelzebub() {
    while (beelzebubDemon.isAlive === true) {
        let options = readline.keyIn(`\n[1] Attack \n[2] Block \n[3] Items\n\n`, {
            limit: `$<1-3>`,
        });
        if (options == 1) {
            beelzebubDemon.health -= player.attackPower;
            player.health -= beelzebubDemon.attackPower;
            console.log(
                `\nYou Have dealt ${player.attackPower} damage to Beelzebub!`
            );
            console.log(
                `Beelzebub dealt ${beelzebubDemon.attackPower} damage to ${player.name}!`
            );
            console.log(`\nYour Health is now ${player.health}`);
            console.log(`Beelzebubs Health is now ${beelzebubDemon.health}`);
        } else if (options == 2) {
            block();
            console.log("\nYou Blocked the attack, but took chip Damage");
            console.log(`\nYour Health is now ${player.health}`);
        } else if (options == 3) {
            for (let i = 0; i < items.length; i++) {
                items[i].displayItems();

                let useItem = readline.keyIn(
                    `\nWould you like to use an item? \n[1] Yes [2] No\n\n `, {
                        limit: `$<1-2>`,
                    }
                );
                if (useItem == 1) {
                    let itemUse = readline.keyIn(
                        `\n[1] Healing Potion(Gain 25 Health) \n[2] Berserker Armor(Raise Attack Up, but lose Health) \n\n`, {
                            limit: `$<1-2>`,
                        }
                    );
                    if (itemUse == 1) {
                        usePotion();
                        grunbeld();
                    } else if (itemUse == 2) {
                        useAttackUp();
                        grunbeld();
                    }
                }
            }
        }
        if (beelzebubDemon.health <= 0) {
            beelzebubDemon.isAlive = false;
            console.log(
                `${beelzebubDemon.name} Has been checked off the list of demons you are hunting.`
            );
            console.log("\nUghhh! NO!! How could you defeat me..");
            console.log(player);
            console.log(beelzebubDemon);
            goBerserk();
        } else if (player.health <= 0) {
            player.isAlive = false;
        }
    }
}

function ganon() {
    console.log(
        `\nDid you by chance notice how all the monsters frozen it time around here become drawn to you and Awaken?`
    );
    console.log(
        `Your hatred and rage has awoken me ${player.name}, Thank you! Now Let me feast!!!`
    );
    while (ganonDemon.isAlive === true) {
        let options = readline.keyIn(`\n[1] Attack \n[2] Block \n[3] Items\n\n`, {
            limit: `$<1-3>`,
        });
        if (options == 1) {
            ganonDemon.health -= player.attackPower;
            player.health -= ganonDemon.attackPower;
            console.log(`\nYou Have dealt ${player.attackPower} damage to Ganon!`);
            console.log(
                `Ganon dealt ${ganonDemon.attackPower} damage to ${player.name}!`
            );
            console.log(`\nYour Health is now ${player.health}`);
            console.log(`Ganons Health is now ${ganonDemon.health}`);
        } else if (options == 2) {
            block();
            console.log("\nYou Blocked the attack, but took chip Damage");
            console.log(`\nYour Health is now ${player.health}`);
        } else if (options == 3) {
            for (let i = 0; i < items.length; i++) {
                items[i].displayItems();

                let useItem = readline.keyIn(
                    `\nWould you like to use an item? \n[1] Yes [2] No\n\n `, {
                        limit: `$<1-2>`,
                    }
                );
                if (useItem == 1) {
                    let itemUse = readline.keyIn(
                        `\n[1] Healing Potion(Gain 25 Health) \n[2] Berserker Armor(Raise Attack Up, but lose Health) \n\n`, {
                            limit: `$<1-2>`,
                        }
                    );
                    if (itemUse == 1) {
                        usePotion();
                        grunbeld();
                    } else if (itemUse == 2) {
                        useAttackUp();
                        grunbeld();
                    }
                }
            }
        }
        if (ganonDemon.health <= 0) {
            ganonDemon.isAlive = false;
            console.log(
                `${ganonDemon.name} Has been checked off the list of demons you are hunting.`
            );
            console.log(player);
            console.log(ganonDemon);
            console.log(
                `\nHaHaHa! I can never Die! I am simply reincarnated in another form. I'll see you again "hero", In another Life.`
            );
            goBerserk();
        } else if (player.health <= 0) {
            console.log(
                `He who wields such power as mine would be a fitting King of this world. Don't you think?..`
            );
            player.isAlive = false;
        }
    }
}

function dracula() {
    while (draculaDemon.isAlive === true) {
        let options = readline.keyIn(`\n[1] Attack \n[2] Block \n[3] Items\n\n`, {
            limit: `$<1-3>`,
        });
        if (options == 1) {
            draculaDemon.health -= player.attackPower;
            player.health -= draculaDemon.attackPower;
            console.log(`\nYou Have dealt ${player.attackPower} damage to Dracula!`);
            console.log(
                `Dracula dealt ${draculaDemon.attackPower} damage to ${player.name}!`
            );
            console.log(`\nYour Health is now ${player.health}`);
            console.log(`Draculas Health is now ${draculaDemon.health}`);
        } else if (options == 2) {
            block();
            console.log("\nYou Blocked the attack, but took chip Damage");
            console.log(`\nYour Health is now ${player.health}`);
        } else if (options == 3) {
            for (let i = 0; i < items.length; i++) {
                items[i].displayItems();

                let useItem = readline.keyIn(
                    `\nWould you like to use an item? \n[1] Yes [2] No\n\n `, {
                        limit: `$<1-2>`,
                    }
                );
                if (useItem == 1) {
                    let itemUse = readline.keyIn(
                        `\n[1] Healing Potion(Gain 25 Health) \n[2] Berserker Armor(Raise Attack Up, but lose Health) \n\n`, {
                            limit: `$<1-2>`,
                        }
                    );
                    if (itemUse == 1) {
                        usePotion();
                        grunbeld();
                    } else if (itemUse == 2) {
                        useAttackUp();
                        grunbeld();
                    }
                }
            }
        }
        if (draculaDemon.health <= 0) {
            draculaDemon.isAlive = false;
            console.log(
                `${draculaDemon.name} Has been checked off the list of demons you are hunting.`
            );
            console.log("\nUghhh! NO!! How could you defeat me..");
            console.log(player);
            console.log(draculaDemon);
            goBerserk();
        } else if (player.health <= 0) {
            player.isAlive = false;
        }
    }
}