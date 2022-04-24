export default (() => {
    let $root;
    const subscribedEventMap = new Map();
    const subscribedEventSet = new Set();

    function createEvent([query, eventType, eventHandler]) {
        return { query, eventType, eventHandler: eventHandler.bind(this) };
    }

    const init = initRoot => {
        if ($root) throw new Error("root element can't be changed");
        $root = initRoot;
    };

    const isSusbcribedEventType = eventType => {
        return subscribedEventSet.has(eventType);
    };

    const subscribe = eventList => {
        if (!$root | !eventList) return;

        const handleAddEventList = ({ query, eventType, eventHandler }) => {
            if (!subscribedEventMap.has(eventType)) {
                subscribedEventMap.set(eventType, new Map());
            }

            const eventHandlerMap = subscribedEventMap.get(eventType);
            eventHandlerMap.set(query, eventHandler);
        };

        const handleSubscribeEvent = (eventHandlerMap, eventType) => {
            // $root에 등록 된 이벤트 타입 인지 확인.
            if (isSusbcribedEventType(eventType)) {
                return;
            }

            // root 엘리먼트에 중복 이벤트 방지를 위해 set에 등록
            subscribedEventSet.add(eventType);

            $root.addEventListener(eventType, event => {
                const eventHandlerList = Array.from(eventHandlerMap).find(
                    ([query]) => event.target.closest(query),
                );

                if (!eventHandlerList) return;
                const [_, eventHandler] = eventHandlerList;
                eventHandler(event);
            });
        };

        eventList.forEach(handleAddEventList);
        subscribedEventMap.forEach(handleSubscribeEvent);
    };

    return {
        init,
        subscribe,
        createEvent,
    };
})();
