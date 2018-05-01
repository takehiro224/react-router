import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { store } from './stores/index';
import TodoApp from './containers/TodoApp';

const render = (store) => {
    ReactDOM.render(
        <Provider store={store}>
          <TodoApp />
        </Provider>,
        document.getElementById('root')
    );
}

//store.subscribe(() => render(store));

render(store);
