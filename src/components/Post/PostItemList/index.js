import { Component } from '@/core/Component';
import PostItem from '../PostItem';
import { Router } from '@/core/Router';
import './index.scss';

export default class PostItemList extends Component {
    constructor({ $parent, props }) {
        super({ $parent, props });
        this.setup({
            element: {
                type: 'div',
                props: {
                    className: 'post-feed__list',
                },
            },
        });
    }

    template() {
        return '';
    }

    didMount() {
        if (!this.props) return;

        const { postList } = this.props;

        postList.forEach(
            post => new PostItem({ $parent: this.$target, props: { post } }),
        );
    }

    setEvent() {
        const handleProductItemClick = ({ target }) => {
            const $postItem = target.closest('.post-feed__list__item');
            if (!$postItem) return;

            const postId = $postItem.dataset.idx;
            Router.navigateTo(`/post/${postId}`);
        };

        this.$target.addEventListener('click', handleProductItemClick);
    }
}
