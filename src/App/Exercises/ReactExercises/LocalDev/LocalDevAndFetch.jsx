import { useState } from 'react';
import axios from 'axios';

const BASE_API_URL = 'http://localhost:3333/';

export function Swagger() {
  const [getTodoList, setTodoList] = useState([]);
  const [getError, setError] = useState(null);
  const [getNewTodo, setNewTodo] = useState('');

  const handleFetchTodoData = async () => {
    const timeoutDuration = 5000; // 5s wait time for response

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
        setError('Przekroczono czas oczekiwania na odpowiedź serwera');
      }

      setTodoList(response.data);
    } catch (error) {
      setError(
        'Wystąpił błąd podczas komunikacji z serwerem ' + error?.message
      );
    }
  };

  return (
    <div>
      <button onClick={handleFetchTodoData}>Pobierz todos</button>
      {getError && <p>{getError}</p>}
      {getTodoList.length > 0 && (
        <ul>
          {getTodoList.map((todo) => (
            <li key={todo.id}>{todo.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
