import { Component } from '@/core/Component';

export default class PostLoader extends Component {
    constructor({ $parent, props }) {
        super({ $parent, props });
        this.setup({
            element: {
                type: 'div',
                props: { className: 'post-loader' },
            },
        });
    }

    template() {
        return '';
    }
}
