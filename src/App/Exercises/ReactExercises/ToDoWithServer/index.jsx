import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './style.css';
import { TodoItem } from './TodoItem/TodoItem';
import { TodoForm } from './TodoForm/TodoForm';

export const BASE_API_URL = 'http://localhost:3333/api';
const TIMEOUT_DURATION = 5000; //5sec czekania na odpoiedź serwera

export function TodoList() {
  const [todoList, setTodoList] = useState([]);
  const [error, setError] = useState([]);
  const [isFormVisible, setFormVisibility] = useState(false);

  const [idForEdit, setIdForEdit] = useState(null);

  function updateTodoList(updatedTodo) {
    setTodoList(
      todoList.map((todo) => {
        if (todo.id === updatedTodo.id) {
          return updatedTodo;
        }
        return todo;
      })
    );
  }

  const handleFetchTodoData = async (givenId) => {
    // jezeli nie podamy w wywołaniu funkcji parametru `givenId`, to ta wartość będzie `undefined`

    const isGetSpecificTodoMode = Boolean(givenId);

    const urlSuffix = isGetSpecificTodoMode ? `/${givenId}` : '';

    try {
      const fetchDataPromise = axios.get(`${BASE_API_URL}/todo${urlSuffix}`);
      const timeOutPromise = new Promise((_, reject) => {
        setTimeout(
          () => reject(new Error('Response Timeout')),
          TIMEOUT_DURATION
        );
      });

      const response = await Promise.race([fetchDataPromise, timeOutPromise]);

      if (!response) {
        setError('Przekroczono czas oczekiwania na odpowiedź serwera');
      }
      setError('');

      if (isGetSpecificTodoMode) {
        updateTodoList(response.data);
      } else {
        setTodoList(response.data);
      }
    } catch (error) {
      setError('Wystpił błąd podczas komunikacji z serwerem ' + error?.message);
    }
  };

  useEffect(() => {
    handleFetchTodoData();
  }, []);

  return (
    <div className="todo-container">
      <h2 className="todo-container__title">Todo List 2</h2>

      {error && <p>{error}</p>}

      {isFormVisible && (
        <TodoForm
          setFormVisibility={setFormVisibility}
          handleFetchTodoData={handleFetchTodoData}
          data={todoList.find((todo) => todo.id === idForEdit)}
          setIdForEdit={setIdForEdit}
        />
      )}

      {!isFormVisible && (
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
                    updateTodoList={updateTodoList}
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