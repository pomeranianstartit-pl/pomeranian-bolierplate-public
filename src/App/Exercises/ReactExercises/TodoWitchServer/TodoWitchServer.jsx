import React, { useEffect, useState } from 'react';
import './style.css';
import axios from 'axios';
import { TodoItem } from './TodoItem/TodoItem';

const BASE_API_URL = 'http://localhost:3333/api/';

export function TodoWitchServer() {
  const [todoList, setTodoList] = useState([]);
  const [error, setError] = useState([]);

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
      {error && <p>{error}</p>}
      {todoList.length > 0 &&
        todoList.map((todo) => {
          return <TodoItem todoDetails={todo} key={todo.id} />;
        })}
    </div>
  );
}
