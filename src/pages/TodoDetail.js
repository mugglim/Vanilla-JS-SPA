import { Component } from '@/core/Component';
import { Router } from '@/core/Router';
import todoStore from '@/store/todoStore';

export default class TodoDetail extends Component {
    constructor({ $parent }) {
        super({ $parent });
        this.setup({ element: '<div>' });
    }

    template() {
        const { todoID } = Router.useParams();
        const { todos } = todoStore.getState(); // only READ not observing

        const detailTodo = todos.find((_, idx) => idx === +todoID);

        return `
            <h1>TodoDetail</h1>
            todo: ${detailTodo}
        `;
    }
}
