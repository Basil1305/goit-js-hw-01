"use strict";

const range = document.getElementById("font-size-control");
const spanA = document.querySelector("#text");

range.oninput = function() {
  spanA.style.fontSize = range.value.toString() + "px";
};
