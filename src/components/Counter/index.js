import { Component } from '@/core/Component';

export default class Counter extends Component {
    constructor({ $parent }) {
        super({ $parent });
        this.setup({
            state: { count: 0 }, // for inital state
            element: `<div class="counter"></div>`, // for $target element
        });
    }

    onIncrease() {
        this.setState({ count: this.state.count + 1 });
    }

    onDecrease() {
        this.setState({ count: this.state.count - 1 });
    }

    setEvent() {
        return [
            ['.increase__button', 'click', this.onIncrease],
            ['.decrease__button', 'click', this.onDecrease],
        ];
    }

    template() {
        const { count } = this.state;
        return `
            <h1>${count}</h1>
            <button class="increase__button">+</button>
            <button class="decrease__button">-</button>
        `;
    }
}
