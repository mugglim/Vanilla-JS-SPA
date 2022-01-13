import $ from '@/util/dom';

const Router = (() => {
    const routes = {};

    const navigateTo = path => {
        const component = routes[path];
        history.pushState({ path }, null, path);
        component();
    };

    const subscribe = ({ path, component }) => {
        routes[path] = component;
    };

    const handlePopstate = event => {
        const { state } = event;
        const { path } = state;
        navigateTo(path);
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
