import Veact from '@/core/Veact';

import { Counter } from '@/components';

export default class extends Veact {
    constructor($target) {
        super($target);
        this.initState({});
    }

    template() {
        return `
            <h1>Home</h1>
            <div class="counter"></div>
        `;
    }

    didMount() {
        new Counter('.counter');
    }
}
