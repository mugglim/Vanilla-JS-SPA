import { Component } from '@/core/Component';
import { Router } from '@/core/Router';
import { getPost } from '@/api/post';
import { setLocalStorageItem, getLocalStorageItem } from '@/util/localstorage';

export default class PostDetail extends Component {
    constructor({ $parent }) {
        super({ $parent });
        this.setup({ element: `<div class="post__item--detail"></div>` });
    }

    template() {
        if (!this.state.postInfo) return '<h1>Loading...</h1>';

        const { title, body } = this.state.postInfo;

        return `
            <h1>${title}</h1>
            <h3>${body}</h3>    
        `;
    }

    async #fetchPost({ postInfoKey, postId }) {
        const postInfo = await getPost({ postId });
        setLocalStorageItem(postInfoKey, postInfo);
        this.setState({ postInfo });
    }

    didMount() {
        const { id: postId } = Router.useParams();
        const postInfoKey = `postId-${postId}`;
        const postInfo = getLocalStorageItem(postInfoKey);

        if (postInfo) {
            this.setState({ postInfo });
            return;
        }

        this.#fetchPost({ postInfoKey, postId });
    }
}
