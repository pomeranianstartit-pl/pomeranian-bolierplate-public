import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './style.css';
import { TodoItem } from './TodoItem/TodoItem';
import { TodoForm } from './TodoForm/TodoForm';
import { Link } from 'react-router-dom';

export const BASE_API_URL = 'http://localhost:3333/api';
//http://localhost:3333/api-docs/  -  komendy serwer
//http://localhost:3333/api/todo   -   dane na serwerze
export function TodoWithServer() {
  const [todoList, setTodoList] = useState([]);
  const [error, setError] = useState([]);
  const [isFormVisibility, setFormVisibility] = useState(false);

  const [idForEdit, setIdForEdit] = useState(null);
  console.log('id' + idForEdit);
  const handleFetchTodoData = async () => {
    const timeOutDuration = 5000; //5sec czekania na odpoiedź serwera

    try {
      const fetchDataPromise = axios.get(`${BASE_API_URL}/todo`);
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
      <h2 className="todo-container__title">
        <Link to="/exercises/react">⯇ Todo List</Link>
      </h2>
      {error && <p>{error}</p>}
      {isFormVisibility && (
        <TodoForm
          setFormVisibility={setFormVisibility}
          handleFetchTodoData={handleFetchTodoData}
          setIdForEdit={setIdForEdit}
          data={todoList.find((todo) => todo.id === idForEdit)}
        />
      )}
      {!isFormVisibility && (
        <>
          <div className="todo-container__list">
            {todoList.length > 0 &&
              todoList.map((todo) => {
                return (
                  <TodoItem
                    todo={todo}
                    key={todo.id}
                    handleFetchTodoData={handleFetchTodoData}
                    setIdForEdit={setIdForEdit}
                    setFormVisibility={setFormVisibility}
                  />
                );
              })}
          </div>

          <button
            className="big-button"
            onClick={() => {
              setFormVisibility(true);
            }}
          >
            DODAJ
          </button>
        </>
      )}
    </div>
  );
}

/**
 * DODAWANIE TODOSA:
 * button "DODAJ"
 * widok formularza dodawania z dwoma inputami i przyciskiem "ZAPISZ" i "COFNIJ"
 * obsługa widoku (przełączanie widoku)
 * request do API dodający nowe todo
 * jezeli request się powiedzie to:
 *    informujemy o powodzeniu,
 *    czyscimy formularz
 * po kliku "COFNIJ" odswiezamy listę
 */
