import React from 'react';
import './list.css'

const TaskList = ({ tasks, removeTask }) => {
    
    if (tasks.length === 0) {
        return <p>No tasks available</p>;
    }

    return (
        <ul className="task-list-container">
            {tasks.map((task, index) => (
                <li key={index}>
                    {task}
                    <button onClick={() => removeTask(index)}>Delete</button>
                </li>
            ))}
        </ul>
    );
};

export default TaskList;
