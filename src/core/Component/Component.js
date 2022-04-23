import { createElement } from '@/util/element';
import { $ } from '@/util/selector';

export default class Component {
    $parent;
    $target;
    props;
    state;
    isMount = false;

    constructor({ $parent, $target, props = null }) {
        this.$parent = $parent;
        this.props = props;
    }

    setup({ state = {}, element = '' }) {
        this.state = state;
        this.#setTargetElement(element);
        this.#setEventDelegate(this.setEvent());
        this.setState();
        this.didMount();
        this.#setMount();
    }

    #setTargetElement(element) {
        if (!element) return;

        this.$target = createElement(element);
        this.$parent.appendChild(this.$target);
    }

    #setMount() {
        this.isMount = true;
    }

    #createEvent(eventList) {
        return eventList.map(([query, eventType, eventHandler]) => ({
            query,
            eventType,
            eventHandler: eventHandler.bind(this),
        }));
    }

    #setEventDelegate(setEventList) {
        // eventList는 setEvent()를 통해 입력받는다.
        if (!this.$parent | !setEventList) return;

        const eventList = this.#createEvent(setEventList);
        const eventMap = new Map(); // key: event type, value: event handler map

        const handleInitEventMap = ({ query, eventType, eventHandler }) => {
            if (!eventMap.has(eventType)) {
                eventMap.set(eventType, new Map());
            }
            eventMap.get(eventType).set(query, eventHandler);
        };

        const handleEventDelegate = (eventHandlerMap, eventType) => {
            this.$parent.addEventListener(eventType, event => {
                // TODO : id query에서도 이벤트가 동작해야함.
                event.preventDefault();
                event.stopPropagation();

                const { className } = event.target;
                const query = '.' + className;
                const handler = eventHandlerMap.get('.' + className);

                if (!handler) return;
                handler(event);
            });
        };

        // 1. init event map
        eventList.forEach(handleInitEventMap);
        // 2. add delegated event listener to $parent element
        eventMap.forEach(handleEventDelegate);
    }

    setEvent() {}
    didUpdate() {}
    didMount() {}

    template() {
        throw new Error('반드시 template 메소드를 구현해주세요.');
    }

    setState(newState) {
        this.state = { ...this.state, ...newState };
        this.render();
        if (this.isMount) {
            this.didUpdate();
        }
    }

    render() {
        if (!this.$target) {
            this.$parent.innerHTML = this.template();
            return;
        }

        this.$target.innerHTML = this.template();
    }
}
