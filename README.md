# Vanilla-JS-SPA

Simple SPA project with Vanilla JavaScript.

<img src="https://img.shields.io/badge/Javascript-000000?style=for-the-badge&logo=Javascript&logoColor=F7DF1E"> [![license](https://img.shields.io/badge/license-MIT-blue.svg?style=for-the-badge)](https://github.com/mugglim/Vanilla-JS-SPA/blob/main/LICENSE)

## TOC

-   [Setup](#setup)
-   [API](#api)
-   [Example](#examples)
-   [License](#license)

## Setup

```bash
npm install

# serve
npm run dev   # visit http://localhost:3000/

# build
npm run build

# test
npm run test

```

## API

-   [core/Components.js](#corecomponentjs)
-   [core/Router.js](#corerouter)
-   [core/Store.js](#corestore)

## core/Component

### `setup({element, state})`

Create target element and state.

```js
this.setup({
    element: `<div class="counter"></div>`, // for $target element
    state: { count: 0 }, // for inital state
});
```

### `setState(newState)`

Change local state to newState

### `setEvent()`

Subscribe event to target element using Event Delegation.

```js
setEvent(){
    // [query, eventType, eventHandler]
    return [
        ['.foo', 'click', 'handleFooClick'],
        ['.bar', 'click', 'handleBarClick'],
    ]
}
```

### `useRef()`

Retrun a mutable ref object like `React.useRef()`. You must set ref variable in `didMount()`;

```js
didMount(){
    // set
    this.$fooRef = this.useRef('.foo');

    // get
    const $foo = this.$fooRef.current();
}
```

[🔼 TOC](#toc)

## core/Router

### `Router.useParams()`

Return an object of key/value pairs of the dynamic params.

### `Router.navigateTo(path)`

Change location and render new component.

### `Router.subscribe({path, Component})`

Subscribe Component to Router with path.

### `Router.handlePopstate()`

Handle popstate event. Muse set this method to window.popstate event for using router.

### `Routes({$parent, routes, Header?})`

Set routes. Header Component is optinal argument.

```js
didMount(){
    const routes = [
        { path: '/', Component: Home },
        { path: '/foo', Component: Foo },
        { path: '/bar', Component: Bar },
    ];

    new Routes({ $parent: this.$parent, routes});
}
```

[🔼 TOC](#toc)

## core/Store

### `createAction(type, createPayload)`

Return type and action.

```js
import { createAction } from '@/core/Store';

const [ADD_TODO, addTodo] = createAction('ADD_TODO', todo => {
    return { payload: { todo } };
});
```

### `createStore(initalState, reducer)`

Create a store.

```js
import { createStore } from '@/core/Store';

const fooStore = createStore(initalState, fooReducer);
```

[🔼 TOC](#toc)

## Example

### Simple Counter

```js
import { Component } from '@/core/Component';

class Counter extends Component {
    constructor({ $parent }) {
        super({ $parent });
        this.setup({
            state: { count: 0 },
            element: `<div class="counter"></div>`,
        });
    }

    onIncrease() {
        this.setState({ count: this.state.count + 1 });
    }

    onDecrease() {
        this.setState({ count: this.state.count - 1 });
    }

    setEvent() {
        return [
            ['.increase__button', 'click', this.onIncrease],
            ['.decrease__button', 'click', this.onDecrease],
        ];
    }

    template() {
        const { count } = this.state;
        return `
            <h1>${count}</h1>
            <button class="increase__button">+</button>
            <button class="decrease__button">-</button>
        `;
    }
}
```

[🔼 TOC](#toc)

## License

This project is [MIT license](./LICENSE).
