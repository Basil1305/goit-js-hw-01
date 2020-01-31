"use strict";

let input;
const numbers = [];
let sum = 0;

do {
  input = prompt("Введите число :");
  if (input === null) {
    for (const number of numbers) {
      sum += Number(number);
    }

    let Tnumber = numbers.join(" + ");
    console.log(Tnumber + " = " + sum);
    break;
  } else {
    numbers.push(input);
  }
} while (true);
