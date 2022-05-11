export default class EventManager {
    $target;
    eventInfoMap = new Map();

    constructor($target) {
        this.$target = $target;
    }

    static createEvent([query, eventType, eventHandler]) {
        return { query, eventType, eventHandler: eventHandler.bind(this) };
    }

    addEventList(eventInfoList) {
        if (!this.$target | !eventInfoList) return;

        const setEventInfo = ({ query, eventType, eventHandler }) => {
            if (!this.eventInfoMap.has(eventType)) {
                this.eventInfoMap.set(eventType, new Map());
            }

            const eventHandlerMap = this.eventInfoMap.get(eventType);
            eventHandlerMap.set(query, eventHandler);
        };

        const subribeEvent = (eventHandlerMap, eventType) => {
            const targetQuerys = Array.from(eventHandlerMap.keys());

            const eventHandler = event => {
                const findTargetQuer = query => event.target.closest(query);
                const targetQuery = targetQuerys.find(findTargetQuer);

                if (!targetQuery) return;

                const targetEventHandler = eventHandlerMap.get(targetQuery);
                targetEventHandler(event);
            };

            this.$target.addEventListener(eventType, eventHandler);
        };

        eventInfoList.forEach(setEventInfo);
        this.eventInfoMap.forEach(subribeEvent);
    }
}
