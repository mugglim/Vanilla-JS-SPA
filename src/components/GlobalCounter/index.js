import Veact from '@/core/Veact';
import _ from '@/util/fp';
import $ from '@/util/dom';
import CounterStore from '@/store/CounterStore';

export default class GlobalCounter extends Veact {
    constructor($target) {
        super($target);
        CounterStore.subscribe(this.render.bind(this));
        this.initState({ count: 1 });
    }

    willMount() {
        const { dispatch } = CounterStore;

        const handleIncraseCount = () => dispatch({ type: 'INCREASE_COUNT' });
        const handleDecreaseCount = () => dispatch({ type: 'DECREASE_COUNT' });

        _.each(
            this.$target,
            $.delegate('.increase__btn', 'click', handleIncraseCount),
            $.delegate('.decrease__btn', 'click', handleDecreaseCount),
        );
    }

    template() {
        const { count } = CounterStore.getState();
        return `
            <h1>GlobalCounter Component</h1>
            <h3>global-state-count : ${count}</h3>

            <h4>Click the button below to change global state</h4>
            <button class="increase__btn">+</button>
            <button class="decrease__btn">-</button>
        `;
    }
}
