import React, {createContext, useState} from 'react'
import {v4 as uuid} from 'uuid'
const id = uuid();

export const TaskListContext = createContext();

const TaskListContextProvider = (props) => {

    const [tasks, setTasks] = useState([
        {name: "Read task", id: 1},
        {name: "Buy foods", id: 2},
        {name: "Get money", id: 3}
    ]);

    const [editTask, setEditTask] = useState(null);

    const addTask = name => {
        setTasks([ ...tasks, {name, id: id} ])
    };

    const removeTask = id => {
      setTasks(tasks.filter(task => task.id !== id))
    };

    const clearList = () => {
        setTasks([])
    };

    const findItem = id => {
        let item = tasks.find(task => task.id === id);
        setEditTask(item)
    };

    const editTaskName = (name, id) => {
        let newTask = tasks.map(task => (task.id === id) ? {name, id} : task);
        setTasks(newTask);
    };

    return (
        <TaskListContext.Provider value={{tasks, addTask, removeTask, clearList, findItem, editTaskName, editTask}}>
            {props.children}
        </TaskListContext.Provider>
    )
};

export default TaskListContextProvider;