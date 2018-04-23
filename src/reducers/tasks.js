import { INPUT_TASK, ADD_TASK } from '../actions/tasks';

const initialState = {
    task: '',
    tasks: []
};

export default function tasksReducer(state = initialState, action) {
    switch (action.type) {
        case INPUT_TASK:
        console.log('1##########', state);
            return {
                ...state,
                task: action.payload.task
            };
        case ADD_TASK:
            return {
                ...state,
                tasks: state.tasks.concat([action.payload.task])
            };
        default:
            return state;
    }
}