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
  }, []); // Empty dependency array means this effect runs once on component mount // Empty dependency array means this effect runs once on component mount
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
            <div className="icons">
              <button
                className="icon-button"
                onClick={() => handleVectorIconClick(index)}
              >
                <VectorIcon />
              </button>
              <button className="icon-button">
                <PencilIcon />
              </button>
              <button className="icon-button">
                <BinIcon />
              </button>
            </div>

            <p className="list-title">{task.title}</p>

            <p className="list-author">{task.author}</p>
            <p className="list-date-created">{task.createdAt}</p>
            <p className="list-note">{task.note}</p>
          </div>
        ))}
        <button
          onClick={() => handleAddTask({ title: '', author: '', note: '' })}
          className="add-button"
        >
          Dodaj
        </button>
      </div>
    </div>
  );
};
