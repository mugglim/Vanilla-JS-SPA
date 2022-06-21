const createStore = (initState = {}, reducer) => {
    let state = initState;
    let subscriberList = [];

    const getState = () => state;

    const setState = newState => {
        state = { ...state, ...newState };
    };

    const subscribe = callback => {
        subscriberList.push(callback);
    };

    const notify = () => {
        subscriberList.forEach(callback => callback());
    };

    const dispatch = action => {
        const newState = reducer(state, action);
        setState(newState);
        notify();
    };

    return {
        getState,
        subscribe,
        dispatch,
    };
};

export default createStore;
