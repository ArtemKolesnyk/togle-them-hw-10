import dataMenu from '../data/menu.json';
import createMarkupMenu from '../tamplete/menuItemTpl.hbs';
const menuTplRef = document.querySelector('.js-menu');
menuTplRef.insertAdjacentHTML('beforeend', createMarkupMenu(dataMenu));
