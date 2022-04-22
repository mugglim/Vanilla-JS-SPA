import { Component } from '@/core/Component';
import { getPost } from '@/api/post';
import { PostItemList } from '@/components';
import PostLoader from '@/components/Post/PostLoader';
import infiniteScroll from '../util/infiniteScroll';
import { $ } from '@/util/selector';

const POST_LIMIT = 10;
const INTERSECTION_OBSERVE_OPTION = {
    root: null,
    rootMargin: '0px',
    threshold: 0,
};

export default class Home extends Component {
    $postLoaderRef;
    $infiniteScrollRef;

    constructor({ $parent }) {
        super({ $parent });
        this.setup({ state: { startPostIdx: 0, postList: [] } });
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
        if (this.$infiniteScrollRef) {
            this.$infiniteScrollRef.stopObserve(this.$postLoaderRef);
        }

        new PostLoader({ $parent: this.$parent });
        this.$postLoaderRef = $('.post-loader');

        this.$infiniteScrollRef = infiniteScroll({
            callback: this.intersectHandler.bind(this),
            options: INTERSECTION_OBSERVE_OPTION,
            target: this.$postLoaderRef,
        });
        this.$infiniteScrollRef.startObserve();
    }

    didMount() {
        this.#setInsersectionObserver();
    }

    didUpdate() {
        if (!this.state.postList.length) return;

        new PostItemList({
            $parent: this.$parent,
            props: { postList: this.state.postList },
        });
        this.#setInsersectionObserver();
    }

    template() {
        return `
            <h1>Home</h1>
        `;
    }
}
