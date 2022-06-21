import { createStore, createAction } from '../core/Store';

const [ADD_TODO, addTodo] = createAction('ADD_TODO', todo => {
    return { payload: { todo } };
});

const [DELETE_TODO, deleteTodo] = createAction('DELETE_TODO', todoID => {
    return { payload: { todoID } };
});

const todoReducer = (state, action) => {
    switch (action.type) {
        case ADD_TODO:
            return { todos: [...state.todos, action.payload.todo] };
        case DELETE_TODO:
            return {
                todos: state.todos.filter(
                    (_, idx) => idx !== +action.payload.todoID,
                ),
            };
        default:
            return state;
    }
};

export { addTodo, deleteTodo };

export default (function todoStore() {
    const initalState = { todos: [] };
    const todoStore = createStore(initalState, todoReducer);
    return todoStore;
})();
