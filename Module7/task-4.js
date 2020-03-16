"use strict";

let counter = 0;
const value = document.querySelector("#value");

document.querySelector("#decrement").addEventListener("click", e => {
  counter -= 1;
  value.textContent = counter;
});

document.querySelector("#increment").addEventListener("click", e => {
  counter += 1;
  value.textContent = counter;
});
