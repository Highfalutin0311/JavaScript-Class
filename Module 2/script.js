// Ask the user for their first name
let Fname = prompt("What is your first name?");
 
// Welcome the user
alert("Welcome, " + Fname + "!");
 
// Store the value of Pi
const piValue = 3.1415926;
 
// Ask the user for their favorite number
let myFavNum = Number(prompt("What is your favorite number?"));
 
// Calculate the area of a circle
let myArea = piValue * myFavNum * myFavNum;
 
// Display the information on the webpage
document.getElementById("results").innerHTML =
   "Hello " + Fname + "!<p>" +
   "Your favorite number is " + myFavNum + ".</p>" +
   "<p>The value of Pi is " + piValue + ".</p>" +
   "<p>If your favorite number was the radius of a circle, " +
   "the area would be " + myArea.toFixed(4) + ".</p>";
