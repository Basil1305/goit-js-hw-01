"use strict";

const input = document.querySelector("#name-input");
const span = document.querySelector("#name-output");

input.addEventListener("keyup", function(e) {
  if (event.currentTarget.value !== "") {
    span.textContent = e.target.value;
  } else {
    span.textContent = "незнакомец";
  }
});
