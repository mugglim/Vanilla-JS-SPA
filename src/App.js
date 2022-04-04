import Veact from '@/core/Veact';
import $ from '@/util/dom';
import { Header, PostDetail } from '@/components';
import { Home, About } from '@/pages';
import Router from '@/core/Router';

export default class App extends Veact {
    constructor($target, props) {
        super($target, props);
        this.initState({});
    }

    template() {
        return `
            <div class="nav"></div>
            <div class="main-route"></div>
        `;
    }

    didMount() {
        new Header('.nav');
        Router.subscribe({
            path: '/',
            component: () => new Home('.main-route'),
        });
        Router.subscribe({
            path: '/about',
            component: () => new About('.main-route'),
        });
        Router.subscribe({
            path: '/post/:id',
            component: () => new PostDetail('.main-route'),
        });
    }
}
