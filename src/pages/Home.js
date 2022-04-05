import Veact from '@/core/Veact';
import $ from '@/util/dom';
import { getPost } from '@/api/post';
import { PostItemList } from '@/components';
import infiniteScroll from '../util/infiniteScroll';

const POST_LIMIT = 10;

export default class extends Veact {
    constructor($target) {
        super($target);
        this.initState({ startPostIdx: 0, postList: [] });
    }

    async handleFetchPost() {
        const postList = await getPost({
            _start: this.state.startPostIdx,
            _limit: POST_LIMIT,
        });

        const postCount = postList.length;

        if (postCount > 0) {
            this.setState({
                startPostIdx: this.state.startPostIdx + postCount,
                postList: [...this.state.postList, ...postList],
            });
        }
    }

    intersectHandler(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                this.handleFetchPost();
            }
        });
    }

    didMount() {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0,
        };

        this.$loaderRef = $.find('.post-loader');
        this.$infiniteScrollRef = infiniteScroll({
            callback: this.intersectHandler.bind(this),
            options,
            target: this.$loaderRef,
        });
        this.$infiniteScrollRef.startObserve();

        new PostItemList('.post-feed__list', { postList: this.state.postList });
    }

    template() {
        return `
            <h1>Home</h1>
            <div class="post-feed__list"></div>
            <div class="post-loader"></div>
        `;
    }
}
