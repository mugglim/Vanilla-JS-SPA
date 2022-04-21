import { Component } from '@/core/Component';
import { Router } from '@/core/Router';
import _ from '@/util/fp';
import $ from '@/util/dom';

export default class Counter extends Component {
    constructor($target) {
        super($target);
        this.setup();
    }

    template() {
        return `
            <a class="nav__link" href="/">Home</a>
            <a class="nav__link" href="/about">About</a>
        `;
    }

    setEvent() {
        const handleNavClick = ({ target }) => {
            const navHref = target.getAttribute('href');
            Router.navigateTo(navHref);
        };

        _.each(this.$target, $.delegate('.nav__link', 'click', handleNavClick));
    }
}
