import $find from './find';

export default (childQuery, eventName, handler) => $parent => {
    $parent.addEventListener(eventName, event => {
        event.stopPropagation();

        const $target = event.target;
        const $child = $find(childQuery, $parent);

        if ($child === $target) {
            handler();
        }
    });
};
