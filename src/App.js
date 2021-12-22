import Veact from './core/Veact';
import _ from '@/util/fp';
import $ from '@/util/dom';

export default class extends Veact {
    constructor($target) {
        super($target);
        this.initState({ count: 1 });
    }

    willMount() {
        const handleIncraseCount = () =>
            this.setState({ count: this.state.count + 1 });

        const handleDecreaseCount = () =>
            this.setState({ count: this.state.count - 1 });

        _.each(
            this.$target,
            $.delegate('.increase__btn', 'click', handleIncraseCount),
            $.delegate('.decrease__btn', 'click', handleDecreaseCount),
        );
    }

    template() {
        return `
            <h2>count : ${this.state.count}</h2>
            <button class="increase__btn">+</button>
            <button class="decrease__btn">-</button>
        `;
    }
}
