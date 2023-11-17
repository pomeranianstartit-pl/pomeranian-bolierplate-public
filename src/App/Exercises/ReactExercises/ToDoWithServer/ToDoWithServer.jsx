import { useState, useEffect } from 'react';

import { Todo } from './components/Todo';
import { FormTodo } from './components/FormTodo';

import { apiRequest } from './components/helpers';

import { API_URL, TEXTS } from './components/constants';

export function Exercise() {
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isForm, setIsForm] = useState(false);
  const [editedItem, setEditedItem] = useState(null);

  const fetchTodos = () => {
    apiRequest(API_URL, {
      loadingHandler: setLoading,
      errorHandler: setError,
      updateHandler: setTodos,
      errorMessage: TEXTS.API.ERRORS.GET_DATA,
    });
  };

  const handleFormVisibility = () => {
    setIsForm(!isForm);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  if (loading) {
    return <div>{TEXTS.LOADER}</div>;
  }

  if (error) {
    return (
      <div>
        <div>{TEXTS.ERROR}</div>
        <button onClick={fetchTodos}>{TEXTS.BUTTON_REFRESH}</button>
      </div>
    );
  }

  if (!isForm && todos.length === 0) {
    return (
      <div>
        <div>{TEXTS.EMPTY}</div>
        <button onClick={handleFormVisibility}>{TEXTS.BUTTON_ADD}</button>
        <button onClick={fetchTodos}>{TEXTS.BUTTON_REFRESH}</button>
      </div>
    );
  }

  return (
    <>
      <h2>{TEXTS.TITLE}</h2>
      {isForm && (
        <FormTodo
          editedItem={editedItem}
          setEditedItem={setEditedItem}
          handleFormVisibility={handleFormVisibility}
          // handleBack={handleBack}
          setTodos={setTodos}
        />
      )}
      {!isForm && (
        <>
          <button onClick={handleFormVisibility}>{TEXTS.BUTTON_ADD}</button>
          {todos.map((todo) => (
            <Todo
              key={todo.id}
              todo={todo}
              setEditedItem={setEditedItem}
              handleFormVisibility={handleFormVisibility}
              setTodos={setTodos}
            />
          ))}
          <button onClick={handleFormVisibility}>{TEXTS.BUTTON_ADD}</button>
        </>
      )}
    </>
  );
}
