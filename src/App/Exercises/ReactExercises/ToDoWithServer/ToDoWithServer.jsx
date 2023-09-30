import { useState, useEffect } from 'react';

import './style.css';

const testPost = {
  title: 'Tytuł post z frontu',

  note: 'Notatka post z frontu',

  author: 'Szymon',
};

const itemToDelete = 5;

export function ToDoWithServer() {
  const [todos, setTodos] = useState([]);

  const [error, setError] = useState(null);

  const [loading, setLoading] = useState(true);

  const deleteTodo = async () => {
    try {
      const response = await fetch(
        `http://localhost:3333/api/todo/${itemToDelete}`,

        {
          method: 'DELETE',

          headers: {
            'Content-Type': 'application/json',
          },

          // Body nie jest potrzebne przy DELETE

          // body: JSON.stringify(testPost),
        }
      );

      if (!response.ok) {
        throw new Error('Wystąpił błąd podczas usuwania zadania zadania!');
      }

      fetchTodos();
    } catch (error) {
      setError(error.message);
    }
  };

  const postTodo = async () => {
    try {
      const response = await fetch('http://localhost:3333/api/todo', {
        method: 'POST',

        headers: {
          'Content-Type': 'application/json',
        },

        body: JSON.stringify(testPost),
      });

      if (!response.ok) {
        throw new Error('Wystąpił błąd podczas wysyłania nowego zadania!');
      }

      fetchTodos();
    } catch (error) {
      setError(error.message);
    }
  };

  const fetchTodos = async () => {
    try {
      const response = await fetch('http://localhost:3333/api/todo');

      if (!response.ok) {
        throw new Error('Wystąpił błąd podczas pobierania listy zadań!');
      }

      const jsonData = await response.json();

      setTodos(jsonData);

      setLoading(false);
    } catch (error) {
      setError(error.message);

      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  if (loading) {
    return <p>Ładowanie...</p>;
  }

  if (error) {
    return <p>Wystąpił kod błędu: {error}</p>;
  }

  return (
    <div>
      <h1>To jest lista todos!</h1>

      <button onClick={postTodo}>Dodaj nowe zadanie</button>

      <button onClick={deleteTodo}>Usuń zadanie z id: {itemToDelete}</button>

      <section>
        {todos.map((todo) => {
          return (
            <div>
              <p>{todo.id}</p>

              <h2>{todo.title}</h2>

              <p>{todo.note}</p>

              <p>{todo.author}</p>
            </div>
          );
        })}
      </section>
    </div>
  );
}
