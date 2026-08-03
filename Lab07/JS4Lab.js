/* 
   Copyright (c) 2023 Promineo Tech
   Author:  Promineo Tech Academic Team
   Subject:  JavaScript ECMAScript 6 and Intermediate JavaScript
   FE JS4 Lab
*/

/* ----------------------------------------------------- */
// Key Term List:
// let
// const
// var
// declare a variable
// ECMAScript6 (ES6)
// arrow function
// function
// parameter
// argument
// callback
// promise
// string concatentation
// template literal
//

/* ----------------------------------------------------- */
// Please do not alter the existing code unless instructed to do so.
// Read the comments and add your code where it is specified for each question.
/* ----------------------------------------------------- */

/*
 *                                     ~Lunch Date~
 *
 *  Your friend is coming over for lunch. Let's use code to decide what to eat!
 *
 */

/*---------------------------------- Let and Const -------------------------------------*/
console.log(`-------------------------- 
Question 1: Declaring Let and Const variables`)

/*
 * Step 1: Initialize two variables using 'const' and set the value of those variables to 
   what you're having to eat and drink
 * Step 2: Initialize two more variables using 'let' and set one value to your name, and 
   the other to your friends name.
 *
 * ↓ YOUR CODE HERE ↓ */

   const food = "Armenian food";
   let drink = "tea";

   let myName = "Ally";
   let friendsName = "Gabby";

   console.log(food, drink, myName, friendsName);
   
//Question: Name a reason why you would use const instead of let.
//Answer:

/*Const is useful  when we have values that we want to name and not change their value 
(example: pi). Aka if we want to have constant values that don't change. Const values 
can't change, so this prevents developers from accidentally changing them

Their answer: I would use const if I don't want that value to ever be changed. If I want 
it to be immutable.*/

//example:
//if you wanted to change your name:
/* 
const myName = Ally;

myName = Shirby; //you can't do this here, you could only do this if the const was a let:

let myName = Ally;

myName = Shirby;

//now my name is Shirby
*/


/*---------------------------------- Template Literals -------------------------------------*/
console.log(`-------------------------- 
Question 2: Template Literals`)

/*
 * Step 1: Using template literals and the variables we just created,
 *         write a sentence describing what you and your friend are eating & drinking for lunch.
 *
 *
 * ↓ YOUR CODE HERE ↓ */

console.log(`${myName} and her friend ${friendsName} are having ${food} and ${drink} for lunch.`);

//Question: How would the sentence you wrote look if you used string concatenation instead of template 
// literals?
//          console.log() your answer to check
//Answer:
console.log(myName + " and her friend " + friendsName + " are having " + food + " and " + drink + " for lunch.");
// variables and strings
console.log(`-------------------------- 
Question 2a: Oh no`)

/* Oh no! You just remembered your friend is allergic to the drink we prepared!
 *
 * Step 1: In the section below, reassign your drink item to something else. console.log() your drink 
   variable and run your code.
 * Step 2: Make a change to your code in Question 1 to fix the error. Run your code to make sure it's 
   fixed.
 *
 * ↓ YOUR CODE HERE ↓ */
drink = "orange juice"; //changed "const" in question 1 to "let" so I could change the variable from tea to orange juice
console.log(drink);
//Question: Read the error message - in your own words - what does it mean?
//Answer:

/*"TypeError: Assignment to constant variable" means that we can't rename it because we are using the keyword const 
to declare a variable "drink", and const cannot be reassigned*/

/*---------------------------------- Arrow Functions -------------------------------------*/
console.log(`-------------------------- 
Question 3: Arrow Functions`)

/* You and your friend eat together so often that having a new variable for each food/drink
 *     item could get tiring.
 *
 * Let's use functions so we can easily describe what we're eating.
 *
 * Step 1: Using ES6 standards, write a fat arrow function using const called "lunchTime" that
 *         takes in two parameters: foodChoice, and drinkChoice.
 * Step 2: Have the function 'return' the same sentenced you used to describe eating lunch above
 *         but replace the food/drink variables with our newly created parameters.
 * Step 3: Copy the code below, ↓ paste it underneath our new function, and run the code.
 *         console.log(lunchTime('Pizza','Water'))
 * ↓ YOUR CODE HERE ↓ */
const lunchTime = (foodChoice, drinkChoice) => `${myName} and her friend ${friendsName} are having ${foodChoice} and ${drinkChoice} for lunch.`

console.log(lunchTime('Armenian food', 'tea'));
console.log(lunchTime('Pizza','Water'));

//Question: What would your function look like if we were using the old way of creating a function?
//Answer:

/*
function lunchTime(foodChoice, drinkChoice) {
  return Ally + " and her friend " + Gabby + " are having " + drinkChoice + " and eating " + drinkChoice + " for lunch.";
}
console.log(lunchTime('Pizza','Water'));

*/
/*---------------------------------- Callbacks -------------------------------------*/
console.log(`-------------------------- 
Question 4: Callbacks`)

/**
 * You and your friend ALWAYS eat lunch, but it might be a good idea to plan for the next date in advance.
 * Let's use functions and callbacks to describe what we're eating today, and what we want tomorrow.
 *
 * Step 1: Create an ES6 fat arrow function called 'foodForTodayAndTomorrow' that takes 3 parameters: 
   tomorrowsFoodChoice, tomorrowsDrinkChoice, and callbackFunction.
 * Step 2: Have your function return a new string in this format: `${callbackFunction} Tomorrow we want 
   ${tomorrowsFoodChoice} and ${tomorrowsDrinkChoice}.`
 * Step 3: console.log() your new function, foodForTodayAndTomorrow, and pass in lunchTime('newFoodItem', 
   'newDrinkItem') as the argument for the "callbackFunction" parameter.
 *
 * ↓ YOUR CODE HERE ↓ */

const foodForTodayAndTomorrow = (tomorrowsFoodChoice, tomorrowsDrinkChoice, callbackFunction) => `${callbackFunction} Tomorrow we want ${tomorrowsFoodChoice} and ${tomorrowsDrinkChoice}.`

console.log(foodForTodayAndTomorrow('sushi', 'green tea', lunchTime('newFoodItem', 'newDrinkItem')));
console.log(`-----------Finished------------`)
//this question starts at 22:26

//lunchTime is the callback function - because you passed it into the callabck function