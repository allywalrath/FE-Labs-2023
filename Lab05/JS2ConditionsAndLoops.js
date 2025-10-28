/* 
   Copyright (c) 2023 Promineo Tech
   Author:  Promineo Tech Academic Team
   Subject:  Conditions and Loops Lab
   FE JS2 Lab
*/

/** Key Terms:
 *  Boolean Operators
 *  Loop
 *   - for
 *   - for of
 *   - while
 *   - do while
 *  
 *  Conditional / Control Flow Statement
 *  "Equal To": == 
 *  "Strictly Equals": ===   
 *  Increment ++
 *  Decrement --
 *  Index
 *  Modulus
*/

/* ----------------------------------------------------- */
// Please do not alter the existing code unless instructed to do so. 
// Read the comments and add your code where it is specified for each question. 
/* ----------------------------------------------------- */

/*-------------------------------------------------------*/

console.log(`--------------------------
Question 1: Driving the speed limit.. ? \n`);

/**
 * Step 1: Create two variables: speedLimit and mySpeed
 * Step 2: Set their values to numbers between 1 and 100.
 * 
 * Step 3: Conditionals:
 *             a. Using a conditional, determine if mySpeed is greater than the speedLimit
 *             b. If true, print "Slow Down! Mom is mad!" to the console
 *             c. If mySpeed is equal to the speedLimit, print "Everyone is happy!" to the console
 *             d. If mySpeed is less than the speedLimit, print "Speed up! Dad is mad!"
 * 
 * 
 * ↓ YOUR CODE HERE ↓ */
//something's wrong with this but I'm not sure what:
var speedLimit = 45;
var mySpeed = 47;

if (mySpeed > speedLimit) { //is my speed greater than the speed limit? is 45 greater than 47?
   console.log("Slow Down! Mom is mad!")
}

if (mySpeed == speedLimit) {
   console.log("Everyone is happy!")
}

if (mySpeed < speedLimit) {
   console.log("Speed up! Dad is mad!")
}


/*-------------------------------------------------------*/

console.log(`--------------------------
Question 2: Is it time to wake up for work? \n`);

/**
 * Step 1: Create two variables, alarmSet and weekDay
 * Step 2: Set them to a boolean value
 * 
 * Step 3: Create a conditional... // if (true) {do thing} 
 *         to do something if the alarm is or isnt set & it is or isnt a week day. 
 *
 *         a. If alarm is set and it is a week day print "Sound Alarm! Time for work!" to the console
 *         b. Otherwise, print "I can sleep in!" to the console.
 * 
 * ↓ YOUR CODE HERE ↓ */

var alarmSet = true; //is my alarm set? true
var weekDay = false; //put "false" because let's say today is not a weekday
if (alarmSet && weekDay) { //if x thing is true, do y thing - so if it's a weekday or not, and set or don't set alarm
   console.log("Sound Alarm! Time for work!")
} else {
      console.log("I can sleep in!")
   }

   //USING "OR" INSTEAD OF "AND":
var alarmSet = true; //is my alarm set? true
var weekDay = false; //put "false" because let's say today is not a weekday
if (alarmSet || weekDay) { /*if set to "or", only one variable has to be set to "true" in order for the
                             console to print the statement "Sound Alarm! Time for work!"*/
   console.log("Sound Alarm! Time for work!")
} else {
      console.log("I can sleep in!")
   }

/*-------------------------------------------------------*/

console.log(`--------------------------
Question 3: Username & Password \n`);

/**
 * Step 1: Create two variables, username and password.
 * Step 2: Create a conditional/control flow statement:
 *         - if the username is "Tommy123" and the password is "12345"
 *	          or the username is "Timmy456" and the password is "6789", 
 *		       print "Admin Login Successful" to the console
 *
 *	        - otherwise, print "Admin Access Denied"
 * 
 * ↓ YOUR CODE HERE ↓ */

 var username = "Tommy123"
 var password = "6789"

 if (username == "Tommy123" && password == "12345" || username == "Timmy456" && password == "6789") {
   console.log("Admin Login Successful")
 } else {
   console.log("Admin Access Denied")
 }

/*-------------------------------------------------------*/

console.log(`--------------------------
Question 4: Student Class \n`);

/**
 * Step 1: Create a variable called studentClass. Don't give it a value yet.
 *         There is a variable called studentGrade. It could be any number from 0-12.
 * 
 * Step 2: Write code that will change the value of studentClass based on studentGrade
 *          - 0-6 will be Elementary
 *          - 7-8 will be Middle
 *          - 9 will be Freshman, 10 Sophomore, 11 Junior, 12 Senior 
 *          
 *         Any other value should return "Error" to the console.
 * 
 * ↓ YOUR CODE HERE ↓ */

/*explanation: if student grade is 0-6, the student class will be "elementary" and so on*/
var studentClass
var studentGrade = 12

if (studentGrade >= 0 && studentGrade <= 6) {
   studentClass = "Elementary"
} else if (studentGrade == 7 || studentGrade == 8) {
   studentClass = "Middle"
} else if (studentGrade == 9) {
   studentClass = "Freshman"
} else if (studentGrade == 10) {
   studentClass = "Sophomore"
} else if (studentGrade == 11) {
   studentClass = "Junior"
} else if (studentGrade == 12) {
   studentClass = "Senior"
} else {
   console.log("Error") //we'll still get an "undefined" console message until we give "studentClass" a value
}

//he talks about "changing this to a switch statement" but then the video ends?

console.log(studentClass)

/*-------------------------------------------------------*/

console.log(`--------------------------
Question 5: Loops! \n`);

/**
 * Step 1: Write a "for loop" that will iterate backwards and print 10 to -10.
 * Step 2: Write a "do/while" loop that will prints 1 through 50.
 * Step 3: Modify the previous "do/while" loop.
 *         Print the iterator if the remainder (% // modulus) is 0 when divisible by 4.
 * 
 * ↓ YOUR CODE HERE ↓ */

//let i = 0 //start place
//i == -10 //stop condition
//i-- //incrementor

   //STEP 1:
   /*for (let i = 10; i >= -10; i--) { //start place; stop condition; incrementor
      console.log(i);   
   } */

   //STEP 2:
   /*let counter = 1

   do {
      console.log(counter)
      counter++ /*we need this counter or 0 will just keep running forever - 
                  the counter++ adds a number to the counter (until it gets to 50) 
                  instead of just looping 0 over and over - making it crash*/
   /*} while (counter <= 50)*/

   //STEP 3:
   /*let counter = 1
   
   do {
      if (counter % 4 == 0) {
         console.log(counter)
      }
      counter++
   } while (counter <= 50)*/

/*-------------------------------------------------------*/

console.log(`--------------------------
Question 6: Debugging an infinite loop! \n`);

/**
 * Step 1: Read through the written code below.
 *         Figure out why it's causing an infinite loop & fix the syntax.
 * Step 2: Uncomment out to test
 * 
 * ↓ YOUR CODE HERE ↓ */
//ORIGINAL CODE:
      //start     //stop  //incrementor
/*for(let i = 11; i > 10; i++) {
   console.log(i);
}*/

//SOLUTION ATTEMPT:
      //start    //stop  //incrementor
/*for(let i = 0; i > 10; i++) { //why does this still cause an infinite loop? 0 not being greater than 10 should stop it
   console.log(i);
}*/

//SOLUTION:
   //start     //stop  //incrementor
for(let i = 0; i < 10; i++) {
   console.log(i);
}
console.log('-----------Finished------------')

//OTHER EXAMPLES:
///////////////////////////////////////
/*NAME CHANGE:
var firstName = "Sam"; //change this name to see what happens - the greeting changes also
if (firstName == "Sam") {
   //Any code here will execute if firstName == "Sam"
   console.log('Hello, Sam!');
} else {
   console.log("Hey, " + firstName + "!")
}*/

///////////////////////////////////////
/*COST OF MILK:
var costOfMilk = 2;
if (costOfMilk < 2) { //if the cost of milk is less than $2
   console.log("We will buy 2 gallons");
} else if (costOfMilk < 3) { //we can put as many "else/ifs" as we want
   console.log("We will buy only 1 gallon");
} else (costOfMilk > 3) {
   console.log("We will buy no milk, it's too expensive");
}
*/

///////////////////////////////////////
/*AGE TO DRIVE
var ageRequiredToDrive = 16;
var currentAge = 14;
var canPersonDrive = currentAge >= ageRequiredToDrive;
console.log(canPersonDrive)
*/
