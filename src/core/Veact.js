export default class Veact {
    constructor($target) {
        this.$target = $target;
        this.isMounted = false;
        this.state = {};
    }

    isStateChanged(newState) {
        return JSON.stringify(this.state) === JSON.stringify(newState);
    }

    setState(newState) {
        if (!this.isMounted) {
            this.beforeMount();
        }

        this.state = { ...this.state, ...newState };
        this.render();

        this.afterMount();
    }

    template() {
        return ``;
    }

    render() {
        console.log(this.$target);
        this.$target.innerHTML = this.template();
    }

    beforeMount() {}
    afterMount() {}
    willUpdate() {}
}
