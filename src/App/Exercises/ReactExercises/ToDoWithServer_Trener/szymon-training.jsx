import { useState, useEffect } from 'react';
const API_URL = 'http://localhost:3333/api/todo';
const TEXTS = {
  LOADER: 'Ładowanie danych...',
  ERROR: 'Przepraszamy. Nie udało się pobrać listy zadań.',
  EMPTY: 'Brawo! Nie masz aktualnie żadnych zadań do zrealizowania.',
  BUTTON_REFRESH: 'ODSWIEŻ WIDOK',
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

  // EDIT FORM
  const [isEditForm, setEditForm] = useState(false);

  const fetchTodos = async () => {
    setLoading(true);
    setError(false);
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error('API');
      }
      const data = await response.json();
      setTodos(data);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const deleteTodo = async (id) => {
    setDeleteLoading(true);
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failled delete');
      }
      setTodos((prevState) => prevState.filter((todo) => todo.id !== id));
    } catch (e) {
      setDeleteErrorId(id);
    } finally {
      setDeleteLoading(false);
    }
  };

  const markAsDone = async (id) => {
    setMarkLoading(true);
    try {
      const response = await fetch(`${API_URL}/${id}/markAsDone`, {
        method: 'PUT',
      });

      if (!response.ok) {
        throw new Error('Failled delete');
      }

      const data = await response.json();

      setTodos((prevState) =>
        prevState.map((todo) => {
          if (todo.id === id) return data;

          return todo;
        })
      );
    } catch (e) {
      setMarkErrorId(id);
    } finally {
      setMarkLoading(false);
    }
  };

  const addTodo = async () => {
    setFormLoading(true);

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, author, note }),
      });

      if (!response.ok) {
        throw new Error('Failed add');
      }

      const data = await response.json();

      setTodos((prevState) => [...prevState, data]);
      handleFormVisibility();
      setTitle('');
      setAuthor('');
      setNote('');
    } catch (e) {
      setFormErrorId(true);
    } finally {
      setFormLoading(false);
    }
  };

  const editTodo = async () => {
    setFormLoading(true);

    try {
      const response = await fetch(`${API_URL}/${editedId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, author, note }),
      });

      if (!response.ok) {
        throw new Error('Failed edit');
      }

      const data = await response.json();

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
    } catch (e) {
      setFormErrorId(true);
    } finally {
      setFormLoading(false);
    }
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

  if (todos.length === 0) {
    return (
      <div>
        <div>{TEXTS.EMPTY}</div>
        <button onClick={fetchTodos}>{TEXTS.BUTTON_REFRESH}</button>
      </div>
    );
  }

  return (
    <>
      <h2>Blok 38 - ToDo</h2>
      {isForm && (
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
      )}
      {!isForm && (
        <>
          <button onClick={handleFormVisibility}>Dodaj zadanie</button>
          {todos.map((todo) => {
            return (
              <div key={todo.id}>
                <h3>{todo.title}</h3>
                <p>{todo.note}</p>
                {!todo.isDone && (
                  <button
                    disabled={markLoading}
                    onClick={() => markAsDone(todo.id)}
                  >
                    {markLoading ? 'KOŃCZENIE ZADANIA...' : 'ZAKOŃCZ'}
                  </button>
                )}

                <button onClick={() => handleEdit(todo)}>EDYTUJ</button>

                {!deleteLoading ? (
                  <button onClick={() => deleteTodo(todo.id)}>DELETE</button>
                ) : (
                  <div>USUWANIE</div>
                )}

                {markErrorId === todo.id ? (
                  <div>nie udało się zakończyć</div>
                ) : (
                  ''
                )}

                {deleteErrorId === todo.id ? (
                  <div>nie udało się usunąć</div>
                ) : (
                  ''
                )}
              </div>
            );
          })}
          <button onClick={handleFormVisibility}>Dodaj zadanie</button>
        </>
      )}
    </>
  );
}