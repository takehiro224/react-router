import { INPUT_TASK, ADD_TASK, DELETE_TASK } from '../actions/tasks';

const initialState = {
    task: '',
    tasks: []
};

export default function tasksReducer(state = initialState, action) {
    switch (action.type) {
        case INPUT_TASK:
            return {
              ...state,
              task: action.payload.task
            };
        case ADD_TASK:
            return {
                ...state,
                task: '',
                tasks: state.tasks.concat([action.payload.task])
            };
        case DELETE_TASK:
        console.log(action.payload)
            return {
                ...state,
                //tasks: state.tasks.splice(action.payload.index, 1)
                tasks: []
            };
        default:
            return state;
    }
}
