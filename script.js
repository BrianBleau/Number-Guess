"use strict";

let random = Math.trunc(Math.random() * 101);
let score = 20;
let highScore = 0;

document.querySelector(".check").addEventListener("click", function () {
  let guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    document.querySelector(".message").textContent = "Please enter a number.";
  } else if (guess === random) {
    document.querySelector(".message").textContent = "Correct Number!";
    document.querySelector(".number").style.width = "60rem";
    document.querySelector(".number").textContent = random;
    document.querySelector("body").style.backgroundColor = "green";
    if (score > highScore) {
      document.querySelector(".highscore").textContent = score;
    }
  } else if (guess > random) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        "Your guess is higher than the number. Try again.";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lose. :(";
    }
  } else if (guess < random) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        "Your guess is lower than the number. Try again.";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lose. :(";
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  random = Math.trunc(Math.random() * 101);
  score = 20;
  document.querySelector(".score").textContent = 20;
  document.querySelector(".message").textContent = "Please enter a number.";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "30rem";
});
