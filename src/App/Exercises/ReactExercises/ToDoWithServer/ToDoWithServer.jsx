import { useState, useEffect } from 'react';

import { Todo } from './components/Todo/index';
import { FormTodo } from './components/FormTodo/index';

import { apiRequest } from './components/helpers';

import { API_URL, TEXTS } from './components/constants';

export function Exercise() {
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  // TODO:
  // GENERIC ERROR
  // const [genericError, setGenericError] = useState(false);
  // [
  //   {
  //     id: 1,
  //     errors: [
  //       {
  //         type: 'DELETE',
  //         message: 'message',
  //       },
  //       {
  //         type: 'MARK_AS_DONE',
  //         message: 'message',
  //       },
  //     ],
  //   },
  // ];

  // DELETE
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [deleteErrorId, setDeleteErrorId] = useState(null);

  // MARK AS DONE
  const [markLoading, setMarkLoading] = useState(false);
  const [markErrorId, setMarkErrorId] = useState(null);

  // FORM
  const [isForm, setIsForm] = useState(false);

  // HANDLING FORM
  const [formLoading, setFormLoading] = useState(false);
  const [formErrorId, setFormErrorId] = useState(null);
  const [editedId, setEditedId] = useState(null);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [note, setNote] = useState('');

  const sendDisabled = !title || !author || !note;

  const [isEditForm, setEditForm] = useState(false);

  const fetchTodos = () => {
    apiRequest(API_URL, {
      loadingHandler: setLoading,
      errorHandler: setError,
      updateHandler: setTodos,
      errorMessage: TEXTS.API.ERRORS.GET_DATA,
    });
  };

  const deleteTodo = (id) => {
    apiRequest(`${API_URL}/${id}`, {
      method: 'DELETE',
      id,
      loadingHandler: setDeleteLoading,
      errorHandler: setDeleteErrorId,
      updateHandler: (data) => {
        setTodos((prevState) => prevState.filter((todo) => todo.id !== id));
      },
      errorMessage: TEXTS.API.ERRORS.DELETE,
    });
  };

  const markAsDone = (id) => {
    apiRequest(`${API_URL}/${id}/markAsDone`, {
      method: 'PUT',
      id,
      loadingHandler: setMarkLoading,
      errorHandler: setMarkErrorId,
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

  const addTodo = () => {
    apiRequest(API_URL, {
      method: 'POST',
      loadingHandler: setFormLoading,
      errorHandler: setFormErrorId,
      body: { title, author, note },
      updateHandler: (data) => {
        setTodos((prevState) => [...prevState, data]);
        handleFormVisibility();
        setTitle('');
        setAuthor('');
        setNote('');
      },
      errorMessage: TEXTS.API.ERRORS.ADD,
    });
  };

  const editTodo = () => {
    apiRequest(`${API_URL}/${editedId}`, {
      method: 'PUT',
      id: editedId,
      loadingHandler: setFormLoading,
      errorHandler: setFormErrorId,
      body: { title, author, note },
      updateHandler: (data) => {
        setTodos((prevState) =>
          prevState.map((todo) => {
            if (todo.id === editedId) return data;

            return todo;
          })
        );
        setEditedId(null);
        setEditForm(false);
        setTitle('');
        setAuthor('');
        setNote('');
        handleFormVisibility();
      },
      errorMessage: TEXTS.API.ERRORS.EDIT,
    });
  };

  const handleAddToDo = (e) => {
    e.preventDefault();
    if (isEditForm) {
      editTodo();
    } else {
      addTodo();
    }
  };

  const handleFormVisibility = () => {
    setIsForm(!isForm);
  };

  const handleEdit = (todo) => {
    setEditForm(true);
    setEditedId(todo.id);
    setTitle(todo.title);
    setAuthor(todo.author);
    setNote(todo.note);
    handleFormVisibility();
  };

  const handleBack = () => {
    handleFormVisibility();
    setTitle('');
    setAuthor('');
    setNote('');
    setEditForm(false);
    setEditedId(null);
    setFormErrorId(null);
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
          handleAddToDo={handleAddToDo}
          title={title}
          setTitle={setTitle}
          author={author}
          setAuthor={setAuthor}
          note={note}
          setNote={setNote}
          formLoading={formLoading}
          sendDisabled={sendDisabled}
          formErrorId={formErrorId}
          handleBack={handleBack}
          isEditForm={isEditForm}
        />
      )}
      {!isForm && (
        <>
          <button onClick={handleFormVisibility}>{TEXTS.BUTTON_ADD}</button>
          {todos.map((todo) => (
            <Todo
              key={todo.id}
              todo={todo}
              markLoading={markLoading}
              deleteLoading={deleteLoading}
              markErrorId={markErrorId}
              deleteErrorId={deleteErrorId}
              markAsDone={markAsDone}
              handleEdit={handleEdit}
              deleteTodo={deleteTodo}
            />
          ))}
          <button onClick={handleFormVisibility}>{TEXTS.BUTTON_ADD}</button>
        </>
      )}
    </>
  );
}
