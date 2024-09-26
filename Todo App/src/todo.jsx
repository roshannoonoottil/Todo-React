import React, { useState, useEffect } from 'react';
import './todo.css'
import TaskList from './list';

function ToDoList() {
    const [task, setTask] = useState('');            // To hold the current task input
    const [tasks, setTasks] = useState([]);          // To hold the list of tasks

    // Effect hook to load tasks from localStorage on component mount
    useEffect(() => {
        const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
        setTasks(storedTasks);
    }, []);

    // Function to handle adding a new task
    const addTask = () => {
        if (task === '') {
            alert('Please enter a task!');
            return;
        }

        const newTasks = [...tasks, task];           // Add the new task to the task array
        setTasks(newTasks);                          // Update the state with the new array
        localStorage.setItem('tasks', JSON.stringify(newTasks));  // Save to localStorage
        setTask('');                                 // Clear the input field
    };

    // Function to handle task removal
    const removeTask = (index) => {
        const newTasks = tasks.filter((_, i) => i !== index);  // Remove the task by index
        setTasks(newTasks);                                    // Update the state
        localStorage.setItem('tasks', JSON.stringify(newTasks)); // Update localStorage
    };

    return (
        <div className="todo-container">
    <h1>To-Do List</h1>

    <input 
        type="text" 
        value={task} 
        onChange={(e) => setTask(e.target.value)} 
        placeholder="Enter a new task"
    />

    <button onClick={addTask}>Add Task</button>

    <TaskList tasks={tasks} removeTask={removeTask} />
</div>

    );
}

export default ToDoList;
