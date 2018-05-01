import React from 'react';

const TodoApp = ({ task, tasks, inputTask, addTask, deleteTask }) => {
    return (
        <div>
            <input type="text" value={task} onChange={(e) => inputTask(e.target.value)} />
            <input type="button" value="Add" onClick={() => addTask(task)} />
            <ul>
                {
                    tasks.map((item, i) => {
                        return (
                            <li key={i}>{item}<button onClick={() => deleteTask(i)}>delete</button></li>
                        );
                    })
                }
            </ul>
        </div>
    );
}

export default TodoApp;
