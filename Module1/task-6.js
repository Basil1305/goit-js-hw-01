let input;
let userTotal = 0;

do {
   input = prompt(`Введите число`);
   userTotal = userTotal + Number(input);
 } while (input !== null);

 alert(`Общая сумма чисел равна ${userTotal}`);
