import App from './App';
import { Router } from '@/core/Router';
import { $ } from '@/util/selector';

const handleDomcontentLoaded = () => new App({ $parent: $('#root') });

window.addEventListener('DOMContentLoaded', handleDomcontentLoaded);
window.addEventListener('popstate', Router.handlePopstate);
