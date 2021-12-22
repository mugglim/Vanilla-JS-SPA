import $find from './find';

// when : event
// given : $el
// then : handler

export default (query, event, handler) => {
    $find(query).addEventListener(event, handler);
};
