DiceRollerJS: A lightweight JavaScript library for seamless dice rolling in games, simulations, and apps. Easy-to-use and customizable.

How to use it ? 
There are 3 methods available singleDiceRoll,multiRollAsArray and multiRollAsObject.

const { singleDiceRoll, multiRollAsArray and multiRollAsObject } = require("@romaelzero/diceroller-js");


1.) singleDiceRoll when called will give you numbers from 1 to 6, just like a traditional dice.

singleDiceRoll();

expected output : 1,2,3,4,5 or 6. <==(any one of the number)


2.) multiRollAsArray when called by default will give you numbers from 1 to 6 and also simulate 2 dice rolls.

multiRollAsArray();

the output will be in array format, where each element will represent the number obtained from rolling a dice.

expected output : [1,1] or [2,5] or [6,5] and many more possibilities.

Feature_
1) What makes multiRollAsArray() special is you and input the number of times you want the dice to roll.By default this value is set to 2. 
2) You can also determine the maximum number possible on the dice.
By default this value is set to 6.

multiRollAsArray(); <== Calling the method like this will use default   values.

multiRollAsArray(n,m);
n- Number of times Dice will roll.
m- Maximum number possible on dice.


3.) multiRollAsObject method is pretty similar to multiRollAsArray. The difference is in the output. 
multiRollAsObject return an array where each indiviual array is an object. See the example to get a better understanding.

multiRollAsObject();

output: [{
            diceNumber: 1,
            result: 5
          },{
            diceNumber: 2,
            result: 4
        }];

        diceNumber - Is the time the dice has rolled. If 1 then it has  rolled once. If 2 then it has rolled twice and so on.
        result - Is the number we have obtained after a dice roll.

Feature_
1) What makes multiRollAsObject() special is you and input the number of times you want the dice to roll.By default this value is set to 2. 
2) You can also determine the maximum number possible on the dice.
By default this value is set to 6.

multiRollAsObject(); <== Calling the method like this will use default   values.

multiRollAsObject(n,m);
n- Number of times Dice will roll.
m- Maximum number possible on dice.


If you used this package thank you.
