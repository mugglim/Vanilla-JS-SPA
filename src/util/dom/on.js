import $find from './find';

// when : event
// given : $el
// then : handler

export default (query, eventName, handler) => {
    $find(query).addEventListener(eventName, handler);
};
