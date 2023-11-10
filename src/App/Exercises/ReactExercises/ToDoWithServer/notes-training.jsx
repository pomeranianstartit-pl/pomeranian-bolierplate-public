import { useState, useEffect } from 'react';
const API_URL = 'http://localhost:3333/api/todo';
const TEXTS = {
  LOADER: 'Ładowanie danych...',
  ERROR: 'Przepraszamy. Nie udało się pobrać listy zadań.',
  EMPTY: 'Brawo! Nie masz aktualnie żadnych zadań do zrealizowania.',
  BUTTON_REFRESH: 'ODSWIEŻ WIDOK',
};
export function Block() {
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [deleteErrorId, setDeleteErrorId] = useState(null);
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
      const response = await fetch(`${API_URL}/22${id}`, {
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
      {todos.map((todo) => {
        return (
          <div key={todo.id}>
            <h3>{todo.title}</h3>
            {todo.isDone ? <div>CHECKMARK</div> : ''}
            {!deleteLoading ? (
              <button onClick={() => deleteTodo(todo.id)}>DELETE</button>
            ) : (
              <div>USUWANIE</div>
            )}
            {deleteErrorId === todo.id ? <div>nie udało się usunąć</div> : ''}
          </div>
        );
      })}
    </>
  );
}
