import { useState, useEffect } from 'react';
const API_URL = 'http://localhost:3333/api/todo';
const TEXTS = {
  LOADER: 'Ładowanie danych...',
  ERROR: 'Przepraszamy. Nie udało się pobrać listy zadań.',
  EMPTY: 'Brawo! Nie masz aktualnie żadnych zadań do zrealizowania.',
  BUTTON_REFRESH: 'ODSWIEŻ WIDOK',
};

const apiRequest = async (
  url,
  {
    id = null,
    method = 'GET',
    body = null,
    loadingHandler,
    errorHandler,
    errorMessage = '',
    updateHandler,
  }
) => {
  loadingHandler(true);
  errorHandler(false);

  try {
    let fetchOptions = null;

    if (method !== 'GET') {
      fetchOptions = {
        method, // method: method
        headers: {
          'Content-Type': 'application/json',
        },
      };
    }

    if (body) {
      fetchOptions.body = JSON.stringify(body);
    }

    const response = await fetch(url, fetchOptions);

    if (!response.ok) {
      throw new Error(errorMessage);
    }

    const data = await response.json();

    updateHandler(data);
  } catch (error) {
    if (id) {
      errorHandler(id);
    } else {
      errorHandler(errorMessage);
    }
  } finally {
    loadingHandler(false);
  }
};

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
      errorMessage: 'Failed to load data!',
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
      errorMessage: 'Failed to delete data!',
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
      errorMessage: 'Failed to mark as done!',
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
      errorMessage: 'Failed add!',
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
      errorMessage: 'Failed edit!',
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
        <button onClick={handleFormVisibility}>Dodaj zadanie</button>
        <button onClick={fetchTodos}>{TEXTS.BUTTON_REFRESH}</button>
      </div>
    );
  }

  return (
    <>
      <h2>Blok 38 - ToDo</h2>
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
          <button onClick={handleFormVisibility}>Dodaj zadanie</button>
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
          <button onClick={handleFormVisibility}>Dodaj zadanie</button>
        </>
      )}
    </>
  );
}

const FormTodo = ({
  isEditForm,
  handleAddToDo,
  title,
  setTitle,
  author,
  setAuthor,
  note,
  setNote,
  formLoading,
  sendDisabled,
  formErrorId,
  handleBack,
}) => {
  return (
    <form onSubmit={handleAddToDo}>
      <div>
        <label htmlFor="title">Tytuł</label>
        <input
          id="title"
          name="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="author">Autor</label>
        <input
          id="author"
          name="author"
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="note">Treść</label>
        <textarea
          id="note"
          name="note"
          type="text"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
      </div>
      <div>
        <button onClick={handleBack}>COFNIJ</button>
        <button disabled={formLoading || sendDisabled} type="submit">
          {formLoading ? 'WYSYŁANIE...' : isEditForm ? 'EDYTUJ' : 'DODAJ'}
        </button>
      </div>
      {formErrorId && <div>Nie udało się dodać zadania</div>}
    </form>
  );
};

const Todo = ({
  todo,
  markLoading,
  deleteLoading,

  markErrorId,
  deleteErrorId,

  markAsDone,
  handleEdit,
  deleteTodo,
}) => {
  return (
    <div key={todo.id}>
      <h3>{todo.title}</h3>
      <p>{todo.note}</p>
      {!todo.isDone && (
        <button disabled={markLoading} onClick={() => markAsDone(todo.id)}>
          {markLoading ? 'KOŃCZENIE ZADANIA...' : 'ZAKOŃCZ'}
        </button>
      )}

      <button onClick={() => handleEdit(todo)}>EDYTUJ</button>

      {!deleteLoading ? (
        <button onClick={() => deleteTodo(todo.id)}>DELETE</button>
      ) : (
        <div>USUWANIE</div>
      )}

      {markErrorId === todo.id ? <div>nie udało się zakończyć</div> : ''}

      {deleteErrorId === todo.id ? <div>nie udało się usunąć</div> : ''}
    </div>
  );
};
