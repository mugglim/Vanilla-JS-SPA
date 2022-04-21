import Veact from '@/core/Veact';
import $ from '@/util/dom';
import { Header, PostDetail } from '@/components';
import { Home, About } from '@/pages';
import { Router } from '@/core/Router';

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

        const routeList = [
            {
                path: '/',
                Component: () => new Home('.main-route'),
            },
            {
                path: '/about',
                Component: () => new About('.main-route'),
            },
            {
                path: '/post/:id',
                Component: () => new PostDetail('.main-route'),
            },
        ];

        Router.subscribe(routeList);
        Router.navigateTo('/'); // 등록 후 메인 페이지로 이동
    }
}
