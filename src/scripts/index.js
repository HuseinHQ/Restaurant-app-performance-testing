/* eslint-disable no-unused-vars */
import 'regenerator-runtime';
import '../styles/style.css';
import '../styles/responsive.css';
import App from './views/app';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import swRegister from './utils/sw-register';

const START = 6;
const NUMBER_OF_IMAGES = 20;

const app = new App({
  button: document.querySelector('#menu'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
