import React, { useState } from 'react';

import './style.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

const BASE_API_URL = 'http://localhost:3333/';

export function Swagerr() {
  const [getTodoList, setTodoList] = useState([]);
  const [getError, setError] = useState('');

  const handleFetchTodoData = async () => {
    const timeoutDuration = 5000; //5s na odpwiedź serwera
    try {
      const fetchDataPromise = axios.get(`${BASE_API_URL}api/todo`);
      const timeoutPromise = new Promise((_, reject) => {
        setTimeout(
          () => reject(new Error('Response Timeout')),
          timeoutDuration
        );
      });
      const response = await Promise.race([fetchDataPromise, timeoutPromise]);
      if (!response) {
        setError('przekroczono czas oczekiwania na odpwiedź serwera');
      }
      if (response) setTodoList(response.data);
    } catch (error) {
      setError('wystąpił błąd podczas komunikacji z serwerem' + error.mesage);
    }
  };
  return (
    <div>
      <h2 className="todo-container__title">
        <Link to="/exercises/react">⯇ Swager</Link>
      </h2>
      <button onClick={handleFetchTodoData}>pobierz todos</button>
      {getError && <p>{getError}</p>}
      {getTodoList.length > 0 && (
        <ul>
          {getTodoList.map((todo) => (
            <li key={todo?.id}>{todo.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
