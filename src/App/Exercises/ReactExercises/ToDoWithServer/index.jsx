import { useEffect, useState } from 'react';
import { SingleTask } from './SingleTask';
import { NoTasks } from './NoTasks';
import { TaskForm } from './TaskForm';
import { EditTaskForm } from './EditTaskForm';
import { PlusSymbol } from '../../../Components/ToDoComponents/Plus';
import { ADDRESS } from './constants';

export const ToDoWithServer = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [deleteErrorId, setDeleteErrorid] = useState(null);
  const [markAsDoneErrorId, setMarkAsDoneErrorid] = useState(null);
  const [isFormOn, setIsFormOn] = useState(false);
  const [isEditFormOn, setIsEditFormOn] = useState(false);
  const [editingTaskData, setEditingTaskData] = useState(null);
  const [loading, setLoading] = useState(true);

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
      const request = await fetch(`${ADDRESS}/${id}`, {
        method: 'DELETE',
      });
      if (!request.ok) {
        throw new Error('Something went wrong!');
      }
      setData((prevData) => prevData.filter((task) => task.id !== id));
      console.log(id, '    item deleted');
    } catch (error) {
      setDeleteErrorid(id);
      setMarkAsDoneErrorid(null);
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
    } catch (error) {
      setMarkAsDoneErrorid(id);
      setDeleteErrorid(null);
      console.log(id, '    set error');
      console.log(markAsDoneErrorId, 'markas done rror id');
    }
  };

  const handleFormVisibility = () => {
    console.log(':)');
    setIsFormOn((prevState) => !prevState);
    getTodos();
  };

  const handleEditFormVisibility = (id) => {
    console.log('edit turned off/on');
    if (isEditFormOn) {
      setEditingTaskData(null);
    }
    setIsEditFormOn((prevState) => !prevState);
    getTodos();
  };

  // useEffect(() => {
  //   console.log(markAsDoneErrorId, 'mark as Done erro id');
  // });

  useEffect(() => {
    console.log(isFormOn, 'isFormOn Changed');
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
        <TaskForm
          isEditFrom={isEditFormOn}
          handleFormVisibility={handleFormVisibility}
        />
      ) : isEditFormOn ? (
        <EditTaskForm
          handleEditFormVisibility={handleEditFormVisibility}
          taskData={editingTaskData}
        />
      ) : (
        <div className="to-do-content">
          <div class="heading-plus">
            <p className="task-heading">
              Tu znajdziesz listę zadań do wykonania.{' '}
            </p>
            <button
              className="button-no-style button-plus"
              onClick={handleFormVisibility}
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
                    done_error={markAsDoneErrorId}
                    task={todo}
                    binFunc={() => {
                      deleteTask(todo.id);
                    }}
                    tickFunc={() => {
                      markAsDone(todo.id);
                    }}
                    penFunc={() => {
                      setEditingTaskData(todo);
                      setIsEditFormOn(true);
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
          <div id="button-container">
            <button className="taskButton" onClick={handleFormVisibility}>
              DODAJ
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
