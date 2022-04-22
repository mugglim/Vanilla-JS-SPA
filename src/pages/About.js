import { Component } from '@/core/Component';

export default class extends Component {
    constructor($target) {
        super($target);
        this.setup({});
    }

    template() {
        return `
            <h1>About</h1>
        `;
    }
}
