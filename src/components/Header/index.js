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
            <a class="nav__link" href="/about">About</a>
        `;
    }

    setEvent() {
        const handleNavLinkClick = event => {
            event.preventDefault();

            const $navLink = event.target.closest('.nav__link');
            if (!$navLink) return;

            const href = $navLink.getAttribute('href');
            Router.navigateTo(href);
        };

        this.$target.addEventListener('click', handleNavLinkClick);
    }
}
