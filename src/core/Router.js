import $ from '@/util/dom';
import _ from '@/util/fp';

const Router = (() => {
    const routeMap = new Map();

    const isUrlPathMatch = (urlPath, regex) => {
        const matchList = urlPath.match(regex);
        return matchList && matchList[0] === urlPath;
    };

    const getRouthPathRegex = routePath => {
        return new RegExp(routePath.replace(/\:\w+/g, '\\w+'));
    };

    const parseParam = (routhPath, urlPath) => {
        if (!urlPath) return {};

        const paramList = routhPath.split('/');
        const valueList = urlPath.split('/');

        return _.zip(paramList, valueList)
            .filter(([param]) => param.startsWith(':'))
            .map(([param, value]) => [param.substring(1), value])
            .reduce((paramObj, [paramKey, value]) => {
                paramObj[paramKey] = value;
                return paramObj;
            }, {});
    };

    const matchRouthPath = urlPath => {
        let matchedRoutePath;

        for (const routePath of routeMap.keys()) {
            const regex = getRouthPathRegex(routePath);
            if (isUrlPathMatch(urlPath, regex)) {
                matchedRoutePath = routePath;
                break;
            }
        }

        return matchedRoutePath;
    };

    const useParams = () => {
        const { pathname } = window.location;
        const routhPath = matchRouthPath(pathname);
        const paramObj = parseParam(routhPath, pathname);

        return paramObj;
    };

    const getRenderComponent = urlPath => {
        let matchedRenderComponent;

        for (const [routePath, renderComponent] of routeMap.entries()) {
            const regex = getRouthPathRegex(routePath);
            if (isUrlPathMatch(urlPath, regex)) {
                matchedRenderComponent = renderComponent;
                break;
            }
        }

        return matchedRenderComponent;
    };

    const navigateTo = path => {
        const renderComponent = getRenderComponent(path);
        history.pushState({ path }, null, path);
        renderComponent();
    };

    const subscribe = ({ path, component }) => {
        routeMap.set(path, component);
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
