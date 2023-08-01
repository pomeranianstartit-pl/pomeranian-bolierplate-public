import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './style.css';
import { formatDate } from '../../../Helpers/formatDate';

const BASE_API_URL = 'http://localhost:3333/api';

export function TodoList() {
  const [getTodoList, setTodoList] = useState([]);
  const [getError, setError] = useState([]);

  const handleFetchTodoData = async () => {
    const timeOutDuration = 5000; 

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
      <h2 className="todo-container__title">Todo List 2</h2>

      {getError && <p>{getError}</p>}

      <div className="todo-container__list">
        {getTodoList.length > 0 &&
          getTodoList.map((todo) => {
            const itemClasses = `todo-container__list__item ${
              todo.isDone ? 'todo-container__list__item--darker' : ''
            }`;

            return (
              <div className={itemClasses} key={todo.id}>
                <div className="todo-container__list__item__wrapper">
                  <h3 className="todo-container__list__item__wrapper__title">
                    {todo.title}
                  </h3>
                  <div className="todo-container__list__item__wrapper__text todo-container__list__item__wrapper__text--smaller">
                    {todo.author}
                  </div>
                  <div className="todo-container__list__item__wrapper__text todo-container__list__item__wrapper__text--smaller">
                    {formatDate(todo.createdAt)}
                  </div>
                  <p className="todo-container__list__item__wrapper__text">
                    {todo.note}
                  </p>
                </div>
                <div className="todo-container__list__item__side">
                  {todo.isDone && (
                    <>
                      <div className="todo-container__list__item__side__checkmark">
                        &#10003;
                      </div>
                      <div>{formatDate(todo.doneDate)}</div>
                    </>
                  )}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}