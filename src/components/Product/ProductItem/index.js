import Veact from '@/core/Veact';
import Router from '@/core/Router';
import './index.scss';

export default class ProductItem extends Veact {
    constructor($target, props) {
        super($target, props);
        this.initState({});
    }

    template() {
        const { id, title, price } = this.props;

        return `
            <div>item-number : ${id}</div>
            <div>title : ${title}</div>
            <div>price : ${price}</div>
        `;
    }
}
