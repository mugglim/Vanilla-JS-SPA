import App from './App';
import $ from './util/dom';
import Router from '@/core/Router';

window.addEventListener('DOMContentLoaded', new App('#root'));
window.addEventListener('popstate', Router.handlePopstate);
