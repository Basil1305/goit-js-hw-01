"use strict";

const images = [
  {
    url:
      "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat"
  },
  {
    url:
      "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish"
  },
  {
    url:
      "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running"
  }
];

const gallery = document.querySelector("#gallery");
gallery.classList.add("list");

createItemsWithImages(images);

const item = document.querySelectorAll("#gallery > li");
const img = document.querySelectorAll("#gallery > li > img");
img.forEach(elem => elem.classList.add("item-img"));
item.forEach(elem => elem.classList.add("list-item"));

function createItemsWithImages(array) {
  const objectsOfArray = array.map(
    object => `<li><img src = "${object.url}" alt = "${object.alt}"></li>`
  );
  return gallery.insertAdjacentHTML("afterbegin", objectsOfArray.join(" "));
}
