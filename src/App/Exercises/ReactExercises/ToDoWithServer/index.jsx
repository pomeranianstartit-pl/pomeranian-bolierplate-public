// ToDoWithServer.js

import React, { useState } from 'react';
import './styles.css';
import { ListView } from './ListView/ListView';
import { AddTaskView } from './AddTaskView/AddTaskView';

export const ToDoWithServer = () => {
  const [isAddTaskViewVisible, setIsAddTaskViewVisible] = useState(false);
  const [todo, setTodo] = useState([]); // Initialize the to-do list state

  const toggleAddTaskView = () => {
    setIsAddTaskViewVisible(!isAddTaskViewVisible);
  };

  const handleGoBackToListView = () => {
    setIsAddTaskViewVisible(false); // Go back to ListView
  };

  const handleAddTask = (newTask) => {
    // Create a new task object
    const taskToAdd = {
      id: Date.now(), // You can generate a unique ID
      title: newTask.title,
      author: newTask.author,
      note: newTask.note,
      createdAt: new Date().toLocaleString(),
    };

    // Update the to-do list state with the new task
    setTodo([...todo, taskToAdd]);

    // Go back to ListView
    setIsAddTaskViewVisible(false);
  };

  return (
    <div>
      <h1 className="header">TO DO</h1>

      {isAddTaskViewVisible ? (
        <AddTaskView
          toggleAddTaskView={toggleAddTaskView}
          goBackToListView={handleGoBackToListView}
          addTaskToList={handleAddTask}
        />
      ) : (
        <ListView
          toggleAddTaskView={toggleAddTaskView}
          todo={todo} // Pass the to-do list as a prop
        />
      )}
    </div>
  );
};
