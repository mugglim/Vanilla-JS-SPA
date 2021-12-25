import Veact from './core/Veact';
import _ from '@/util/fp';
import $ from '@/util/dom';

import { Counter, GlobalCounter } from '@/components';

export default class extends Veact {
    constructor($target) {
        super($target);
        this.initState({});
    }

    template() {
        return `
            <div class="counter"></div>
            <div class="global__counter"></div>
        `;
    }

    didMount() {
        new Counter($.find('.counter'));
        new GlobalCounter($.find('.global__counter'));
    }
}
