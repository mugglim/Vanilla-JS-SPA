import Veact from '@/core/Veact';
import Router from '@/core/Router';

export default class PostDetail extends Veact {
    constructor($target, props) {
        super($target, props);
        this.initState({});
    }

    template() {
        const { id } = Router.useParams();
        return `
            <h1>PostDetail</h1>
            <h3>Post ID : ${id}</h3>    
        `;
    }
}
