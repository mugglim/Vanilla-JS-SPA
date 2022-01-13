import Veact from '@/core/Veact';
import _ from '@/util/fp';
import $ from '@/util/dom';

export default class Counter extends Veact {
    constructor($target) {
        super($target);
        this.initState({ count: 1 });
    }

    willMount() {
        const handleIncreaseButtonClick = () => {
            this.setState({ count: this.state.count + 1 });
        };

        const handleDecreaseButtonClick = () => {
            this.setState({ count: this.state.count - 1 });
        };

        _.each(
            this.$target,
            $.delegate('.increase__btn', 'click', handleIncreaseButtonClick),
            $.delegate('.decrease__btn', 'click', handleDecreaseButtonClick),
        );
    }

    template() {
        return `
            <h3>
                count : ${this.state.count}
            </h3>

            <button class="increase__btn">+</button>
            <button class="decrease__btn">-</button>
        `;
    }
}
