"use strict";

const total = 100;
const ordered = 50;

const summary =
  total >= ordered
    ? "Заказ оформлен, с вами свяжется менеджер"
    : "На складе недостаточно товаров!";
console.log(summary);
