"use strict";

//  variables
let again = document.querySelector(".btn--again");
let number = document.querySelector(".number");
let insert = document.querySelector(".insert");
let instruction = document.querySelector(".instruction");
let score = document.querySelector(".score");
let highscore = document.querySelector(".highscore");
let check = document.querySelector(".check");
let correctNumber = Math.trunc(Math.random() * 21);

let scoreValue = document.querySelector(".score--value");
let highscoreValue = document.querySelector(".highscore--value");

check.addEventListener("click", function (e) {
  e.preventDefault();
  // if the inserted number is correct
  if (+insert.value === correctNumber) {
    number.textContent = correctNumber;
    document.body.style.backgroundColor = "#0c0";
    highscoreValue.textContent =
      +scoreValue.textContent > +highscoreValue.textContent
        ? +scoreValue.textContent
        : +highscoreValue.textContent;
    instruction.textContent = "🎉 Correct Number!";
  }
  // if the inserted number is incorrect
  else if (+insert.value !== correctNumber && +scoreValue.textContent > 0) {
    instruction.textContent =
      +insert.value > correctNumber ? "📈 Too high!" : "📉 Too low!";
    scoreValue.textContent = +scoreValue.textContent - 1;
    +scoreValue.textContent === 0
      ? (instruction.textContent = "💥 You lost the game!")
      : "";
  }
  console.log(correctNumber);
});
// playing again
again.addEventListener("click", function (e) {
  e.preventDefault();
  document.body.style.backgroundColor = "#222";
  number.textContent = "?";
  correctNumber = Math.trunc(Math.random() * 21);
  console.log(correctNumber);
  instruction.textContent = "Start guessing ...";
  insert.value = "";
  scoreValue.textContent = "20";
});
