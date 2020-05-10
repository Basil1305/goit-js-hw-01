import './styles/styles.css';
import menuHbs from './templates/menuH.hbs';
import menu from './data/menu.json';

const switchTheme = document.querySelector('.js-switch-input');
const switchThemeBody = document.querySelector('body');
const Js_menu = document.querySelector('.js-menu');

switchTheme.addEventListener('change', chooseTheme);
if (localStorage.getItem('theme') !== 'light') {
  SetDark();
  switchTheme.setAttribute('checked', 'checked');
} else {
  SetLight();
}
function chooseTheme() {
  if (switchThemeBody.classList.contains('dark-theme')) {
    SetLight();
  } else {
    SetDark();
  }
}

function SetLight() {
  switchThemeBody.classList.remove('dark-theme');
  switchThemeBody.classList.add('light-theme');
  localStorage.setItem('theme', 'light');
}
function SetDark() {
  switchThemeBody.classList.remove('light-theme');
  switchThemeBody.classList.add('dark-theme');
  localStorage.setItem('theme', 'dark');
}

BuildMenu(menu);
function BuildMenu(elements) {
  const markup = elements.map(e => menuHbs(e)).join(' ');
  Js_menu.insertAdjacentHTML('beforeend', markup);
}
