import React from 'react';
import ReactDOM from 'react-dom';

import { store } from './stores/index';
import TodoApp from './components/TodoApp';


const render = (store) => {
    ReactDOM.render(
        <TodoApp store={store} />,
        document.getElementById('root')
    );
}

store.subscribe(() => render(store));

render(store);
