//        ---- Smart User Checker App ----
// Ahmed Mohamed Ziedan
let theName = prompt("Enter your name :");
let birthYear = prompt("Enter your birthYear :");
let userIsStudent = confirm("Are u student ? ");

let currentYear = new Date().getFullYear();

userCurrentAge = currentYear - Number(birthYear);

let Category;
if (userCurrentAge < 13) {
  Category = "Kid";
} else if (userCurrentAge < 17) {
  Category = "Teen";
} else if (userCurrentAge > 17 && userCurrentAge < 59) {
  Category = "Adult";
} else {
  Category = "Senior";
}

// declere advice message
let adviceMessage;

if (userIsStudent) {
  adviceMessage = `Don't forget to study hard!`;
} else {
  adviceMessage = `work hard mann !`;
}

// output In the browser console.
console.log(`Hello ${theName}, you are ${userCurrentAge} years old.
category : ${Category}
${adviceMessage}`);

// output In an alert box
window.alert(`Hello ${theName}, you are ${userCurrentAge} years old.
category : ${Category}
${adviceMessage}`);

// output In the HTML page

document.writeln(
  `Hello ${theName}, you are ${userCurrentAge} years old. category : ${Category},  ${adviceMessage}`
);
