import { Component } from '@/core/Component';
import Counter from '@/components/Counter';

export default class extends Component {
    constructor({ $parent }) {
        super({ $parent });
        this.setup({ element: `<div class="counter"></div>` });
    }

    didMount() {
        new Counter({ $parent: this.$target });
        new Counter({ $parent: this.$target });
    }

    template() {
        return `<h1>Counter App</h1>`;
    }
}
