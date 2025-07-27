let form = document.getElementById(`mainForm`);

let finishContinar = document.getElementById("displayMessage");
const theCounter = document.getElementById("displayCounter");
const theFinalMessage = document.getElementById("displayFinish");

form.addEventListener(`submit`, function (event) {
  event.preventDefault();

  const theName = document.getElementById("eventName").value;
  const theTime = parseInt(document.getElementById("timeRemaining").value);

  theCountDown(theName, theTime);
  console.log(theName);
  console.log(theTime);

  form.reset();
});

function theCountDown(name, seconds) {
  let theName = name;

  let theSeconds = seconds;

  theFinalMessage.innerText = "";

  finishContinar.style.cssText = `
background-color: #d1f3ff9b;
width: 100%;
hight
border-radius: 10px;
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
margin-top: 25px;
min-height: 50px; 
display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;

    `;
  theCounter.textContent = `COUNTDOWN FOR ${theName} : ${theSeconds} `;

  let timerInterval = setInterval(() => {
    theSeconds--;

    theCounter.textContent = `COUNTDOWN FOR ${theName} : ${theSeconds} `;
    if (theSeconds == 0) {
      clearInterval(timerInterval);
      theCounter.innerText = "";
      theFinalMessage.innerText = `YOUR EVENT IS STARTED 🎉`;
    }
  }, 1000);
}
