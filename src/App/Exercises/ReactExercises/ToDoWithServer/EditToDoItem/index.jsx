import './style.css';
import React, { useEffect } from 'react';
import { useState } from 'react';
import apiClient from '../../../../ApiClients/LocalDevApiClient';

export function EditToDoItem({ onSaveClick, onResetClick, id }) {
  const [editId, setEditId] = useState(-1);
  const [editTitle, setEditTitle] = useState(' ');
  const [editNote, setEditNote] = useState(' ');
  const [editAuthor, setEditAuthor] = useState(' ');

  const getToDoItem = async () => {
    const json = await apiClient.getToDoItem(id);
    setEditId(id);
    setEditTitle(json.title);
    setEditNote(json.note);
  };

  const handleSave = async () => {
    const json = await apiClient.saveToDoItem(
      editId,
      editTitle,
      editNote,
      editAuthor
    );
    onSaveClick();
  };

  const handleTitleChange = (event) => {
    setEditTitle(event.target.value);
  };

  const handleNoteChange = (event) => {
    setEditNote(event.target.value);
  };

  useEffect(() => {
    getToDoItem();
  }, []);

  return (
    <div>
      <div className="wrapper-edit-todo-item">
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
          <button onClick={onResetClick}>COFNIJ</button>
          <button type="submit" onClick={handleSave}>
            ZAPISZ
          </button>
        </div>
      </div>
    </div>
  );
}
