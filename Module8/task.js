import tasks from "./gallery-items.js";

const gallery = document.querySelector(".js-gallery");
for (const task of tasks) {
  const values = Object.values(task);

  const item = document.createElement("li");
  gallery.append(item);
  const zoom = document.createElement("a");
  item.append(zoom);
  const imageOf = document.createElement("img");
  zoom.append(imageOf);

  imageOf.setAttribute("src", `${values[0]}`);
  imageOf.setAttribute("alt", `${values[2]}`);
  imageOf.setAttribute("class", "gallery__image");
  imageOf.setAttribute("data-source", `${values[1]}`);
  item.setAttribute("class", "gallery__item");
  zoom.setAttribute("class", "gallery__link");
  zoom.setAttribute("href", `${values[1]}`);
}

gallery.addEventListener("click", openModal);
const imgLightBox = document.querySelector(".lightbox__image");
const lightbox = document.querySelector(".lightbox");
function openModal(e) {
  const target = e.target;
  e.preventDefault();

  if (target.classList.contains("gallery__image")) {
    const source = target.dataset.source;
    imgLightBox.removeAttribute("src");
    imgLightBox.setAttribute("src", `${source}`);
    lightbox.classList.add("is-open");
    window.addEventListener("keydown", closeImgEsc);
  } else {
    return;
  }
}

const button = document.querySelector(".lightbox__button");

button.addEventListener("click", closeImg);

function closeImg() {
  lightbox.classList.remove("is-open");
  window.removeEventListener("keydown", closeImgEsc);
}

const backdrop = document.querySelector(".lightbox__content");
backdrop.addEventListener("click", closeImgB);

function closeImgB(e) {
  if (e.target !== e.currentTarget) {
    return;
  }
  closeImg();
}
function closeImgEsc(e) {
  if (e.code !== "Escape") {
    return;
  }
  closeImg();
}
