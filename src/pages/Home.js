import Veact from '@/core/Veact';
import { getPost } from '@/api/post';
import { PostItemList } from '@/components';

export default class extends Veact {
    constructor($target) {
        super($target);
        this.initState({});
    }

    template() {
        return `
            <h1>Home</h1>
            <div class="post-feed__list"></div>
        `;
    }

    async didMount() {
        const postList = await getPost();

        new PostItemList('.post-feed__list', postList);
    }
}
