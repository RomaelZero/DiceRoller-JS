// Taditional Dice function
      
function singleRoll(){
    const singleRoll = Math.ceil(Math.random()*6); // The result for a single Dice roll
    return singleRoll;
}

console.log("The putput for a single dice roll is : "+ singleRoll());

// Multiple Roll in Array form as single elements
const outputForDice1 = [];

function multiRollDiceArray(n = 2, m = 6) {
    if (typeof n === 'string') {
        throw new Error("Number of rolls must be a positive integer. You have passed a string.");
    }
    if (isNaN(n) || !Number.isInteger(n)) {
        throw new Error("Number of rolls must be an integer.");
    }
    console.log("Number of times dice will roll is: " + n);

    for (let i = 1; i <= Math.abs(n); i++) {
        outputForDice1.push(Math.ceil(Math.random() * m));
    }

    return outputForDice1;
}

//The output of the rice will be available as single elments of an array. 
//i.e Each element of the array will be the number obtained from rolling the dice
console.log(multiRollDiceArray()); //<<== the function to get diceArray with objects as single elements.





// Multiple Roll in Array form as objects
const outputForDice2 = [];



function multiRollDiceArrayObject(n = 2, m = 6) {
    if (typeof n === 'string') {
        throw new Error("Number of rolls must be a positive integer. You have passed a string.");
    }
    if (isNaN(n) || !Number.isInteger(n)) {
        throw new Error("Number of rolls must be an integer.");
    }
    console.log("Number of times dice will roll is: " + n);

    for (let i = 1; i <= Math.abs(n); i++) {
        outputForDice2.push({
            diceNumber: `${i}`,
            result: Math.ceil(Math.random() * m)
        });
    }

    return outputForDice2;
}

//The output of the rice will be available as single elments of an array. 
//i.e Each element of the array will be the number obtained from rolling the dice
console.log(multiRollDiceArrayObject()); //<<== the function to get diceArray with objects as single elements.



module.exports = {
    singleDiceRoll:singleRoll,
    multiRollAsArray: multiRollDiceArray,
    multiRollAsObject: multiRollDiceArrayObject
};