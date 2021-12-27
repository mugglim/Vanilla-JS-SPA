import Veact from '@/core/Veact';
import $ from '@/util/dom';
import { Header } from '@/components';
import { Home, About } from '@/pages';

export default class extends Veact {
    constructor($target) {
        super($target);
        this.initState({});
    }

    template() {
        return `
            <div class="nav"></div>
            <div class="home"></div>
            <div class="about"></div>

        `;
    }

    didMount() {
        new Header('.nav');
        new Home('.home');
        new About('.about');
    }
}
