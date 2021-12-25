import createStore from '@/core/Store';

const counterReducer = (state, action) => {
    switch (action.type) {
        case 'INCREASE_COUNT':
            return { count: state.count + 1 };
        case 'DECREASE_COUNT':
            return { count: state.count - 1 };
        default:
            break;
    }
};

export default (function CounterStore() {
    const counterValue = createStore({ count: 1 }, counterReducer);
    return counterValue;
})();
