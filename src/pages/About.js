import Veact from '@/core/Veact';

export default class extends Veact {
    constructor($target) {
        super($target);
        this.initState({});
    }

    template() {
        return `
            <h1>About</h1>
        `;
    }
}
