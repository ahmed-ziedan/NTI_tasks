let temperature = prompt("enter the temperature now :");

//2. Evaluate Temperature Using Ternary Operator:
let theStatus =
  temperature < 0
    ? "Freezing cold"
    : temperature < 16
    ? "Cold"
    : temperature < 25
    ? "Mild"
    : temperature < 35
    ? "Warm"
    : "Hot";

// 3. Calculate Whether the Temperature is Safe or Dangerous:

let safeOrDangerous =
  temperature >= -5 && temperature <= 40
    ? "Safe temperature"
    : "Dangerous temperature";

// 4. Provide Additional Advice Based on Temperature:

let advice =
  temperature >= 16 && temperature <= 25
    ? "Perfect for outdoor activities!"
    : temperature > 25
    ? "Stay hydrated!"
    : "Stay warm!";

//5. Display the Results:
let finalMessage = `your temperature is ${temperature}c
and status is ${theStatus} so ${advice}`;

console.log(finalMessage);
alert(finalMessage);

let result = document.querySelector("#result");
result.innerHTML = finalMessage;
