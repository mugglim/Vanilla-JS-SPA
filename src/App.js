import Veact from './core/Veact';
import $ from '@/util/dom';

export default class extends Veact {
    constructor($target) {
        super($target);
        this.setState({ count: 1 });
    }

    afterMount() {
        const handleIncraseCount = () =>
            this.setState({ count: this.state.count + 1 });
        const handleDecreaseCount = () =>
            this.setState({ count: this.state.count - 1 });

        $.on('.increase__btn', 'click', handleIncraseCount);
        $.on('.decrease__btn', 'click', handleDecreaseCount);
    }

    template() {
        const { count } = this.state;
        return `
            <h2>count : ${count}</h2>
            <button class="increase__btn">+</button>
            <button class="decrease__btn">-</button>
        `;
    }
}
