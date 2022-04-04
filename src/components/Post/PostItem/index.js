import Veact from '@/core/Veact';
import Router from '@/core/Router';
import './index.scss';

export default class PostItem extends Veact {
    constructor($target, props) {
        super($target, props);
        this.initState({});
    }

    template() {
        const { id, title, body } = this.props;

        return `
            <div><b>post-id</b> : ${id}</div>
            <div><b>title</b> : ${title}</div>
            <div><b>body</b> : ${body}</div>
        `;
    }
}
