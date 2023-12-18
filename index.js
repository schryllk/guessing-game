let answer = Math.floor(Math.random() * 10 + 1);
let guessCounter = 0;

const resultMessage = document.getElementById("result-message");
const guessInput = document.getElementById("guess-block");

document.getElementById("submit-button").onclick = function () {
  let guessValue = guessInput.value.trim();
  if (!guessValue || isNaN(guessValue)) {
    alert("Please enter a valid number.");
    return; // Exit the function if input is invalid
  }

  let guess = parseInt(guessInput.value);
  guessCounter++;

  if (guess === answer) {
    resultMessage.innerHTML = `Good Job! ${answer} is the correct number. It took you ${guessCounter} guesses`;
  } else if (guess < answer) {
    resultMessage.innerHTML = "Too low!";
  } else {
    resultMessage.innerHTML = "Too high!";
  }

  guessInput.value = "";
};

document.getElementById("reset-button").onclick = function () {
  guessCounter = 0;
  resultMessage.innerText = "";
  guessInput.value = "";
  answer = Math.floor(Math.random() * 10 + 1);
};

document
  .querySelector(".hamburger-menu")
  .addEventListener("click", function () {
    document.querySelector(".header-right").classList.toggle("show");
  });
