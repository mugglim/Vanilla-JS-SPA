export default (() => {
    let $root;
    const eventMap = new Map();
    const subscribedEventSet = new Set();

    const init = initRoot => {
        if ($root) throw new Error("root element can't be changed");
        $root = initRoot;
    };

    function createEvent([query, eventType, eventHandler]) {
        return { query, eventType, eventHandler: eventHandler.bind(this) };
    }

    const subscribe = eventList => {
        // eventList는 setEvent()를 통해 입력받는다.
        if (!$root | !eventList) return;

        eventList.forEach(({ query, eventType, eventHandler }) => {
            if (!eventMap.has(eventType)) {
                eventMap.set(eventType, new Array());
            }

            eventMap.get(eventType).push({ query, eventHandler });
        });

        eventMap.forEach((eventHandlerList, eventType) => {
            if (subscribedEventSet.has(eventType)) {
                return;
            }

            subscribedEventSet.add(eventType);

            $root.addEventListener(eventType, event => {
                const target = event.target;
                const { query, eventHandler } = eventHandlerList.find(
                    ({ query }) => {
                        const $closestEl = target.closest(query);
                        return $closestEl ? true : false;
                    },
                );

                if (!eventHandler) return;
                eventHandler(event);
            });
        });
    };

    return {
        init,
        subscribe,
        createEvent,
    };
})();
