import EventManager from './EventManager';
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
        this.#setEventDelegate();
        this.#setTargetElement(element);
        this.setState();
        this.didMount();
        this.#setMount();
    }

    #setEventDelegate() {
        const eventList = this.setEvent();
        if (!eventList) return;

        // must be binded this at this time
        const bindedEventList = eventList.map(
            EventManager.createEvent.bind(this),
        );
        EventManager.subscribe(bindedEventList);
    }

    #setTargetElement(element) {
        if (!element) return;

        this.$target = createElement(element);
        this.$parent.appendChild(this.$target);
    }

    #setMount() {
        this.isMount = true;
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
