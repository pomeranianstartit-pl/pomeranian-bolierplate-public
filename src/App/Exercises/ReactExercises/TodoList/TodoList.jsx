import { useEffect, useState } from 'react';
import axios from 'axios';
import './styles.css';
import { TodoItem } from './TodoItem/TodoItem';
import { TodoForm } from './TodoForm/TodoForm';

export const BASE_API_URL = 'http://localhost:3333';

export const TodoList = () => {
  const [todoList, setTodoList] = useState([]);
  const [error, setError] = useState([]);
  const [isAddingMode, setAddingMode] = useState(false);

  console.log('isAddingMode:', isAddingMode);

  const handleFetchTodoData = async () => {
    const timeOutDuration = 5000; //5sec czekania na odpoiedź serwera

    try {
      const fetchDataPromise = axios.get(`${BASE_API_URL}/api/todo`);
      const timeOutPromise = new Promise((_, reject) => {
        setTimeout(
          () => reject(new Error('Response Timeout')),
          timeOutDuration
        );
      });

      const response = await Promise.race([fetchDataPromise, timeOutPromise]);

      if (!response) {
        setError('Przekroczono czas oczekiwania na odpowiedź serwera');
      }
      setError('');
      setTodoList(response.data);
    } catch (error) {
      setError('Wystpił błąd podczas komunikacji z serwerem ' + error?.message);
    }
  };

  useEffect(() => {
    handleFetchTodoData();
  }, []);

  return (
    <div className="todo-container">
      <h2 className="todo-container__title">Todo List</h2>
      {error && <p>{error}</p>}

      {isAddingMode && <TodoForm setAddingMode={setAddingMode} />}
      {!isAddingMode && (
        <>
          <div className="todo-container__list">
            {todoList.length > 0 &&
              todoList.map((todo) => {
                return (
                  <TodoItem
                    handleFetchTodoData={handleFetchTodoData}
                    todo={todo}
                    key={todo.id}
                  />
                );
              })}
          </div>

          <button
            className="app-button"
            onClick={() => {
              setAddingMode(true);
            }}
          >
            DODAJ
          </button>
        </>
      )}
    </div>
  );
};

/**
 * utworzenie buttona
 * wybór elementu do usunięcia
 * request do API
 * sprawdzenie czy API wykonało usunięcie todosa
 * zaktualizowanie listy todosów po usunięciu
 */
