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
        id: Date.now(),
      };

      // Call the addTaskToList function to add the new task
      addTaskToList(newTask);

      // Clear input fields
      setTitle('');
      setAuthor('');
      setNote('');

      // After adding the task, fetch the updated list
      fetchExternalTodo();
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
