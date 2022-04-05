import Veact from '@/core/Veact';
import Router from '@/core/Router';
import _ from '@/util/fp';
import $ from '@/util/dom';
import './index.scss';

export default class PostItemList extends Veact {
    constructor($target, props) {
        super($target, props);
        this.initState({});
    }

    template() {
        const { postList } = this.props;
        const renderPostItem = ({ id, title, body }) => {
            return `<div class="post-feed__list__item" data-idx="${id}">
                <div><b>post-id</b> : ${id}</div>
                <div><b>title</b> : ${title}</div>
                <div><b>body</b> : ${body}</div>
            </div>`;
        };

        return `${postList.map(renderPostItem).join('')}`;
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
