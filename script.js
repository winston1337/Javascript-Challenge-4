let myName = "Winston"
function greeting(x) {
    console.log(x, myName)
}
greeting("Hello,", myName)
// EASY: Write a function that takes in an array of numbers and outputs the average of all the numbers.


function average(numbers) {
    let sum = 0;
    for(let i = 0; i < numbers.length; i++) {
        sum +=  numbers[i];
    }
    return sum / numbers.length;
}
const n = [1,2,3,4,5,6];
console.log("first function", average(n))



// MEDIUM: Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand. (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]). You are given a target value to search. If found in the array return its index, otherwise return -1. You may assume no duplicate exists in the array.

function search(arr, val) {
   return arr.indexOf(val)
}
console.log(search([4,5,6,7,0,1,2], 7), search([4,5,6,7,0,1,2], 13))


//HARD: Create two buttons, one that when clicked turns the background of the body red. The other, when clicked, turns the body's background color white. Each of the background colors should be defined as class styles and when the buttons are pushed the body's classList is updated to include the correct class for the background. Create a single function that takes an input className and updates the body's classList to ONLY include that className

document.querySelector("#red").addEventListener("click", function makered () {
    document.body.classList.add("red")
    document.body.classList.remove("white")
})

document.querySelector("#white").addEventListener("click", function makewhite () {
    document.body.classList.add("white")
    document.body.classList.remove("red")
})




//*VERY HARD: You are given coins of different denominations and a total amount of money amount. Write a function to compute the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

function coinChange (coins, amount) {
    const table = new Array(amount + 1).fill(Infinity);
    table[0] = 0;
    
    for (let coin of coins) {
        for (let i = 0; i < table.length; i++) {
            if(coin <= i) {
                let idx = i - coin;
                let potentialAmount = table[idx] + 1;
                table[i] = Math.min(potentialAmount, table[i]);
            }
        }
    }
    return table[table.length - 1] === Infinity ? -1 : table[table.length -1];
}
coinChange([0,0,0], 0)
console.log(coinChange([1,5,6], 11))