import { Component } from '@/core/Component';

export default class Home extends Component {
    constructor({ $parent }) {
        super({ $parent });
        this.setup({ element: `<div>` });
    }

    template() {
        return `
            <h1>Home</h1>
        `;
    }
}
