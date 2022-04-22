import { Component } from '@/core/Component';
import { Router } from '@/core/Router';
import { Header, PostDetail } from '@/components';
import { Home, About } from '@/pages';

export default class App extends Component {
    constructor({ $parent, props }) {
        super({ $parent, props });
        // header는 공용으로 상단에 배치
        new Header({ $parent: this.$parent });
        this.setup({});
    }

    template() {
        return ``;
    }

    didMount() {
        const routeList = [
            {
                path: '/',
                Component: () => new Home({ $parent: this.$parent }),
            },
            {
                path: '/about',
                Component: () => new About({ $parent: this.$parent }),
            },
            {
                path: '/post/:id',
                Component: () => new PostDetail({ $parent: this.$parent }),
            },
        ];
        Router.subscribe(routeList);
        Router.navigateTo('/'); // 등록 후 메인 페이지로 이동
    }
}
