import Veact from '@/core/Veact';
import _ from '@/util/fp';
import $ from '@/util/dom';
import { Router } from '@/core/Router';

export default class Counter extends Veact {
    constructor($target) {
        super($target);
        this.initState({});
    }

    template() {
        return `
            <a class="nav__link" href="/">Home</a>
            <a class="nav__link" href="/about">About</a>
        `;
    }

    didMount() {
        const handleNavClick = ({ target }) => {
            const navHref = target.getAttribute('href');
            Router.navigateTo(navHref);
        };

        _.each(this.$target, $.delegate('.nav__link', 'click', handleNavClick));
    }
}
