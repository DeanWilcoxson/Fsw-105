//Arrays: to use with array methods below
var yummyFruits = ["banana", "apple", "orange", "watermelon"];
var yummyVeggies = ["carrot", "tomato", "pepper", "lettuce"];

function foodFunction() {
    //Number 1 - Remove the last item from the vegetable array.
    console.log("======Number 1======");

    var veggieArr = yummyVeggies.pop();
    console.log(yummyVeggies);

    //Number 2 - Remove the first item from the fruit array.
    console.log("======Number 2======");

    var fruitsArr = yummyFruits.shift();
    console.log(yummyFruits);

    //Number 3 - Find the index of "orange."
    console.log("======Number 3======");

    var orangeIndex = yummyFruits.indexOf("orange");
    console.log(orangeIndex);

    //Number 4 - Add that number to the end of the fruit array.
    console.log("======Number 4======");

    var yummyFruitsPlusOne = yummyFruits.push(orangeIndex);
    console.log(yummyFruits);

    //Number 5 - Use the length property to find the length of the vegetable array.
    console.log("======Number 5======");

    var yummyVeggiesLength = yummyVeggies.length;
    console.log(yummyVeggiesLength);

    //Number 6 - Add that number to the end of the vegetable array.
    console.log("======Number 6======");

    var yummyVeggiesPlusOne = yummyVeggies.push(yummyVeggiesLength);
    console.log(yummyVeggies);

    //Number 7 - Put the two arrays together into one array.Fruit first.Call the new Array "food".
    console.log("======Number 7======");

    var food = yummyFruits.concat(yummyVeggies);
    console.log(food);

    //Number 8 - Remove 2 elements from your new array starting at index 4 with one method.
    console.log("======Number 8======");

    var newFoodsArr = food.splice(4, 2);
    console.log(food);

    //Number 9 - Reverse your array.
    console.log("======Number 9======");

    var reversedFood = food.reverse();
    console.log(reversedFood);

    //Number 10 - Turn the array into a string and return it.
    console.log("======Number10======");

    var foodString = reversedFood.join();
    console.log(foodString);
}
console.log(foodFunction());