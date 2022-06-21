import { Component } from '@/core/Component';
import Counter from '@/components/Counter';

export default class Project extends Component {
    constructor({ $parent }) {
        super({ $parent });
        this.setup({ element: '<div>' });
    }

    didMount() {
        new Counter({ $parent: this.$target });
        new Counter({ $parent: this.$target });
    }

    template() {
        return `<h1>Project</h1>`;
    }
}
