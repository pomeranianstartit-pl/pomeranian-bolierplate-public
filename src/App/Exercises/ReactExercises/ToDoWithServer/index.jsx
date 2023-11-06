import { useEffect, useState } from 'react';
import { SingleTask } from './SingleTask';

const ADDRESS = '';

export const ToDoWithServer = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState([]);

  const getTodos = async () => {
    try {
    } catch {}
    const request = await fetch('http://localhost:3333/api/todo');
    const data = await request.json();
    setData(data);
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div>
      <h3 className="task-heading">Tu znajdziesz listę zadań do wykonania.</h3>
      {/* <p>tudududu......</p> */}
      <div>
        {data.length > 0 &&
          data.map((todo) => {
            return <SingleTask task={todo} />;
          })}
      </div>
    </div>
  );
};
