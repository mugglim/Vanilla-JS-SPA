import { Component } from '@/core/Component';

export default class PostLoader extends Component {
    constructor({ $parent, props }) {
        super({ $parent, props });
        this.setup({ element: `<div class="post-loader"></div>` });
    }

    template() {
        return '';
    }
}
