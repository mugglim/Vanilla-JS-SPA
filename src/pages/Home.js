import Veact from '@/core/Veact';

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
        new Counter('.counter');
        new GlobalCounter('.global__counter');
    }
}
