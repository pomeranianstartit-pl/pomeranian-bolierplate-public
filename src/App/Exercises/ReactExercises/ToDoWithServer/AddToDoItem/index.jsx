import './style.css';
import React, { useEffect } from 'react';
import { useState } from 'react';
import apiClient from '../../../../ApiClients/LocalDevApiClient';

export function AddToDoItem({ onAddClick, onResetClick }) {
  const [editTitle, setEditTitle] = useState(' ');
  const [editNote, setEditNote] = useState(' ');
  const [editAuthor, setEditAuthor] = useState(' ');

  const handleAdd = async () => {
    const json = await apiClient.addToDoItem(editTitle, editNote, editAuthor);
    onAddClick();
  };

  const handleTitleChange = (event) => {
    setEditTitle(event.target.value);
  };

  const handleNoteChange = (event) => {
    setEditNote(event.target.value);
  };

  const handleAuthorChange = (event) => {
    setEditAuthor(event.target.value);
  };

  return (
    <div className="wrapper-add-todo-item">
      <h3>Dodawanie zadania.</h3>

      <div className="field">
        <div className="label">Tytuł</div>
        <input
          placeholder="Wpisz tytuł"
          type="text"
          value={editTitle}
          onChange={handleTitleChange}
        ></input>
      </div>
      <div className="field">
        <div className="label">Autor</div>
        <input
          placeholder="Wpisz imię autora"
          type="text"
          value={editAuthor}
          onChange={handleAuthorChange}
        ></input>
      </div>
      <div className="field">
        <div className="label">Treść</div>
        <input
          placeholder="Treść"
          type="text"
          value={editNote}
          onChange={handleNoteChange}
        ></input>
      </div>
      <div className="error">Wystąpił błąd, spróbuj ponownie.</div>
      <div className="action-buttons">
        <button type="reset" onClick={onResetClick}>
          COFNIJ
        </button>
        <button type="submit" onClick={handleAdd}>
          DODAJ
        </button>
      </div>
    </div>
  );
}
