import $ from '@/util/dom';

export default class Component {
    $target;
    props;
    state;
    isMount = false;

    constructor($target, props = null) {
        this.$target = $.find($target);
        this.props = props;
    }

    setup(initalState) {
        this.state = initalState;
        this.setState();
        this.didMount();
        this.#setMount();
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
        this.setEvent();

        if (this.isMount) {
            this.didUpdate();
        }
    }

    render() {
        this.$target.innerHTML = this.template();
    }
}
