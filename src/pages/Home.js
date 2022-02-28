import Veact from '@/core/Veact';
import { ProductItemList } from '@/components';

export default class extends Veact {
    constructor($target) {
        super($target);
        this.initState({});
    }

    template() {
        return `
            <h1>Home</h1>
            <div class="product-item-list"></div>
        `;
    }

    didMount() {
        const productList = [
            { id: 1, title: '나이키 덩크', price: 250000 },
            { id: 2, title: '이지 부스트', price: 350000 },
            { id: 3, title: '컨버스', price: 150000 },
            { id: 4, title: '아디다스 슈퍼스타', price: 100000 },
        ];
        new ProductItemList('.product-item-list', productList);
    }
}
