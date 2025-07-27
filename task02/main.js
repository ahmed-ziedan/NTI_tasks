// ---- program to evaluate employees ----
// ahmed mohamed ziedan

// Gather Employee Data
let theName = prompt("Enter your name :");
let theAge = prompt("Enter your age :");
let yearsOfExperience = prompt("Enter your years of experience :");
let selfRating = prompt("Rate yourself from 1 to 10 :");
let baseSalary = prompt("enter your base salary:");

// Determine Job Category
let jopCategory;

switch (true) {
  case yearsOfExperience < 2:
    jopCategory = "Junior";
    break;
  case yearsOfExperience <= 5:
    jopCategory = "Mid-Level";
    break;
  case yearsOfExperience < 10:
    jopCategory = "Senior";
    break;
  case yearsOfExperience > 10:
    jopCategory = "Expert";
    break;
  default:
    jopCategory = "UN-RATED";
}

//Check Performance Level

let performanceLevel;

switch (true) {
  case selfRating >= 9:
    performanceLevel = "Excellent";
    break;
  case selfRating > 6:
    performanceLevel = "Good";
    break;
  case selfRating > 4:
    performanceLevel = "Average";
    break;
  case selfRating < 5:
    performanceLevel = "Needs Improvement";
    break;
  default:
    performanceLevel = "UN-RATED";
}

// Salary Calculation
let bouns;

switch (jopCategory) {
  case "Junior":
    bouns = 0.1;
    break;
  case "Mid-Level":
    bouns = 0.15;
    break;
  default:
    bouns = 0.2;
}
let bounsAmount = bouns * Number(baseSalary);
let finalSalary = Number(baseSalary) + bounsAmount;

//Work Shift Time Calculation:

let currentHour = new Date().getHours();
let shift;
if (currentHour > 9 && currentHour < 18) {
  shift = "day shift";
} else {
  shift = "night shift";
}

// ---- output ----

// output In the browser console.
console.log(`Hello ${theName}, you are ${theAge} years old.
with ${yearsOfExperience} years Of Experience
based on years Of Experience Job Category is ${jopCategory}
and your Performance Level is ${performanceLevel}
and your final salary after bouns = ${finalSalary}
and you work in ${shift} because time now is ${new Date().getHours()}`);

// output In an alert box
window.alert(`Hello ${theName}, you are ${theAge} years old.
with ${yearsOfExperience} years Of Experience
based on years Of Experience Job Category is ${jopCategory}
and your Performance Level is ${performanceLevel}
and your final salary after bouns = ${finalSalary}
and you work in ${shift} because time now is ${new Date().getHours()}`);

// output In the HTML page

document.writeln(
  `Hello ${theName}, you are ${theAge} years old, with ${yearsOfExperience} years Of Experience based on years Of Experience Job Category is ${jopCategory} and your Performance Level is ${performanceLevel} and your final salary after bouns = ${finalSalary} and you work in ${shift} because time now is ${new Date().getHours()}`
);
