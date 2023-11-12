import { useState } from 'react';

import { apiRequest } from '../helpers';

import { API_URL, TEXTS } from '../constants';

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
    <div key={todo.id}>
      <h3>{todo.title}</h3>
      <p>{todo.note}</p>
      {!todo.isDone && (
        <button disabled={markLoading} onClick={() => markAsDone(todo.id)}>
          {markLoading ? TEXTS.FORM.MARK.LOADING : TEXTS.FORM.MARK.TEXT}
        </button>
      )}

      <button onClick={() => handleEdit(todo)}>{TEXTS.FORM.EDIT.TEXT}</button>

      {!deleteLoading ? (
        <button onClick={() => deleteTodo(todo.id)}>
          {TEXTS.FORM.DELETE.TEXT}
        </button>
      ) : (
        <div>{TEXTS.FORM.DELETE.LOADING}</div>
      )}

      {markError ? <div>{TEXTS.FORM.MARK.ERROR}</div> : ''}
      {deleteError ? <div>{TEXTS.FORM.DELETE.ERROR}</div> : ''}
    </div>
  );
};
