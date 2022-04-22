export const createElement = elementString => {
    if (!elementString) return;

    const $template = document.createElement('template');
    $template.innerHTML = elementString;

    return $template.content.firstElementChild;
};
