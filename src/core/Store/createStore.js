const createStore = (initState, reducer) => {
    let state = initState;
    let subscriberList = [];

    const getState = () => state;

    const setState = newState => {
        state = { ...state, ...newState };
    };

    const subscribe = renderCallback => {
        subscriberList.push(renderCallback);
    };

    const notify = () => {
        subscriberList.forEach(renderCallback => renderCallback());
    };

    const dispatch = action => {
        setState(reducer(state, action));
        notify();
    };

    return {
        getState,
        subscribe,
        dispatch,
    };
};

export default createStore;
