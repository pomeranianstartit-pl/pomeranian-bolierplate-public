import axios from 'axios';
import { formatDate } from '../../../../Helpers/formatDate';
import { BinIcon } from '../../../../Images/BinIcon';
import { EditIcon } from '../../../../Images/EditIcon';
import { CheckMarkIcon } from '../../../../Images/CheckMarkIcon';
import './TodoItem.css';
import { BASE_API_URL } from '../index';
import { useState } from 'react';

export function TodoItem({
  todo,
  handleFetchTodoData,
  setIdForEdit,
  setFormVisibility,
  updateTodoList,
  setTest,
}) {
  const { id, title, author, createdAt, isDone, doneDate, note } = todo;
  const [isRemoveError, setRemoveError] = useState(false);

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

  function handleMarkAsDoneClick() {
    axios
      .put(BASE_API_URL + '/todo/' + id + '/markAsDone')
      .then((response) => {
        const updatedTodo = response.data;
        updateTodoList(updatedTodo);
      })
      .catch(() => {
        // -----
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
          className="todo-item__actions__button"
          onClick={() => handleRemoveClick()}
        >
          <BinIcon isError={isRemoveError} />
        </button>
        <button
          className="todo-item__actions__button"
          onClick={() => {
            setIdForEdit(id);
            setFormVisibility(true);
          }}
        >
          <EditIcon />
        </button>
        <button
          className="todo-item__actions__button"
          onClick={() => {
            handleMarkAsDoneClick();
          }}
        >
          <CheckMarkIcon />
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
              &#10003;
            </div>
            <div>{formatDate(doneDate)}</div>
          </>
        )}
      </div>
    </div>
  );
}