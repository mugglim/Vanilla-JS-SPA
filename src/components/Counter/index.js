import Veact from '@/core/Veact';
import _ from '@/util/fp';
import $ from '@/util/dom';
import CounterStore from '@/store/CounterStore';

export default class Counter extends Veact {
    constructor($target) {
        super($target);
        CounterStore.subscribe(this.render.bind(this));
        this.initState({ count: 1 });
    }

    willMount() {
        const handleIncraseCount = () => {
            this.setState({ count: this.state.count + 1 });
        };

        const handleDecreaseCount = () => {
            this.setState({ count: this.state.count - 1 });
        };

        _.each(
            this.$target,
            $.delegate('.increase__btn', 'click', handleIncraseCount),
            $.delegate('.decrease__btn', 'click', handleDecreaseCount),
        );
    }

    template() {
        return `
            <h1>Counter Component</h1>

            <h3>
                local-state-count : ${this.state.count}
                global-state-count : ${CounterStore.getState().count}
            </h3>

            <h4>Click the button below to change local state</h4>
            <button class="increase__btn">+</button>
            <button class="decrease__btn">-</button>
        `;
    }
}
