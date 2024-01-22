import { useState } from 'react';

import { apiRequest, formatDateAndTime } from '../helpers';

import { API_URL, TEXTS } from '../constants';
import check from '../../Images/Icons/Check.svg';
import editIcon from '../../Images/Icons/Edit.svg';
import trashIcon from '../../Images/Icons/trash.svg';
import checkGreen from '../../Images/Icons/CheckGreen.svg';
import redCheck from '../../Images/Icons/CheckRed.svg';
import trashRed from '../../Images/Icons/TrashRed.svg';
import './styles.css';

export const Todo = ({
  todo,
  setTodos,
  setEditedItem,
  handleFormVisibility,
}) => {
  const [markLoading, setMarkLoading] = useState(false);
  const [markError, setMarkError] = useState(null);

  const [deleteLoading, setDeleteLoading] = useState(false);
  const [deleteError, setDeleteError] = useState(null);

  const todoClass = todo.isDone
    ? 'ToDoWithServer--ToDo-Div ToDoWithServer--ToDo-Div-DoneToDo'
    : 'ToDoWithServer--ToDo-Div';
  const markAsDone = (id) => {
    apiRequest(`${API_URL}/${id}/markAsDone`, {
      method: 'PUT',
      id,
      loadingHandler: setMarkLoading,
      errorHandler: setMarkError,
      updateHandler: (data) => {
        setTodos((prevState) =>
          prevState.map((todo) => {
            if (todo.id === id) return data;

            return todo;
          })
        );
      },
      errorMessage: TEXTS.API.ERRORS.MARK,
    });
  };

  const deleteTodo = (id) => {
    apiRequest(`${API_URL}/${id}`, {
      method: 'DELETE',
      id,
      loadingHandler: setDeleteLoading,
      errorHandler: setDeleteError,
      updateHandler: (data) => {
        setTodos((prevState) => prevState.filter((todo) => todo.id !== id));
      },
      errorMessage: TEXTS.API.ERRORS.DELETE,
    });
  };

  const handleEdit = (todo) => {
    setEditedItem(todo);
    handleFormVisibility();
  };

  return (
    <div key={todo.id} className={todoClass}>
      <h3>{todo.title}</h3>
      <span className="ToDoWithServer--ToDo-Span">{todo.author}</span>
      <span className="ToDoWithServer--ToDo-Span">
        {formatDateAndTime(todo.createdAt)}
      </span>
      <p className="ToDoWithServer--ToDo-paragraph">{todo.note}</p>

      {!todo.isDone && (
        <button
          className="ToDo--one--button"
          disabled={markLoading}
          onClick={() => markAsDone(todo.id)}
        >
          {markLoading ? (
            TEXTS.FORM.MARK.LOADING
          ) : (
            <img
              className="image-check checkIcon_position"
              src={check}
              alt="check"
            />
          )}
        </button>
      )}
      {todo.isDone && (
        <div>
          <img
            className="image-check checkGreenIcon_position"
            src={checkGreen}
            alt="checkGreen"
          />
          <span className="ToDoWithServer--ToDo-Span-doneDate">
            {formatDateAndTime(todo.doneDate)}
          </span>
        </div>
      )}

      <button className="ToDo--one--button" onClick={() => handleEdit(todo)}>
        <img
          className="image-check editIcon_position"
          src={editIcon}
          alt="edit"
        />
      </button>

      {!deleteLoading ? (
        <button
          className="ToDo--one--button"
          onClick={() => deleteTodo(todo.id)}
        >
          <img
            className="image-check trashIcon_position"
            src={trashIcon}
            alt="trash"
          />
        </button>
      ) : (
        <div>{TEXTS.FORM.DELETE.LOADING}</div>
      )}

      {markError ? (
        <div>
          <div className="div-position-error-mark">{TEXTS.FORM.MARK.ERROR}</div>
          <button
            className="ToDo--one--button"
            disabled={markLoading}
            onClick={() => markAsDone(todo.id)}
          >
            <img
              className="image-check checkIcon_position"
              src={redCheck}
              alt="redCheck"
            />
          </button>
        </div>
      ) : (
        ''
      )}
      {deleteError ? (
        <div>
          <div className="div-position-error-mark">
            {TEXTS.FORM.DELETE.ERROR}
          </div>
          <button
            className="ToDo--one--button"
            onClick={() => deleteTodo(todo.id)}
          >
            <img
              className="image-check trashIcon_position"
              src={trashRed}
              alt="trash"
            />
          </button>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};
