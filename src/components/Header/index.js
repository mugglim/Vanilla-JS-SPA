import { Component } from '@/core/Component';
import { Router } from '@/core/Router';

export default class Header extends Component {
    constructor({ $parent }) {
        super({ $parent });
        this.setup({ element: '<nav></nav>' });
    }

    template() {
        return `
            <a class="nav__link" href="/">Home</a>
            <a class="nav__link" href="/counter">counter</a>
        `;
    }

    handleNavLinkClick(event) {
        event.preventDefault();
        const href = event.target.getAttribute('href');
        Router.navigateTo(href);
    }

    setEvent() {
        return [['.nav__link', 'click', this.handleNavLinkClick]];
    }
}
