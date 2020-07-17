import React, { useContext, useState, useEffect } from 'react';
import { TaskListContext } from '../context/TaskListContext';

function TaskForm() {
    const { addTask, clearList, editTaskName, editTask } = useContext(TaskListContext);

    const [name, setName] = useState("");

    const handleChange = e => {
        setName(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        if (editTask === null) {
            addTask(name);
            setName("");
        } else {
            editTaskName(name, editTask.id)
        }
    };

    useEffect(() => {
        if(editTask !== null) {
            setName(editTask.name);
            console.log(editTask);
        } else {
            setName("")
        }
    }, [editTask]);

    return(
        <form onSubmit={handleSubmit} className="form">
            <input
                onChange={handleChange}
                value={name}
                type="text"
                className="task-input"
                placeholder="Add task..."
                required
            />
            <div className="buttons">
                <button type="submit" className="btn add-task-btn">Add Task</button>
                <button onClick={clearList} className="btn clear-btn">Clear</button>
            </div>
        </form>
    )
}

export default TaskForm;