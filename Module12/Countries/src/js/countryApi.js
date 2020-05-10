import handlebars from './country.hbs';
import handlebarsFull from './country-full.hbs';
import newServices from './country-services';
import { error } from '@pnotify/core/dist/PNotify';
import '../node_modules/@pnotify/core/dist/BrightTheme.css';
const debounce = require('lodash.debounce');
const ul = document.querySelector('.country-list');
const body = document.querySelector('body');
document.querySelector('input').addEventListener('input', debounce(chec, 500));
function chec(e) {
  const searchQuery = e.target.value;
  newServices
    .fetchLi(searchQuery)
    .then(data => {
      let marcup = {
        li: data,
      };
      const readyLi = Build(marcup.li);
      insertLi(readyLi);
      if (document.querySelector('#element1')) {
        document.querySelector('#element1').remove();
      }
      if (data.length > 10) {
        clearList();
        error({
          text: 'To many matches found. Please, enter more specific query!',
          width: '360px',
          sticker: false,
          closer: false,
          icon: false,
          delay: 500,
        });
      }
      if (data.length === 1) {
        const readyFull = BuildFull(marcup.li);
        insertFullLi(readyFull);
      }
    })
    .catch(error => {
      if (document.querySelector('#element1')) {
        document.querySelector('#element1').remove();
      }
      clearList();
    });
}
function insertLi(elements) {
  clearList();
  ul.insertAdjacentHTML('beforeend', elements);
}
function insertFullLi(elements) {
  clearList();
  body.insertAdjacentHTML('beforeend', elements);
}
function clearList() {
  ul.innerHTML = '';
}
function Build(items) {
  return handlebars(items);
}
function BuildFull(items) {
  return handlebarsFull(items);
}
