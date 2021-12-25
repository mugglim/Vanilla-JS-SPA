import Veact from './core/Veact';
import _ from '@/util/fp';
import $ from '@/util/dom';

import Counter from '@/components/Counter';

export default class extends Veact {
    constructor($target) {
        super($target);
        this.initState({});
    }

    template() {
        return `
            <div class="counter"></div>
        `;
    }

    didMount() {
        new Counter($.find('.counter'));
    }
}
