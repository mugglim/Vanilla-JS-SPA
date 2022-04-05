export default function infiniteScroll({ callback, options, target }) {
    const observer = new IntersectionObserver(callback, options);

    const startObserve = () => {
        observer.observe(target);
    };

    const stopObserve = () => {
        observer.unobserve(target);
    };

    return { startObserve, stopObserve };
}
