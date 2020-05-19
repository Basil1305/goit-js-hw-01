import './css/styles.css';
import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';
import listTemplates from './templates/listTemplates.hbs';
import getApiServices from './js/apiService';
const debounce = require('lodash.debounce');
const ul = document.querySelector('.gallery');
const inputText = document.querySelector('input');
const loadMore = document.querySelector('.button-loader');
inputText.addEventListener('input', debounce(searchStart, 500));
loadMore.addEventListener('click', loadMorePlus);

function searchStart(element) {
  const value = element.target.value;
  getApiServices.resetPage();
  getApiServices.searchRequest = value;
  if (value.length >= 1) {
    loadMore.style.visibility = 'visible';
    getApiServices.fetchImg().then(data => {
      const readyDivs = listTemplates(data);
      clearList();
      ul.insertAdjacentHTML('beforeend', readyDivs);
    });
  } else {
    loadMore.style.visibility = 'hidden';
    clearList();
  }
}

function clearList() {
  ul.innerHTML = '';
}

function loadMorePlus() {
  const pageHeight =
    document.documentElement.offsetHeight -
    ul.lastElementChild.clientHeight +
    150;
  getApiServices.fetchImg().then(data => {
    const readyDivs = listTemplates(data);
    ul.insertAdjacentHTML('beforeend', readyDivs);
    window.scrollTo({
      top: pageHeight,
      behavior: 'smooth',
    });
    Toastify({
      text: 'Successfully uploaded',
      duration: 3000,
      destination: 'https://github.com/apvarun/toastify-js',
      newWindow: true,
      close: false,
      gravity: 'top', // `top` or `bottom`
      position: 'right', // `left`, `center` or `right`
      backgroundColor: 'linear-gradient(to right, #00b09b, #96c93d)',
      stopOnFocus: true,
    }).showToast();
  });
}
