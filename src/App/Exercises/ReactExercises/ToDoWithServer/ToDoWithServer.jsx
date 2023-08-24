import React, { useEffect } from 'react';
import { useState } from 'react';
import './style.css';
import { CheckIcon } from '../../../Components/Icons/CheckIcon';
import { TrashIcon } from '../../../Components/Icons/TrashIcon';
import { FrameIcon } from '../../../Components/Icons/FrameIcon';
import apiClient from '../../../ApiClients/LocalDevApiClient';
import { AddToDoItem } from './AddToDoItem/index';
import { EmptyToDoList } from './EmptyToDoList/index';
import { EditToDoItem } from './EditToDoItem/index';

export function ToDoWithServer() {
  const [toDoUrl, setToDoUrl] = useState([]);
  const [actionErrorMessage, setActionErrorMessage] = useState(' ');
  const [actionErrorId, setActionErrorId] = useState(-1);
  const [generalErrorMessage, setGeneralErrorMessage] = useState(' ');

  const getToDo = async () => {
    try {
      const json = await apiClient.getToDoList();
      setToDoUrl(json);
    } catch (error) {
      setGeneralErrorMessage('Błąd przy pobieraniu listy zadań');
    } finally {
    }
  };

  const handleRemove = async (id) => {
    try {
      const json = await apiClient.remove(id);
    } catch (error) {
      setActionErrorId(id);
      setActionErrorMessage('Nie udało się usunąć');
    } finally {
      getToDo();
    }
  };

  const markAsDone = async (id) => {
    try {
      const json = await apiClient.markAsDone(id);
    } catch (error) {
      setActionErrorId(id);
      setActionErrorMessage('Nie udało się zmienić');
    } finally {
      getToDo();
    }
  };

  function formatDate(dateString) {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1; // Miesiące są numerowane od 0 do 11
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes();

    const formattedDate = `${day < 10 ? '0' : ''}${day}.${
      month < 10 ? '0' : ''
    }${month}.${year}, ${hours}:${minutes < 10 ? '0' : ''}${minutes}`;

    return formattedDate;
  }

  useEffect(() => {
    getToDo();
  }, []);

  return (
    <div className="wrapper-todo">
      <a href="http://localhost:3000/exercises/react/todo-with-server">
        {' '}
        <span>&larr;</span>
        <b>ToDo</b>
      </a>
      <p>Tutaj znajdziesz listę swoich zadań.</p>
      <div className="buttonAddNewList">
        <EmptyToDoList />
        <AddToDoItem />
        <EditToDoItem />
        <button>+</button>
      </div>

      <div className="general-error">{generalErrorMessage}</div>
      <div className="lists-elements">
        {Array.isArray(toDoUrl) &&
          toDoUrl.map(
            ({ id, title, createdAt, author, isDone, doneDate, note }) => (
              <div
                className={isDone ? 'list-element disabled' : 'list-element'}
              >
                <div className="content">
                  <h3>{title}</h3>
                  <p className="author">{author}</p>
                  <p className="date">{formatDate(createdAt)}</p>
                  <p className="note">{note}</p>
                </div>
                <div className="icons">
                  <div className="action-icons">
                    <span
                      className="action-icon"
                      onClick={() => markAsDone(id)}
                    >
                      {isDone == false && (
                        <CheckIcon color="#23213D" width="35" height="25" />
                      )}
                    </span>
                    <span
                      className="action-icon"
                      onClick={() => handleRemove(id)}
                    >
                      <TrashIcon />
                    </span>
                    <span className="action-icon">
                      <FrameIcon />
                    </span>
                    <p className="action-error">
                      {actionErrorId == id && actionErrorMessage}
                    </p>
                  </div>
                  {isDone && (
                    <div className="status-ok">
                      <CheckIcon color="#07C23B" width="50" height="35" />
                      <p className="date">{formatDate(doneDate)}</p>
                    </div>
                  )}
                </div>
              </div>
            )
          )}
      </div>
    </div>
  );
}
