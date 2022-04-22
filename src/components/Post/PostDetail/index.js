import { Component } from '@/core/Component';
import { Router } from '@/core/Router';

export default class PostDetail extends Component {
    constructor({ $parent }) {
        super({ $parent });
        this.setup({});
    }

    template() {
        const { id } = Router.useParams();
        return `
            <h1>PostDetail</h1>
            <h3>Post ID : ${id}</h3>    
        `;
    }
}
