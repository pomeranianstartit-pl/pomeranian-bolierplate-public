import React, { useState, useEffect } from 'react';
import './styles.css';
import { VectorIcon } from '../Icons/VectorIcon';
import { PencilIcon } from '../Icons/PencilIcon';
import { BinIcon } from '../Icons/BinIcon';

export const ListView = () => {
  // State to hold the fetched data
  const [todo, setTodo] = useState([]);

  useEffect(() => {
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
        // Set the fetched data to the 'todo' state
        setTodo(data);
      })
      .catch((error) => {
        console.error('Fetch error:', error);
        // Handle any errors that occurred during the fetch
      });
  }, []); // Empty dependency array means this effect runs once on component mount

  return (
    <div className="to-do-wrapper">
      <div className="first-wrapper">
        <p className="to-do-header">Tutaj znajdziesz listę swoich zadań.</p>
        <button className="plus-button">+</button>
      </div>
      <div className="second-wrapper">
        {todo.map((task) => (
          <div className="to-do-list" key={task.id}>
            <div className="icons">
              <button className="icon-button">
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
        <button className="add-button">Dodaj</button>
      </div>
    </div>
  );
};
