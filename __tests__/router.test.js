import { Router } from '@/core/Router';

const ROUTE_LIST = [
    { path: '/products/:id', component: null },
    { path: '/products/:id/:category', component: null },
];

Router.subscribe(ROUTE_LIST);

describe('useParams는 등록된 경로에서 param 값을 파싱한다', () => {
    beforeEach(() => {
        delete window.location;
    });

    it('paramObj is { id: 3} when URL is http://dummy/products/3', () => {
        const url = 'http://dummy/products/3';
        window.location = new URL(url);

        const paramObj = Router.useParams();
        expect(paramObj).toEqual({ id: '3' });
    });

    it('paramObj is { id: "3", category: "pants" } when url http://dummy/products/3/pants', () => {
        const url = 'http://dummy/products/3/pants';
        window.location = new URL(url);

        const paramObj = Router.useParams();
        expect(paramObj).toEqual({ id: '3', category: 'pants' });
    });
});
