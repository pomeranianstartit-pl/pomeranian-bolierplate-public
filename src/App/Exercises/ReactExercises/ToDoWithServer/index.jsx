import { useEffect, useState } from 'react';
import { SingleTask } from './SingleTask';
import { NoTasks } from './NoTasks';

const ADDRESS = 'http://localhost:3333/api/todo/';

export const ToDoWithServer = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const getTodos = async () => {
    console.log('Click1');
    setLoading(true);
    setError(null);

    try {
      const request = await fetch(ADDRESS);
      if (!request.ok) {
        throw new Error('Something went wrong!');
      }
      const data = await request.json();

      setData(data);
      console.log(error, '    set data error');
    } catch (error) {
      setData([]);
      setError('Error');
      console.log(error, '    set error');
    } finally {
      setLoading(false);
    }
  };

  const deleteTask = async (id) => {
    try {
      const request = await fetch(`${ADDRESS}${id}`, {
        method: 'DELETE',
      });
      if (!request.ok) {
        throw new Error('Something went wrong!');
      }

      setData((prevData) => prevData.filter((task) => task.id !== id));

      console.log(id, '    item deleted');
    } catch (error) {
      setError('Error');
      console.log(error, '    set error');
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  if (loading) {
    return <div>Ładowanie danych...</div>;
  }

  if (error) {
    return (
      <NoTasks
        message="Przepraszamy. Nie udało się pobrać listy zadań."
        func={getTodos}
      />
    );
  }

  return (
    <div>
      <h3 className="task-heading">Tu znajdziesz listę zadań do wykonania.</h3>
      <div>
        {data.length > 0 &&
          data.map((todo) => {
            return (
              <SingleTask
                key={todo.id}
                task={todo}
                binFunc={() => {
                  deleteTask(todo.id);
                }}
              />
            );
          })}
      </div>
      <div className="main-no-task">
        {data.length === 0 && error == null && (
          <NoTasks
            message="Brawo! Nie masz aktualnie żadnych zadań do zrealizowania."
            func={getTodos}
          />
        )}
      </div>
    </div>
  );
};
