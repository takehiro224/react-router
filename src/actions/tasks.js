export const INPUT_TASK = 'INPUT_TASK';
export const ADD_TASK = 'ADD_TASK';

export const inputTask = (task) => ({
    type: INPUT_TASK,
    payload: {
        task
    }
});

export const addTask = (task) => ({
    type: ADD_TASK,
    payload: {
        task
    }
});