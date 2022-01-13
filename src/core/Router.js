import $ from '@/util/dom';

const Router = (() => {
    const routes = {};

    const navigateTo = path => {
        const renderComponent = routes[path];
        history.pushState({ path }, null, path);
        renderComponent();
    };

    const subscribe = ({ path, component }) => {
        routes[path] = component;
    };

    const handlePopstate = ({ state }) => {
        const { path } = state;
        const renderComponent = routes[path];
        renderComponent();
    };

    const initPath = () => {
        const { pathname } = window.location;
        navigateTo(pathname);
    };

    return {
        subscribe,
        navigateTo,
        handlePopstate,
        initPath,
    };
})();

export default Router;
