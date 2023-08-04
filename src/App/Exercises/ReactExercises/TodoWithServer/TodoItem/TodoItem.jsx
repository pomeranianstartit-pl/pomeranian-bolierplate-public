import { formatDate } from '../formatDate';
import './TodoItem.css';
import { BASE_API_URL } from '../TodoWithServer.jsx';
import { BinIcon } from './BinIcon/BinIcon.jsx';
import axios from 'axios';
import { useState } from 'react';
import { MarkDoneIcone } from './MarkDoneIcon/MarkDoneIcon.jsx';
import { EditIcon } from './EditIcon/EditIcon.jsx';

export function TodoItem({
  todo,
  handleFetchTodoData,
  setIdForEdit,
  setFormVisibility,
}) {
  const { id, title, author, createdAt, isDone, doneDate, note } = todo;

  const [isRemoveError, setRemoveError] = useState(false);
  //const [isDoneError, setDoneError] = useState(false);

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
        //setDoneError(true);
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
        {!todo.isDone && (
          <button
            className="todo-item__actions__button 
          todo-item__actions__icon"
            onClick={() => handleDoneClick()}
          >
            <MarkDoneIcone />
          </button>
        )}
        <button
          className="todo-item__actions__button 
          todo-item__actions__icon"
          onClick={() => {
            setIdForEdit(id);
            setFormVisibility(true);
          }}
        >
          <EditIcon />
        </button>

        <button
          className="todo-item__actions__button 
          todo-item__actions__icon"
          onClick={() => handleRemoveClick()}
        >
          <BinIcon isError={isRemoveError} />
        </button>
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
              <MarkDoneIcone isDone={isDone} />
            </div>
            <div className="todo-item__actions__date">
              {formatDate(doneDate)}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
