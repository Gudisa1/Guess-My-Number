"use strict";
let btn = document.querySelector(".btn");
let display = document.querySelector(".enter");
let btnAgain = document.querySelector(".btn-again");

let number = [Math.ceil(Math.random() * 100)];

btn.addEventListener("click", function () {
  let input = document.querySelector(".input").value;
  if (input == number) {
    display.innerHTML = `You guessed it right ,Your number was ${number}`;
    display.style.color = "green";
  } else if (input < number && input > 1) {
    display.innerHTML = `you Guessed it to low `;
  } else if (input > number) {
    display.innerHTML = `You guessed it to high `;
  } else if (input < 1) {
    display.innerHTML = `higher it has to be between 1 and 100`;
  } else if (isNaN(input)) {
    display.innerHTML = "that is not a number";
  } else {
    display.innerHTML = "low it has to be between 1 and 100";
  }
});
btnAgain.addEventListener("click", function () {
  location.reload();
});
