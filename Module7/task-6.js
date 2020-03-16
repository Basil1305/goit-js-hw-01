"use strict";
const inputI = document.querySelector("#validation-input");
const requiredAmount = Number(inputI.getAttribute("data-length"));
inputI.onblur = function() {
  if (event.currentTarget.value.length === requiredAmount) {
    if (inputI.classList.contains("invalid")) {
      inputI.classList.remove("invalid");
    }
    inputI.classList.add("valid");
  } else {
    inputI.classList.add("invalid");
  }
};
