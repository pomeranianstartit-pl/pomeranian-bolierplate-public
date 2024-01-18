import { useState, useEffect } from 'react';
import { Todo } from './components/Todo';
import { FormTodo } from './components/FormTodo';
import { apiRequest } from './components/helpers';
import { API_URL, TEXTS } from './components/constants';
import './styles.css';
import { Button } from './components/Button/Button';

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
      <div className="div--container--EMPTY">
        <div className="div--TEXTS--Empty">{TEXTS.ERROR}</div>
        <Button
          classNames="button-refresh-size"
          onClick={fetchTodos}
          children={TEXTS.BUTTON_REFRESH}
        />
      </div>
    );
  }

  if (!isForm && todos.length === 0) {
    return (
      <div className="div--container--EMPTY">
        <div className="div--TEXTS--Empty">{TEXTS.EMPTY}</div>
        <Button
          classNames="button-refresh-size"
          onClick={handleFormVisibility}
          children={TEXTS.BUTTON_ADD}
        />
        {/* Moim zdaniem refresh jest niepotrzebny psuje, Szymon nie zauważył że w Figmie został później tylko button add. */}
        {/* <Button
          onClick={fetchTodos}
          value={TEXTS.BUTTON_REFRESH}
          variant={'secondary'}
        /> */}
      </div>
    );
  }

  return (
    <>
      {isForm && (
        <>
          <FormTodo
            editedItem={editedItem}
            setEditedItem={setEditedItem}
            handleFormVisibility={handleFormVisibility}
            // handleBack={handleBack}
            setTodos={setTodos}
          />
        </>
      )}
      {!isForm && (
        <>
          <div className="container--button-add-plus">
            <h4>{TEXTS.TITLE}</h4>
            <Button
              classNames="button_add_plus"
              onClick={handleFormVisibility}
              children="+"
            />{' '}
          </div>
          {todos.map((todo) => (
            <>
              <Todo
                key={todo.id}
                todo={todo}
                setEditedItem={setEditedItem}
                handleFormVisibility={handleFormVisibility}
                setTodos={setTodos}
              />
            </>
          ))}
          <Button onClick={handleFormVisibility} children={TEXTS.BUTTON_ADD} />
        </>
      )}
    </>
  );
}
