"use strict";

const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы"
];

const ingredient = document.querySelector("#ingredients");

for (let i = 0; i < ingredients.length; i++) {
  const li = document.createElement("li");
  ingredient.appendChild(li);
  li.textContent = ingredients[i];
}
