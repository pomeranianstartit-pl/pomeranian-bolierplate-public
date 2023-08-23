import React, { useState, useEffect } from 'react';
import './styles.css';
import { VectorIcon } from '../Icons/VectorIcon';
import { PencilIcon } from '../Icons/PencilIcon';
import { BinIcon } from '../Icons/BinIcon';

export const ListView = ({ toggleAddTaskView }) => {
  const handleAddTaskClick = () => {
    toggleAddTaskView(); // Toggle the visibility of AddTaskView
  };

  // State to hold the fetched data from the external server
  const [externalTodo, setExternalTodo] = useState([]);
  const [selectedBoxes, setSelectedBoxes] = useState([]); // Track selected boxes
  const [editTask, setEditTask] = useState(null);

  const handleVectorIconClick = (index) => {
    // Check if the box is already selected
    if (selectedBoxes.includes(index)) {
      // If it's selected, remove it from the selectedBoxes array
      setSelectedBoxes(selectedBoxes.filter((boxIndex) => boxIndex !== index));
    } else {
      // If it's not selected, add it to the selectedBoxes array
      setSelectedBoxes([...selectedBoxes, index]);
    }
  };
  const handleDeleteTask = (taskId) => {
    // Send a DELETE request to your server to delete the task with taskId
    fetch(`http://localhost:3333/api/todo/${taskId}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        // If the delete request was successful, remove the task from externalTodo
        setExternalTodo((prevTodo) =>
          prevTodo.filter((task) => task.id !== taskId)
        );
      })
      .catch((error) => {
        console.error('Delete error:', error);
        // Handle any errors that occurred during the delete request
      });
  };

  const startEditTask = (task) => {
    // Set the task for editing
    setEditTask(task);
  };

  const cancelEditTask = () => {
    // Clear the edit state
    setEditTask(null);
  };

  const handleUpdateTask = () => {
    // Check if editTask is null
    if (!editTask) {
      return;
    }

    // Make a PUT request to update the task on the server
    fetch(`http://localhost:3333/api/todo/${editTask.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(editTask),
    })
      .then((response) => {
        // Check if the response status is OK (status code 200)
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        // Update the task in externalTodo with the edited data
        setExternalTodo((prevExternalTodo) => {
          return prevExternalTodo.map((task) =>
            task.id === editTask.id ? { ...task, ...editTask } : task
          );
        });
        // Clear the edit state
        setEditTask(null);
      })
      .catch((error) => {
        console.error('Update error:', error);
        // Handle any errors that occurred during the update
      });
  };

  const handleAddTask = (newTask) => {
    // Create a new task object
    const taskToAdd = {
      id: Date.now(),
      title: newTask.title,
      author: newTask.author,
      note: newTask.note,
      createdAt: new Date().toLocaleString(),
    };

    // Update the 'externalTodo' state with the new task
    setExternalTodo([...externalTodo, taskToAdd]);

    // Go back to ListView
    toggleAddTaskView();
  };

  const fetchExternalTodo = () => {
    // Make a GET request to the API endpoint
    fetch('http://localhost:3333/api/todo')
      .then((response) => {
        // Check if the response status is OK (status code 200)
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        // Parse the response as JSON
        return response.json();
      })
      .then((data) => {
        // Set the fetched data to the 'externalTodo' state
        setExternalTodo(data);
      })
      .catch((error) => {
        console.error('Fetch error:', error);
        // Handle any errors that occurred during the fetch
      });
  };

  useEffect(() => {
    // Call the fetchExternalTodo function when the component mounts
    fetchExternalTodo();
  }, []); // Empty dependency array means this effect runs once on component mount

  return (
    <div className="to-do-wrapper">
      <div className="first-wrapper">
        <p className="to-do-header">Tutaj znajdziesz listę swoich zadań.</p>
        <button onClick={handleAddTaskClick} className="plus-button">
          +
        </button>
      </div>
      <div className="second-wrapper">
        {externalTodo.map((task, index) => (
          <div
            className={`to-do-list ${
              selectedBoxes.includes(index) ? 'clicked' : ''
            }`}
            key={task.id}
          >
            {/* Icons */}
            <div className="icons">
              <button
                className="icon-button"
                onClick={() => handleVectorIconClick(index)}
              >
                <VectorIcon />
              </button>
              <button
                className="icon-button"
                onClick={() => startEditTask(task)}
              >
                <PencilIcon />
              </button>
              <button
                className="icon-button"
                onClick={() => handleDeleteTask(task.id)}
              >
                <BinIcon />
              </button>
            </div>

            {/* Task details */}
            {editTask && editTask.id === task.id ? (
              // Render input fields for editing when editTaskId matches
              <div className="edit-wrapper">
                <div className="edit-text">
                  <input
                    type="text"
                    value={editTask.title}
                    onChange={(e) =>
                      setEditTask({ ...editTask, title: e.target.value })
                    }
                  />
                  <input
                    type="text"
                    value={editTask.author}
                    onChange={(e) =>
                      setEditTask({ ...editTask, author: e.target.value })
                    }
                  />
                  <input
                    type="text"
                    value={editTask.note}
                    onChange={(e) =>
                      setEditTask({ ...editTask, note: e.target.value })
                    }
                  />
                </div>
                <div>
                  {/* Save and cancel buttons */}
                  <button
                    className="edit-buttons"
                    onClick={() => handleUpdateTask()}
                  >
                    Save
                  </button>
                  <button
                    className="edit-buttons"
                    onClick={() => cancelEditTask()}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              // Display task details if not in edit mode
              <>
                <p className="list-title">{task.title}</p>
                <p className="list-author">{task.author}</p>
                <p className="list-date-created">{task.createdAt}</p>
                <p className="list-note">{task.note}</p>
              </>
            )}
          </div>
        ))}
        <button className="add-button" onClick={handleAddTaskClick}>
          Dodaj
        </button>
      </div>
    </div>
  );
};
