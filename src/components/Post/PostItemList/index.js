import Veact from '@/core/Veact';
import Router from '@/core/Router';
import PostItem from '../PostItem';
import _ from '@/util/fp';
import $ from '@/util/dom';
import './index.scss';

export default class PostItemList extends Veact {
    constructor($target, props) {
        super($target, props);
        this.initState({});
    }

    template() {
        return `
            ${this.props
                .map(
                    item =>
                        `<div class="post-feed__list__item" data-idx="${item.id}"></div>`,
                )
                .join('')}
        `;
    }

    async didMount() {
        this.props.forEach(
            item =>
                new PostItem(
                    `.post-feed__list__item[data-idx='${item.id}']`,
                    item,
                ),
        );
    }

    willMount() {
        const handleProductItemClick = ({ target }) => {
            const { idx } = target.dataset;
            Router.navigateTo(`/post/${idx}`);
        };

        _.each(
            this.$target,
            $.delegate(
                '.post-feed__list__item',
                'click',
                handleProductItemClick,
            ),
        );
    }
}
