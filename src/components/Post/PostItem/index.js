import { Component } from '@/core/Component';
import { Router } from '@/core/Router';

export default class PostItem extends Component {
    constructor({ $parent, props }) {
        super({ $parent, props });
        this.setup({
            element: {
                type: 'div',
                props: {
                    className: 'post-feed__list__item',
                    dataset: { idx: this.props.post.id },
                },
            },
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
