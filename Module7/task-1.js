"use strict";

const categories = document.querySelectorAll("#categories > .item");
console.log(`В списке ${categories.length} категории.`);
const h2 = document.querySelectorAll("h2");
const items = document.querySelectorAll(".item > ul");

for (let i = 0; i < categories.length; i++) {
  console.log(`Категория: ` + h2[i].textContent);
  console.log(`Количество элементов: ` + items[i].childElementCount);
}
