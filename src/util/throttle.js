export function throttle(fn, wait) {
    let isBlocking = false;

    return function (...args) {
        const self = this;

        if (!isBlocking) {
            isBlocking = true;
            fn.apply(self, args);
        }

        setTimeout(() => {
            isBlocking = false;
        }, wait);
    };
}
