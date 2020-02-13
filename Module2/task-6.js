"use strict";

let input;
const numbers = [];
let total = 0;

do {
    input = prompt('Введите число :');
    if (input !== null) {
        numbers.push(input);
    } else {
        for (const number of numbers) {
            total += Number(number);
        }
    }
} while (input != null);
console.log('Общая сумма чисел равна ' + total);
