import { Component } from '@/core/Component';
import { Routes, Router } from '@/core/Router';
import { Header } from '@/components';
import { Home, Project } from '@/pages';

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
            { path: '/project', Component: Project },
        ];

        new Routes({ $parent: this.$parent, routes, Header });
        Router.navigateTo('/'); // 등록 후 메인 페이지로 이동
    }
}
