import { Component } from '@/core/Component';
import { Router } from '@/core/Router';

export default class PostItem extends Component {
    constructor({ $parent, props }) {
        super({ $parent, props });
        this.setup({
            element: `<div class="post-feed__list__item" data-idx=${this.props.post.id}></div>`,
        });
    }

    template() {
        const { id, title, body } = this.props.post;
        return `
                <div><b>post-id</b> : ${id}</div>
                <div><b>title</b> : ${title}</div>
                <div><b>body</b> : ${body}</div>
            `;
    }
}
