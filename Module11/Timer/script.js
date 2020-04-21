"use strict";
function init(selector, setdate) {
  function Time() {
    const selec = document.getElementById(selector);
    const days = selec.querySelector("[data-value='days']");
    const hours = selec.querySelector("[data-value='hours']");
    const mins = selec.querySelector("[data-value='mins']");
    const secs = selec.querySelector("[data-value='secs']");
    const realDay = new Date();
    let timeA = setdate - realDay;
    const daysT = Math.floor(timeA / (1000 * 60 * 60 * 24));
    const hoursT = Math.floor(
      (timeA % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minsT = Math.floor((timeA % (1000 * 60 * 60)) / (1000 * 60));
    const secsT = Math.floor((timeA % (1000 * 60)) / 1000);

    days.textContent = pad(daysT);
    hours.textContent = pad(hoursT);
    mins.textContent = pad(minsT);
    secs.textContent = pad(secsT);
    if (timeA <= 0) {
      clearInterval(intervsl);
    }
  }

  function pad(e) {
    return String(e).padStart(2, "0");
  }

  const intervsl = setInterval(Time, 1000);
}
const setDate = new Date(2020, 4, 13); //birthday
init("timer-1", setDate);

const setDate2 = new Date(2021, 4, 13); //birthday after year
init("timer-2", setDate2);
