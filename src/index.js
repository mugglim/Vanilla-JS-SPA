import App from './App';
import $ from './util/dom';
import Router from '@/core/Router';

const handleDomcontentLoaded = () => {
    new App('#root');
};

window.addEventListener('DOMContentLoaded', handleDomcontentLoaded);
window.addEventListener('popstate', Router.handlePopstate);
