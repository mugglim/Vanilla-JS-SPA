import Veact from '@/core/Veact';
import $ from '@/util/dom';
import { Header } from '@/components';
import { Home, About } from '@/pages';
import Router from '@/core/Router';

export default class extends Veact {
    constructor($target) {
        super($target);
        this.initState({});
    }

    template() {
        return `
            <div class="nav"></div>
            <div class="route"></div>
        `;
    }

    didMount() {
        new Header('.nav');
        Router.subscribe({ path: '/', component: () => new Home('.route') });
        Router.subscribe({
            path: '/about',
            component: () => new About('.route'),
        });
    }
}
