/*jshint esversion: 6 */
//=======================================================Section A - Use the built-in array method .filter() to solve all of these problems=======================================================
console.log("------Section A-----");

//1) - Given an array of numbers, return a new array that has only the numbers that are 5 or greater.
function fiveAndGreaterOnly(arr) {
    const result = arr.filter(function(num) {
        if (num >= 5) {
            return true;
        }
    });
    return result;
}
console.log(fiveAndGreaterOnly([3, 6, 8, 2]));

//2) - Given an array of numbers, return a new array that only includes the even numbers.
function evensOnly(arr) {
    const result = arr.filter(function(num) {
        if (num % 2 === 0) {
            return true;
        }
    });
    return result;
}
console.log(evensOnly([3, 6, 8, 2]));

//Extra Credit) - Make a filtered list of all the people who are old enough to see The Matrix (17+).
function ofAge(arr) {
    const resultArr = arr.filter(function(person) {
        if (person.age >= 17) {
            return true;
        }
    });
    return resultArr;
}
console.log(ofAge([
    { name: "Angelina Jolie", age: 80 },
    { name: "Eric Jones", age: 2 },
    { name: "Paris Hilton", age: 5 },
    { name: "Kanye West", age: 16 },
    { name: "Bob Ziroll", age: 100 }
]));

//=======================================================Section B. Use the built-in .map() method on arrays to solve all of these problems=======================================================
console.log("------Section B-----");

//1) Make an array of numbers that are doubles of the first array
function doubleNumbers(arr) {
    const dubResult = arr.map(function(num) {
        return num * 2;
    });
    return dubResult;
}
console.log(doubleNumbers([2, 5, 100]));

//2) Take an array of numbers and make them strings
function stringItUp(arr) {
    const stringResult = arr.map(function(num) {
        return num.toString();
    });
    return stringResult;
}
console.log(stringItUp([2, 5, 100]));

//3) Capitalize each of an array of names
function capitalizeNames(arr) {
    const capsResult = arr.map(function(str) {
        return str[0].toUpperCase() + str.slice(1).toLowerCase();
    });
    return capsResult;
}
console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]));

/* //Extra Credit 1) Make an array of strings of the names
function namesOnly(arr) {

}
console.log(namesOnly([
    { name: "Angelina Jolie", age: 80 },
    { name: "Eric Jones", age: 2 },
    { name: "Paris Hilton", age: 5 },
    { name: "Kanye West", age: 16 },
    { name: "Bob Ziroll", age: 100 }
]));

//Extra Credit 2) Make an array of strings of the names saying whether or not they can go to The Matrix
function makeStrings(arr) {

}
console.log(makeStrings([
    { name: "Angelina Jolie", age: 80 },
    { name: "Eric Jones", age: 2 },
    { name: "Paris Hilton", age: 5 },
    { name: "Kanye West", age: 16 },
    { name: "Bob Ziroll", age: 100 }
])); */

//=======================================================Section C. Use the built-in .reduce() method on arrays to solve all of these problems=======================================================
console.log("------Section C-----");

//1) Turn an array of numbers into a total of all the numbers
function total(arr) {
    const arrayTotal = arr.reduce(function(final, num) {
        return final + num;
    });
    return arrayTotal;
}
console.log(total([1, 2, 3]));

//2) Turn an array of numbers into a long string of all the numbers
function stringConcat(arr) {
    const conCatStr = arr.reduce(function(final, num) {
        return final.toString() + num.toString();
    });
    return conCatStr;
}
console.log(stringConcat([1, 2, 3]));

//3) Turn an array of voter objects into a count of how many people voted
function totalVotes(arr) {
    const voted = arr.reduce(function(final, voter) {
        if (voter.voted) {
            final++;
        }
        return final;
    }, 0);
    return voted;
}
var voters = [
    { name: "Bob", age: 30, voted: true },
    { name: "Jake", age: 32, voted: true },
    { name: "Kate", age: 25, voted: false },
    { name: "Sam", age: 20, voted: false },
    { name: "Phil", age: 21, voted: true },
    { name: "Ed", age: 55, voted: true },
    { name: "Tami", age: 54, voted: true },
    { name: "Mary", age: 31, voted: false },
    { name: "Becky", age: 43, voted: false },
    { name: "Joey", age: 41, voted: true },
    { name: "Jeff", age: 30, voted: true },
    { name: "Zack", age: 19, voted: false }
];
console.log(totalVotes(voters));

//Extra Credit 1) Given an array of all your wishlist items, return the total cost of all items
function shoppingSpree(arr) {
    const result = arr.reduce(function(a, b) {
        return a += b.price;
    }, 0);
    return result;
}
var wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 Carat Diamond Ring", price: 45000 },
    { title: "Fancy Hacky Sack", price: 5 },
    { title: "Gold Fidget Spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];
console.log(shoppingSpree(wishlist));

/* //Extra Credit 2) Given an array of arrays, flatten them into a single array
function flatten(arr) {

}
var arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];
console.log(flatten(arrays)); */
//=======================================================Section D. Use the built-in .sort() method on arrays to solve all of these problems=======================================================
console.log("------Section D-----");

//1) Sort an array from smallest number to largest
function leastToGreatest(arr) {
    const leastNumArr = arr.sort(function(a, b) {
        return a - b;
    });
    return leastNumArr;
}
console.log(leastToGreatest([1, 3, 5, 2, 90, 20]));

//2) Sort an array from largest number to smallest
function greatestToLeast(arr) {
    const greatNumArr = arr.sort(function(a, b) {
        return b - a;
    });
    return greatNumArr;
}
console.log(greatestToLeast([1, 3, 5, 2, 90, 20]));

//3) Sort an array from shortest string to longest
function lengthSort(arr) {
    const lengthArr = arr.sort(function(a, b) {
        return a.length - b.length;
    });
    return lengthArr;
}
console.log(lengthSort(["Dog", "Wolf", "By", "Family", "Eaten"]));

/* //Extra Credit) Sort an array alphabetically
function alphabetical(arr) {

}
console.log(alphabetical(["Dog", "Wolf", "By", "Family", "Eaten"])); */