export default class EventManager {
    $target;
    subscribedEventMap = new Map();
    subscribedEventSet = new Set();

    constructor($target) {
        this.$target = $target;
    }

    static createEvent([query, eventType, eventHandler]) {
        return { query, eventType, eventHandler: eventHandler.bind(this) };
    }

    isSusbcribedEventType(eventType) {
        return this.subscribedEventSet.has(eventType);
    }

    addEventList(eventList) {
        if (!this.$target | !eventList) return;

        const handleAddEventList = ({ query, eventType, eventHandler }) => {
            if (!this.subscribedEventMap.has(eventType)) {
                this.subscribedEventMap.set(eventType, new Map());
            }

            const eventHandlerMap = this.subscribedEventMap.get(eventType);
            eventHandlerMap.set(query, eventHandler);
        };

        const handleSubscribeEvent = (eventHandlerMap, eventType) => {
            if (this.isSusbcribedEventType(eventType)) {
                return;
            }

            this.subscribedEventSet.add(eventType);

            this.$target.addEventListener(eventType, event => {
                const eventHandlerList = Array.from(eventHandlerMap).find(
                    ([query]) => event.target.closest(query),
                );

                if (!eventHandlerList) return;
                const [_, eventHandler] = eventHandlerList;
                eventHandler(event);
            });
        };

        eventList.forEach(handleAddEventList);
        this.subscribedEventMap.forEach(handleSubscribeEvent);
    }
}
