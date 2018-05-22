// component
import React from 'react';
import { withStateHandlers } from 'recompose';

const TodoApp = ({ counter, incrementOn, task, tasks, inputTask, addTask, deleteTask }) => {
    return (
        <div>
            <div>{counter}</div>
            <button onClick={ () => incrementOn(1)}>Inc</button>
            <input type="text" value={task}
            onChange={(e) => inputTask(e.target.value)} />
            <input type="button" value="Add" onClick={() => addTask(task)} />
            <ul>
                {
                  tasks.map((item, i) => {
                    return (
                      <li key={i}>{item}
                        <button onClick={() => deleteTask(i)}>
                        delete
                        </button>
                      </li>
                    );
                  })
                }
            </ul>
        </div>
    );
}

const TodoAppRe = withStateHandlers(
  // ({ initialCounter = 0 }) => ({
  //   counter: initialCounter,
  // }),
  props => ({
    counter: 0
  }),
  {
    incrementOn: ({ counter }) => (value) => ({
      counter: counter + value,
    }),
  }
)(TodoApp)

export default TodoAppRe;
