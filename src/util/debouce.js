export function debounce(fn, wait) {
    let timerId = null;

    return function (...args) {
        const self = this;
        clearTimeout(timerId);

        timerId = setTimeout(() => {
            fn.apply(self, args);
        }, wait);
    };
}
