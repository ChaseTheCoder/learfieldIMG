/* eslint-disable no-invalid-this */
/* eslint-disable spaced-comment */
// Toggle Mobile Menu
const toggle = document.querySelector('.toggle');
const menu = document.querySelector('.menu');

// eslint-disable-next-line require-jsdoc
function toggleMenu() {
  if (menu.classList.contains('active')) { //if menu has class of active
    menu.classList.remove('active');
    toggle.querySelector('a').innerHTML = '<i class=\'fas fa-bars\'></i>';
  } else { //else if not active
    menu.classList.add('active');
    toggle.querySelector('a').innerHTML = '<i class=\'fas fa-times\'></i>';
  }
}

toggle.addEventListener('click', toggleMenu, false);
// wasn't working, found answeron stackoverflow: add script to bottom of page

// Submenu Accordion
const items = document.querySelectorAll('.item');

// in case of future submenus, able to add here
// eslint-disable-next-line require-jsdoc
function toggleItem() {
  if (this.classList.contains('submenu-active')) {
    this.classList.remove('submenu-active');
  } else if (menu.querySelector('.submenu-active')) {
    menu.querySelector('.submenu').classList.remove('submenu-active');
    this.classList.add('submenu-active');
  } else {
    this.classList.add('submenu-active');
  }
}

for (const item of items) {
  if (item.querySelector('.submenu')) {
    item.addEventListener('click', toggleItem, false);
    item.addEventListener('keypress', toggleItem, false);
  }
}
