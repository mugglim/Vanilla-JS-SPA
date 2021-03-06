import Router from './Router';

export default class Routes {
    $parent;

    constructor({ $parent, Header, routes }) {
        this.$parent = $parent;
        this.init({ Header, routes });
    }

    init({ Header, routes }) {
        const subscribeRoute = ({ path, Component }) => {
            const renderComponent = this.render.bind(this, {
                Header,
                Component,
            });
            Router.subscribe({ path, Component: renderComponent });
        };

        routes.forEach(subscribeRoute);
    }

    render({ Header, Component }) {
        this.$parent.innerHTML = '';

        if (Header) {
            new Header({ $parent: this.$parent });
        }
        new Component({ $parent: this.$parent });
    }
}
