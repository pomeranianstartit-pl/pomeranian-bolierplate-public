import { formatDate } from '../formatDate';
import './TodoItem.css';
import { BASE_API_URL } from '../TodoWitchServer.jsx';
import { BinIcon } from './BinIcone/BinIcon.jsx';
import axios from 'axios';
import { useState } from 'react';
import markerDone from '../markerDone.svg';

export function TodoItem({ todo, handleFetchTodoData }) {
  const { id, title, author, createdAt, isDone, doneDate, note } = todo;
  const [isRemoveError, setRemoveError] = useState(false);
  const [isDoneError, setDoneError] = useState(false);

  const itemClasses = `todo-item ${isDone ? 'todo-item--darker' : ''}`;

  function handleRemoveClick() {
    axios
      .delete(BASE_API_URL + '/todo/' + id)
      .then(() => {
        handleFetchTodoData();
      })
      .catch(() => {
        setRemoveError(true);
      });
  }
  function handleDoneClick() {
    axios
      .put(BASE_API_URL + '/todo/' + id + '/markAsDone')
      .then(() => {
        handleFetchTodoData();
      })
      .catch(() => {
        setDoneError(true);
      });
  }

  return (
    <div className={itemClasses}>
      <div className="todo-item__wrapper">
        <h3 className="todo-item__wrapper__title">{title}</h3>
        <div className="todo-item__wrapper__text todo-item__wrapper__text--smaller">
          {author}
        </div>
        <div className="todo-item__wrapper__text todo-item__wrapper__text--smaller">
          {formatDate(createdAt)}
        </div>
        <p className="todo-item__wrapper__text">{note}</p>
      </div>
      <div className="todo-item__actions">
        <button
          className="todo-item__actions__button 
          todo-item__actions__icon"
          onClick={() => handleRemoveClick()}
        >
          <BinIcon isError={isRemoveError} />
        </button>
        {!todo.isDone && (
          <button onClick={() => handleDoneClick()}>
            <img src={markerDone} alt="markerDone" />
          </button>
        )}
        {isRemoveError && (
          <div className="todo-item__actions__error-message">
            nie udało się usunąć
          </div>
        )}

        {isDone && (
          <>
            <div
              className="todo-item__actions__icon 
              todo-item__actions__icon--check-mark"
            >
              &#10003;
            </div>
            <div>{formatDate(doneDate)}</div>
          </>
        )}
      </div>
    </div>
  );
}
