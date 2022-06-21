import { Component } from '@/core/Component';
import todoStore, { addTodo, deleteTodo } from '../store/todoStore';

export default class Todo extends Component {
    constructor({ $parent }) {
        super({ $parent });
        this.setup({
            element: `<form class="todo__form">`,
            state: { text: '' },
        });

        todoStore.subscribe(this.render.bind(this));
    }

    didMount() {
        this.$inputRef = this.useRef('.todo__input');
    }

    handleFormSubmit(e) {
        e.preventDefault();
        const todoText = this.$inputRef.current().value;

        this.$inputRef.current().value = '';
        todoStore.dispatch(addTodo(todoText));
    }

    handleTodoClick(e) {
        const { idx } = e.target.dataset;
        if (!idx) return;

        todoStore.dispatch(deleteTodo(idx));
    }

    setEvent() {
        return [
            ['.todo__form', 'submit', this.handleFormSubmit],
            ['.todo__item', 'click', this.handleTodoClick],
        ];
    }

    template() {
        const { todos } = todoStore.getState();

        return `
            <h1>Todo App</h1>
            <input class="todo__input" autofocus></input>
            <button>+</button>
            <ul>
                ${todos
                    .map(
                        (todo, idx) =>
                            `<li class="todo__item">
                                <span>${todo}</span> 
                                <button type="button" data-idx="${idx}">X</button>
                            </li>`,
                    )
                    .join('')}
            </ul>
        `;
    }
}
