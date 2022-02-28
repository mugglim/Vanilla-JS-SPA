import Veact from '@/core/Veact';
import Router from '@/core/Router';

export default class ProductDetail extends Veact {
    constructor($target, props) {
        super($target, props);
        this.initState({});
    }

    template() {
        const { id } = Router.useParams();
        return `
            상품의 상세 사이트입니다. 상품 번호는 ${id} 이네요.
        `;
    }
}
