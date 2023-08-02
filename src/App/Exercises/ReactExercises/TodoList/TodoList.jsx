import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './style.css';
import { TodoItem } from './TodoItem/TodoItem';

const BASE_API_URL = 'http://localhost:3333/api';

function Message({ textColor, text, test123 }) {
  console.log(test123);
  return (
    <h1 style={{ color: textColor }}>
      {text} ({textColor})
    </h1>
  );
}

export function TodoList() {
  const [todoList, setTodoList] = useState([]);
  const [error, setError] = useState([]);

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
      <h2 className="todo-container__title">Todo List 2</h2>

      <Message text="tajna wiadomość" textColor="green" />

      <Message text="super tajna wiadomość" textColor="pink" test123={123} />

      {error && <p>{error}</p>}

      <div className="todo-container__list">
        {todoList.length > 0 &&
          todoList.map((todo) => {
            return <TodoItem todo={todo} key={todo.id} />;
          })}
      </div>
    </div>
  );
}