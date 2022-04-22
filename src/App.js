import { Component } from '@/core/Component';
import { Routes, Router } from '@/core/Router';
import { Header, PostDetail } from '@/components';
import { Home, About } from '@/pages';
import { createElement } from './util/element';

export default class App extends Component {
    constructor({ $parent, props }) {
        super({ $parent, props });
        this.setup({});
    }

    template() {
        return ``;
    }

    didMount() {
        const routes = [
            { path: '/', Component: Home },
            { path: '/about', Component: About },
            { path: '/post/:id', Component: PostDetail },
        ];

        new Routes({ $parent: this.$parent, routes, Header });
        Router.navigateTo('/'); // 등록 후 메인 페이지로 이동
    }
}
