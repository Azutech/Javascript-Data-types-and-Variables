/*
 * Programming Quiz: Converting Temperatures
 *
 * The Celsius-to-Fahrenheit formula:
 *
 *    F = C x 1.8 + 32
 *
 * 1. Set the fahrenheit variable to the correct value using the celsius variable and the forumla above
 * 2. Log the fahrenheit variable to the console
 *
 */
 
let celcius = 12
let fahrenheit; 

fahrenheit = celcius * 1.8  + 32
console.log(fahrenheit)



/*
 * Programming Quiz: Favorite Food
 */

let favouriteFood;
 favouriteFood= "Rice"
console.log(favouriteFood);

/*
 * Programming Quiz: String Equality for All
 */

const answer; 
answer = "ALL Strings are CrEaTeD equal" == "ALL Strings are CrEaTeD equal";
console.log(answer);


/*
 * Programming Quiz: All Tied Up
*/

let joke; 
joke= "Why couldn't the shoes go out and play? \n\
They were all \"tied\" up!"

console.log(joke)


/*

Build a string using concatenation by combining the lines from this famous haiku poem by Yosa Buson.
Blowing from the west
Fallen leaves gather
In the east.
 
Each string should be printed on its own line.
Hint: You will need to use special characters to produce the following output. For a refresher, feel free to review the previous Escaping Strings topic in this lesson.

 * Programming Quiz: Yosa Buson
 */


let haiku;
haiku = 
"Blowing from the west \n\
Fallen leaves gather\n\
In the east."

console.log(haiku)


/*
Create a variable called fullName and assign it your full name as a string.
 * Programming Quiz: What's my Name?
 */

var fullName;
fullName ="Emmanuel Onugha"
console.log(fullName)

/*
Create a variable called bill and assign it the result of 10.25 + 3.99 + 7.15 (don't perform the calculation yourself, let JavaScript do it!). Next, create a variable called tip and assign it the result of multiplying bill by a 15% tip rate. Finally, add the bill and tip together and store it into a variable called total.
Print the total to the JavaScript console.

 * Programming Quiz: Out to Dinner
 */

var bill; 
var tip;

bill=10.25 + 3.99 + 7.15 
tip =15% bill 
var total = bill + tip

console.log(total);


/*

Mad Libs is a word game where players have fun substituting words for blanks in a story. For this exercise, use the adjective variables below to fill in the blanks and complete the following message.
"The Intro to JavaScript course is __________. James and Julia are so __________. I cannot wait to work through the rest of this __________ content!"
 
let adjective1 = "amazing";
let adjective2 = "fun";
let adjective3 = "entertaining";
 
Assign the resulting string to a variable called madLib.
 * Programming Quiz: MadLibs
 * 
*/

let adjective1; 
let adjective2; 
let adjective3; 
adjective1= "amazing";
adjective2= "fun";
adjective3 = "entertaining";
let madLib = "The Intro to JavaScript course is " + adjective1 + ". James and Julia are so" + adjective2 + ". I cannot wait to work through the rest of this " + adjective3 +" content!"
 
console.log(madLib);

/*
Declare and assign values to three variables for each part of the sentence that changes (firstName, interest, and hobby).
Use your variables and string concatenation to create your own awesome message and store it in an awesomeMessage variable.
Finally, print your awesome message to the JavaScript console.

 * Programming Quiz: One Awesome Message (2-12)
 */

let firstName; 
let interest; 
let hobby;
firstName = "Emmanuel"
interest = "Javascript"
hobby = "FIFA 22"
let awesomeMessage = "Hi, my name is " + firstName+". I love " + interest +". In my spare time, I like to play " + hobby + "."
console.log(awesomeMessage);



