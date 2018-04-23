import { createStore } from 'redux';

import tasksReducer from '../reducers/tasks';

export const taskStore = createStore(tasksReducer);