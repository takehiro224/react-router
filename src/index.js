import React from 'react';
import ReactDOM from 'react-dom';

import { taskStore } from './stores/index';
import TodoApp from './components/TodoApp';


const render = (store) => {
    ReactDOM.render(
        <TodoApp store={store} />,
        document.getElementById('root')
    );
}

taskStore.subscribe(() => render(taskStore));

render(taskStore);