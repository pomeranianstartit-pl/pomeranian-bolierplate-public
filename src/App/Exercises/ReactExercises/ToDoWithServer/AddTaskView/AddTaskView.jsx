import React, { useState } from 'react';
import './styles.css';

export const AddTaskView = ({
  addTaskToList,
  toggleAddTaskView,
  fetchExternalTodo,
}) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [note, setNote] = useState('');

  const handleAddTask = () => {
    if (title && author && note) {
      const newTask = {
        title,
        author,
        note,
      };

      // Make a POST request to add the new task to the server
      fetch('http://localhost:3333/api/todo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newTask), // Convert the task object to a JSON string
      })
        .then((response) => {
          if (response.ok) {
            return response.json(); // Parse the JSON response
          } else {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
        })
        .then((data) => {
          // The server responded with the new task, add it to the list
          addTaskToList(data);

          // Clear input fields
          setTitle('');
          setAuthor('');
          setNote('');

          // After adding the task, fetch the updated list
        })
        .catch((error) => {
          // Handle any errors that occurred during the fetch
          console.error('POST error:', error);
          alert(
            'Failed to add the task to the server. Please check your network connection and try again.'
          );
        });
    } else {
      alert('Please fill in all fields.');
    }
  };

  const handleGoBack = () => {
    // Toggle the visibility of AddTaskView and go back to ListView
    toggleAddTaskView();
  };

  return (
    <div>
      <p className="avt-header">Dodawanie zadania</p>
      <p className="avt-p">Tytuł</p>
      <input
        className="avt-input"
        placeholder="Kupić parasol na balkon"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      ></input>
      <p className="avt-p">Autor</p>
      <input
        className="avt-input"
        placeholder="Wojtek"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      ></input>
      <p className="avt-p">Treść</p>
      <input
        className="avt-third-input"
        placeholder="Zmierzyć ile mamy miejsca na balkonie od barierki do kanapy."
        value={note}
        onChange={(e) => setNote(e.target.value)}
      ></input>

      <div className="avt-buttons">
        <button className="avt-button-1" onClick={handleGoBack}>
          COFNIJ
        </button>
        <button className="avt-button-2" onClick={handleAddTask}>
          DODAJ
        </button>
      </div>
    </div>
  );
};
