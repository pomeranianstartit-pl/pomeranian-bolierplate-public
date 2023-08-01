import React, { useEffect, useState } from 'react';
import './style.css';
import axios from 'axios';
import { formatDate } from './formatDate';
import markerDone from './markerDone.svg'

const BASE_API_URL = 'http://localhost:3333/api/';

export function TodoWitchServer() {
  const [getTodoList, setTodoList] = useState([]);
  const [getError, setError] = useState([]);

  const handleFetchTodoData = async () => {
    const timeOutDuration = 5000; //5sec czekania na odpoiedź serwera
    try {
      const fetchDataPromise = axios.get(`${BASE_API_URL}todo`);
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
    <div className="todo-conteiner">
      {getError && <p>{getError}</p>}
      {getTodoList.length > 0 &&
        getTodoList.map((todo) => (
          <div className={todo.isDone? 'todo-conteiner__list__item--done' :"todo-conteiner__list__item"} key={todo.id}>
            <div className="todo-conteiner__list__item__wrapper">
              <h3 className="todo-conteiner__list__item__wrapper__title">
                {todo.title}
              </h3>
              <div className="todo-conteiner__list__item__wrapper__text--smaller">
                {todo.author}
              </div>
              <div className="todo-conteiner__list__item__wrapper__text--smaller">
                {formatDate(todo.createdAt)}
              </div>
              <p className="todo-conteiner__list__item__wrapper__text">{todo.note}</p>
            </div>
            <div className="todo-conteiner__list__item__side">
              {todo.isDone && <>
              <div><img src={markerDone} alt="Done" /></div>
              <div>{formatDate(todo?.doneDate)}</div>
              </>}
            </div>
          </div>
        ))}
    </div>
  );
}
