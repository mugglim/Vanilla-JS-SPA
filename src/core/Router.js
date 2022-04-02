import $ from '@/util/dom';
import _ from '@/util/fp';

const Router = (() => {
    const routes = new Map();

    const useParams = () => {
        const { pathname } = window.location;
        let originRoutePath;
        let res = {};

        for (const routePath of routes.keys()) {
            const regex = new RegExp(routePath.replace(/\:\w+/g, '\\w+'));

            const match = pathname.match(regex);
            if (match && match[0] === pathname) {
                originRoutePath = routePath;
                break;
            }
        }

        if (originRoutePath) {
            const paramList = originRoutePath.split('/');
            const valueList = pathname.split('/');

            for (const [param, value] of _.zip(paramList, valueList)) {
                if (param.startsWith(':')) {
                    res[param.substring(1)] = value;
                }
            }
        }

        return res;
    };

    const getRenderComponent = path => {
        let renderComponent;

        for (const [routePath, routeRenderComponent] of routes.entries()) {
            const regex = new RegExp(routePath.replace(/\:\w+/, '\\w+'));
            const match = path.match(regex);

            if (match && match[0] === path) {
                renderComponent = routeRenderComponent;
                break;
            }
        }

        return renderComponent;
    };

    const navigateTo = path => {
        const renderComponent = getRenderComponent(path);
        history.pushState({ path }, null, path);
        renderComponent();
    };

    const subscribe = ({ path, component }) => {
        routes.set(path, component);
    };

    const handlePopstate = ({ state }) => {
        const { path } = state;
        const renderComponent = getRenderComponent(path);
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
        useParams,
    };
})();

export default Router;
