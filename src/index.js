import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// import { store } from './stores/index';
import store, { persistor } from './configureStore';
// import TodoApp from './containers/TodoApp';
import { PersistGate } from 'redux-persist/integration/react'
import FormikTest from './components/Form'
//import FormikYup from './components/FormikYup'

const render = (store) => {
    ReactDOM.render(
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <FormikTest />
          </PersistGate>
        </Provider>,
        document.getElementById('root')
    );
}
//store.subscribe(() => render(store));

render(store);
