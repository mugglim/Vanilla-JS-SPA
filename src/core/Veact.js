export default class Veact {
    constructor($target) {
        this.$target = $target;
        this.isMounted = false;
    }

    initState(initalState) {
        this.state = initalState;
        this.mount();
    }

    setState(newState) {
        this.state = { ...this.state, ...newState };
        this.update();
    }

    mount() {
        if (!this.isMounted) {
            this.isMounted = true;
            this.willMount();
        }
        this.render();
        this.didMount();
    }

    template() {
        return ``;
    }
    render() {
        this.$target.innerHTML = this.template();
    }

    willMount() {}
    didMount() {}

    update() {
        this.render();
    }
}
