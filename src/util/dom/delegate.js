import $find from './find';

export default (childClassName, eventName, handler) => $parent => {
    $parent.addEventListener(eventName, event => {
        event.preventDefault();
        event.stopPropagation();

        const $target = event.target;
        const targetClassName = Array.from($target.classList)
            .map(className => '.' + className)
            .join(' ');

        if (childClassName === targetClassName) {
            handler(event);
        }
    });
};
