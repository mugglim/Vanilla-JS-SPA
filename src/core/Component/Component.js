import EventManager from './EventManager';
import { $ } from '@/util/selector';
import { createElement } from '@/util/element';

export default class Component {
    $parent;
    $target;
    props;
    state;
    isMount = false;
    eventManager;

    constructor({ $parent, props = null }) {
        this.$parent = $parent;
        this.props = props;
    }

    setup({ state = {}, element = '' }) {
        this.state = state;
        this.#setTargetElement(element);
        this.#initEventManager();
        this.setState();
        this.didMount();
        this.#setMount();
    }

    #initEventManager() {
        const eventList = this.setEvent();
        if (!this.$target || !eventList) return;

        this.eventManager = new EventManager(this.$target);
        const bEventList = eventList.map(EventManager.createEvent.bind(this));

        this.eventManager.addEventList(bEventList);
    }

    #setTargetElement(element) {
        if (!element) return;

        this.$target = createElement(element);
        this.$parent.appendChild(this.$target);
    }

    #setMount() {
        this.isMount = true;
    }

    useRef(query) {
        if (!query) return;
        return { current: () => $(query, this.$target) };
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
