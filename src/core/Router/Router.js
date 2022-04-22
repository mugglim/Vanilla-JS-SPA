export default (() => {
    const routeMap = new Map();

    const subscribe = ({ path, Component }) => {
        if (routeMap.has(path)) return;
        routeMap.set(path, Component);
    };

    const regexOf = routePathName => {
        return new RegExp(routePathName.replace(/\:\w+/g, '\\w+'));
    };

    const getRoutePathName = urlPathName => {
        // prettier-ignore
        return Array
			.from(routeMap.keys())
			.find(pathName => isRegexMatch(urlPathName, regexOf(pathName))
		);
    };

    const getRenderComponent = urlPathName => {
        const routePathName = getRoutePathName(urlPathName);
        return routePathName ? routeMap.get(routePathName) : '';
    };

    const isRegexMatch = (urlPathName, regex) => {
        const matchList = urlPathName.match(regex);
        return matchList && matchList[0] === urlPathName;
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

    const parseParam = (routePathName, urlPathName) => {
        if (!routePathName || !urlPathName) return {};

        const paramInfo = {};
        const routePathList = routePathName.split('/').filter(el => el !== '');
        const urlPathList = urlPathName.split('/').filter(el => el !== '');

        for (const [idx, routePathNAme] of routePathList.entries()) {
            if (routePathNAme.startsWith(':')) {
                const param = routePathNAme.substring(1);
                paramInfo[param] = urlPathList[idx];
            }
        }

        return paramInfo;
    };

    const useParams = () => {
        const { pathname: urlPathName } = window.location;
        const routePathName = getRoutePathName(urlPathName);
        const paramObj = parseParam(routePathName, urlPathName);

        return paramObj;
    };

    return {
        subscribe,
        navigateTo,
        handlePopstate,
        useParams,
    };
})();
