import React, { useState } from 'react';
import './style.css';
import axios from 'axios';

const BASE_API_URL = 'http://localhost:3333/';

export function LocalDevAndFetch() {

  const [getTodoList, setTodoList] = useState([]);
  const [getError, setError] = useState(null);
  const [getNewTodo, setNewTodo] = useState('');

  const handleFetchTodoData = async () => {
    const timeoutDuration = 5000; // 5 sekund oczekiwania na odpowiedz w serwera

    try {
      const fetchDataPromise = axios.get(`${BASE_API_URL}api/todo`);
      const timeoutPromise = new Promise((_, reject) => {
        setTimeout(
          () => reject(new Error('Response Timeout')),
          timeoutDuration
          );
      });

      const response = await Promise.race([fetchDataPromise, timeoutPromise]);

      if(!response) {
        setError('Przekroczono czas na oczekiwania na odpowiedz serwera');
      }

      if(response) {
        setTodoList(response.data);
      }
      
    } catch (error) {
      setError("Wystąpił błąd podczas komunikacji z serwerem " + error?.message)
    }
  };

  return (
    <div className="container--swagger">
      <button onClick={handleFetchTodoData}>Pobierz todos</button>
      {getError && <p>{getError}</p>}
      {
        getTodoList.length > 0 && (
          <ul>
            {getTodoList.map((todo) => <li key={todo.id}>{todo}</li>)}
          </ul>
        )       
      }
    </div>
  );
};
