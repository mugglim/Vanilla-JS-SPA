export default (() => {
    const routeMap = new Map();

    const subscribe = ({ path, Component }) => {
        if (routeMap.has(path)) return;
        routeMap.set(path, Component);
    };

    const getRoutPath = urlPath => {
        const getRegexOfRoutePath = routePath => {
            return new RegExp(routePath.replace(/:\w+/g, '\\w+'));
        };

        const isRoutMatch = (urlPath, dynamicPathRegex) => {
            const matchList = urlPath.match(dynamicPathRegex);
            return matchList && matchList[0] === urlPath;
        };

        const handleRoutePathMatch = routePath =>
            isRoutMatch(urlPath, getRegexOfRoutePath(routePath));

        return Array.from(routeMap.keys()).find(handleRoutePathMatch);
    };

    const getRenderComponent = urlPath => {
        const routePath = getRoutPath(urlPath);

        if (!routePath) return;
        if (!routeMap.get(routePath)) return;

        return routeMap.get(routePath);
    };

    const navigateTo = path => {
        const renderComponent = getRenderComponent(path);
        history.pushState({ path }, null, path);
        renderComponent();
    };

    const handlePopstate = ({ state }) => {
        const { path } = state;
        const renderComponent = getRenderComponent(path);
        renderComponent();
    };

    const parseParam = (routePath, urlPath) => {
        if (!routePath || !urlPath) return {};

        const splitByPath = url => url.split('/').filter(path => path !== '');

        const routePathList = splitByPath(routePath);
        const urlPathList = splitByPath(urlPath);

        return routePathList.reduce((params, routePath, idx) => {
            if (routePath.startsWith(':')) {
                const paramName = routePath.substring(1);
                params[paramName] = urlPathList[idx];
            }
            return params;
        }, {});
    };

    const useParams = () => {
        const { pathname: urlPath } = window.location;
        const routePath = getRoutPath(urlPath);

        return parseParam(routePath, urlPath);
    };

    return {
        subscribe,
        navigateTo,
        handlePopstate,
        useParams,
    };
})();
