import { Component } from '@/core/Component';
import { Router } from '@/core/Router';
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

    handleTodoDelete(e) {
        const { idx } = e.target.dataset;
        if (!idx) return;

        todoStore.dispatch(deleteTodo(idx));
    }

    handleTodoDetailLink(e) {
        const { idx } = e.target.dataset;
        if (!idx) return;

        Router.navigateTo(`/todo/${idx}`);
    }

    setEvent() {
        return [
            ['.todo__form', 'submit', this.handleFormSubmit],
            ['.todo__delete__button', 'click', this.handleTodoDelete],
            ['.todo__detail__button', 'click', this.handleTodoDetailLink],
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
                                <button class="todo__delete__button" type="button" data-idx="${idx}">X</button>
                                <button class="todo__detail__button" type="button" data-idx="${idx}">detail</button>
                            </li>`,
                    )
                    .join('')}
            </ul>
        `;
    }
}
