const colors = [
  "#564e55",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
  "#e87af7",
  "#3290e9",
  "##a5e22f",
  "#068e00",
  "#e6c77b",
  "#32a398"
];

const body = document.querySelector("body");
const start = document.querySelector("#start");
const stop = document.querySelector("#stop");
start.addEventListener("click", changeColor);
stop.addEventListener("click", hardReset);

function hardReset() {
  clearInterval(ColorHech);
  start.classList.remove("true");
}

function changeColor() {
  if (start.classList.contains("true")) {
    return;
  }
  ColorHech = setInterval(switchColor, 600);
  start.classList.add("true");
}

function switchColor() {
  const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  const color = randomIntegerFromInterval(0, colors.length - 1);
  body.style.backgroundColor = null;
  body.style.backgroundColor = `${colors[color]}`;
}
