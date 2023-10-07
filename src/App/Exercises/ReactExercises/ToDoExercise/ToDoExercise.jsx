import { useState, useEffect } from 'react';
import './style.css';

export function ToDoExercise() {
  const [todos, setTodos] = useState([]);

  const [error, setError] = useState(null);

  const [loading, setLoading] = useState(true);

  const newPost = {
    title: 'Tytuł nowego zadania',
    author: 'Mike',
    createdAt: '30-09-2023',
    note: 'Jakiś tekst',
  };

  const postTodo = async () => {
    try {
      const response = await fetch('http://localhost:3333/api/todo', {
        method: 'POST',

        headers: {
          'Content-Type': 'application/json',
        },

        body: JSON.stringify(newPost),
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

  const deleteTodo = async () => {
    try {
      const response = await fetch(
        `http://localhost:3333/api/todo/1`,
        //do skodowania "1" na końcu powyższego linku localhost żeby usuwało bieżący/wybrany todos

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

  if (loading) {
    return <p>Ładowanie...</p>;
  }

  if (error) {
    return <p>Wystąpił kod błędu: {error}</p>;
    // tu po wystąpieniu errora powinien wgrac kod odpowiedzialny za makiete 1c
    // <p>Przepraszamy. Nie udało się pobrać listy zadań.</p>
    //<button>ODŚWIEŻ WIDOK</button>
  }
  function refreshPage() {
    window.location.reload();
  }
  return (
    <>
      <div>
        <h1>&lt; TODO</h1>
        <p>Tutaj znajdziesz listę moich zadań.</p>
        <button onClick={postTodo}> + </button>
        <section>
          {todos.map((todo) => {
            return (
              <div>
                <h2>{todo.title}</h2>

                <p>{todo.createdAt}</p>
                <p>{todo.author}</p>

                <p>{todo.note}</p>
                <p>{todo.id}</p>
                <button onClick={deleteTodo}>DELETE</button>
              </div>
            );
          })}
        </section>
        <br />

        <br />
        <button onClick={postTodo}>DODAJ </button>
      </div>

      <div>
        <p>Brawo! Nie masz aktualnie żadnych zadań do zrealizowania.</p>
        <button onClick={postTodo}>DODAJ ZADANIE</button>
      </div>
      <div>
        <p>Przepraszamy. Nie udało się pobrać listy zadań.</p>
        <button onClick={refreshPage}>ODŚWIEŻ WIDOK</button>
      </div>
    </>
  );
}
