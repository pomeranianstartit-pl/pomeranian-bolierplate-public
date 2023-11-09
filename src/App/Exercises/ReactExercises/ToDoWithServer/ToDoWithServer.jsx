import { useEffect } from 'react';
import { useState } from 'react';
import { ToDos } from './Components/ToDos';

export const Exercise = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const getTodos = async () => {
    try {
      const request = await fetch('http://localhost:3333/api/todo');
      const data = await request.json();

      setData(data);
    } catch {
      setError('Error');
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div>
      <h1>ToDo with server</h1>
      <div>
        <div>lista todos...</div>

        {data.length > 0 &&
          data.map((todo) => {
            return (
              <ToDos
                key={todo.id}
                title={todo.title}
                author={todo.author}
                date="21.04.2024, 10:08"
                content={todo.note}
              />
            );
          })}
      </div>

      {error && <div>{error}</div>}
    </div>
  );
};
