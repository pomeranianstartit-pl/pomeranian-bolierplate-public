import { useState, useEffect } from 'react';
import './style.css';
import axios from 'axios';

const BASE_API_URL = 'http://localhost:3333/';
export const SwaggerExercise = () => {
  const [getTodoList, setTodoList] = useState([]);
  const [getError, setError] = useState([]);
  const [getFlag, setFlag] = useState(false);
  const [getNewTodo, setNewTodo] = useState('');

  const handleFetchTodoData = async () => {
    const timeOutDuration = 5000; //5sec czekania na odpoiedź serwera

    try {
      const fetchDataPromise = axios.get(`${BASE_API_URL}api/todo`);
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
  return (
    <div className="container--swagger">
      <button onClick={handleFetchTodoData}>Pobierz TODO's</button>
      {getError && <p>{getError}</p>}

      {getTodoList.length > 0 && (
        <ul>
          {getTodoList.map((todo) => (
            <li key={todo.id}>
              {todo.createdAt}
              <br />
              {todo.author}
              <br />
              {todo.isDone}
              <br />
              {todo.note}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};