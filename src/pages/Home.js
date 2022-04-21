import { Component } from '@/core/Component';
import $ from '@/util/dom';
import { getPost } from '@/api/post';
import { PostItemList } from '@/components';
import infiniteScroll from '../util/infiniteScroll';

const POST_LIMIT = 10;

export default class extends Component {
    $postLoaderRef;
    $infiniteScrollRef;

    constructor($target) {
        super($target);
        this.setup({ startPostIdx: 0, postList: [] });
    }

    async handleFetchPost() {
        const postList = await getPost({
            _start: this.state.startPostIdx,
            _limit: POST_LIMIT,
        });
        const postCount = postList.length;

        if (postCount === 0) return;

        this.setState({
            startPostIdx: this.state.startPostIdx + postCount,
            postList: [...this.state.postList, ...postList],
        });
    }

    intersectHandler(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            this.handleFetchPost();
        });
    }

    #setInsersectionObserver() {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0,
        };

        this.$postLoaderRef = $.find('.post-loader');
        this.$infiniteScrollRef = infiniteScroll({
            callback: this.intersectHandler.bind(this),
            options,
            target: this.$postLoaderRef,
        });
        this.$infiniteScrollRef.startObserve();
    }

    didMount() {
        this.#setInsersectionObserver();
    }

    didUpdate() {
        if (!this.state.postList.length) return;
        new PostItemList('.post-feed__list', { postList: this.state.postList });
        this.#setInsersectionObserver();
    }

    template() {
        return `
            <h1>Home</h1>
            <div class="post-feed__list"></div>
            <div class="post-loader"></div>
        `;
    }
}
