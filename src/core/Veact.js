import $ from '@/util/dom';

export default class Veact {
    constructor($target, props = null) {
        this.$target = $.find($target);
        this.props = props;
    }

    initState(initalState) {
        this.state = initalState;
        this.mount();
    }

    setState(newState) {
        this.state = { ...this.state, ...newState };
        this.mount();
    }

    mount() {
        this.render();
        this.didMount();
    }

    template() {}

    render() {
        this.$target.innerHTML = this.template();
    }

    didMount() {}

    update() {
        this.render();
    }
}
