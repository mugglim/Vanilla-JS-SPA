import Veact from '@/core/Veact';
import Router from '@/core/Router';
import ProductItem from '../ProductItem';
import _ from '@/util/fp';
import $ from '@/util/dom';

import './index.scss';

export default class ProductItemList extends Veact {
    constructor($target, props) {
        super($target, props);
        this.initState({});
    }

    template() {
        return `
            ${this.props.map(
                item =>
                    `<div class="product-item-list__item" data-idx="${item.id}"></div>`,
            )}
        `;
    }

    didMount() {
        this.props.forEach(
            item =>
                new ProductItem(
                    `.product-item-list__item[data-idx='${item.id}']`,
                    item,
                ),
        );
    }

    willMount() {
        const handleProductItemClick = ({ target }) => {
            const { idx } = target.dataset;
            Router.navigateTo(`/products/${idx}`);
        };

        _.each(
            this.$target,
            $.delegate(
                '.product-item-list__item',
                'click',
                handleProductItemClick,
            ),
        );
    }
}
