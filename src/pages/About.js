import { Component } from '@/core/Component';

export default class extends Component {
    constructor($target) {
        super($target);
        this.setup({
            element: `<div class="about"></div>`,
        });
    }

    template() {
        return `<h1>About</h1>`;
    }
}
