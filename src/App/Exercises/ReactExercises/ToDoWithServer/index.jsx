import { useEffect, useState } from 'react';
import { SingleTask } from './SingleTask';
import { NoTasks } from './NoTasks';
import { NewTaskForm } from './NewTaskForm';
import { PlusSymbol } from '../../../Components/ToDoComponents/Plus';

export const ADDRESS = 'http://localhost:3333/api/todo/';

export const ToDoWithServer = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [deleteErrorId, setDeleteErrorid] = useState(null);
  const [markAsDoneErrorId, markAsDoneErrorid] = useState(null);
  const [isFormOn, setIsFormOn] = useState(false);

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
      setDeleteErrorid(id);
      console.log(error, '    set error');
    }
  };

  const markAsDone = async (id) => {
    try {
      const request = await fetch(`${ADDRESS}${id}/markAsDone`, {
        method: 'PUT',
      });
      if (!request.ok) {
        throw new Error('Something went wrong!');
      }
      const data = await request.json();

      setData((prevData) => {
        // to można sprytniej dużo prościej
        return prevData.map((task) => {
          if (task.id === id) {
            return {
              ...task,
              isDone: task.id === id ? data.isDone : false,
              doneDate: data.doneDate,
            };
          } else return task;
        });
      });
      console.log(id, '    item deleted');
    } catch (error) {
      markAsDoneErrorid(id);
      console.log(error, '    set error');
    }
  };

  useEffect(() => {
    console.log(data, 'data w useEffect');
  });

  useEffect(() => {
    console.log(isFormOn, 'isFormOn');
  }, [isFormOn]);

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
      {isFormOn ? (
        <NewTaskForm />
      ) : (
        <div>
          <div class="heading-plus">
            <p className="task-heading">
              Tu znajdziesz listę zadań do wykonania.{' '}
            </p>
            <button
              className="button-no-style button-plus"
              onClick={() => {
                setIsFormOn((prevIsFromOn) => !prevIsFromOn);
              }}
            >
              <PlusSymbol />
            </button>
          </div>
          <div>
            {data?.length > 0 &&
              data.map((todo) => {
                return (
                  <SingleTask
                    key={todo.id}
                    del_error={deleteErrorId}
                    task={todo}
                    binFunc={() => {
                      deleteTask(todo.id);
                    }}
                    tickFunc={() => {
                      markAsDone(todo.id);
                    }}
                  />
                );
              })}
          </div>
          <div className="main-no-task">
            {data?.length === 0 && error == null && (
              <NoTasks
                message="Brawo! Nie masz aktualnie żadnych zadań do zrealizowania."
                func={getTodos}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};
