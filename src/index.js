import App from './App';
import { Router } from '@/core/Router';
import { $ } from '@/util/selector';
import { EventManager } from '@/core/Component';

const handleDomcontentLoaded = () => {
    const $root = $('#root');
    EventManager.init($root);
    new App({ $parent: $root });
};
window.addEventListener('DOMContentLoaded', handleDomcontentLoaded);
window.addEventListener('popstate', Router.handlePopstate);
