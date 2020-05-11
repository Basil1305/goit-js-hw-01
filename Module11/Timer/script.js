"use strict";
class Timer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
  }
  start() {
    const expectedDate = this.targetDate.getTime();
    setInterval(() => {
      const currentDate = new Date().getTime();
      const interval = expectedDate - currentDate;
      const days = String(
        Math.floor(interval / (1000 * 60 * 60 * 24))
      ).padStart(2, "0");
      const hours = String(
        Math.floor((interval % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      ).padStart(2, "0");
      const mins = String(
        Math.floor((interval % (1000 * 60 * 60)) / (1000 * 60))
      ).padStart(2, "0");
      const secs = String(Math.floor((interval % (1000 * 60)) / 1000)).padStart(
        2,
        "0"
      );
      document.querySelector(
        `${this.selector} [data-value="days"]`
      ).textContent = days;
      document.querySelector(
        `${this.selector} [data-value="hours"]`
      ).textContent = hours;
      document.querySelector(
        `${this.selector} [data-value="mins"]`
      ).textContent = mins;
      document.querySelector(
        `${this.selector} [data-value="secs"]`
      ).textContent = secs;
    }, 1000);
  }
}

const newTimer = new Timer({
  selector: "#timer-1",
  targetDate: new Date("May 13, 2020"), //birthday
});

const newTimer2 = new Timer({
  selector: "#timer-2",
  targetDate: new Date("May 13, 2021"), //birthday after year
});

newTimer.start();
newTimer2.start();

/*
    старий варінт
*/
// "use strict";
// function init(selector, setdate) {
//   function Time() {
//     const selec = document.getElementById(selector);
//     const days = selec.querySelector("[data-value='days']");
//     const hours = selec.querySelector("[data-value='hours']");
//     const mins = selec.querySelector("[data-value='mins']");
//     const secs = selec.querySelector("[data-value='secs']");
//     const realDay = new Date();
//     let timeA = setdate - realDay;
//     const daysT = Math.floor(timeA / (1000 * 60 * 60 * 24));
//     const hoursT = Math.floor(
//       (timeA % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
//     );
//     const minsT = Math.floor((timeA % (1000 * 60 * 60)) / (1000 * 60));
//     const secsT = Math.floor((timeA % (1000 * 60)) / 1000);

//     days.textContent = pad(daysT);
//     hours.textContent = pad(hoursT);
//     mins.textContent = pad(minsT);
//     secs.textContent = pad(secsT);
//     if (timeA <= 0) {
//       clearInterval(intervsl);
//     }
//   }

//   function pad(e) {
//     return String(e).padStart(2, "0");
//   }

//   const intervsl = setInterval(Time, 1000);
// }
// const setDate = new Date(2020, 4, 13); //birthday
// init("timer-1", setDate);

// const setDate2 = new Date(2021, 4, 13); //birthday after year
// init("timer-2", setDate2);
