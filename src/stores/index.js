// store
import { createStore } from 'redux';

import tasksReducer from '../reducers/tasks';

export const store = createStore(tasksReducer);
