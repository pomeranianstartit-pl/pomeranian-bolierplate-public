import './styles.css';

import { useEffect, useState } from 'react';
import { SingleTask } from './SingleTask/SingleTask';
import { AddTask } from './AddTask/AddTask';
import { API_URL, FORM_SCHEMA } from './constants';
import { EmptyTaskList } from './EmptyTaskList/EmptyTaskList';
import { requestHandler, setStateAsync } from './helpers';

export function ToDoWithServer() {
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState(FORM_SCHEMA);
  const [isEdited, setIsEdited] = useState(false);
  const [isForm, setIsForm] = useState(false);
  const [errorIds, setErrorIds] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isToDoError, setIsToDoError] = useState('');

  // const isError = errorList.length > 0;
  const isDataEmpty = data.length === 0;

  const getData = async () => {
    setIsError(false);

    setIsLoading(true);
    requestHandler('GET')
      .then((response) => {
        setData(response);
      })
      .catch((err) => {
        setIsError(true);
      })
      .finally((response) => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const deleteToDo = async (id) => {
    try {
      const response = await fetch(`${API_URL}/todo/${id}`, {
        method: 'DELETE',
        headers: { 'Content-type': 'appliction/json' },
      });
      if (!response.ok) {
        throw new Error(response.json());
      }
    } catch {
      await setStateAsync(() => {
        setErrorIds((prevState) => [...prevState, id]);
      });
    } finally {
      getData();
    }
  };

  const handleEditTask = (id) => {
    const foundToDo = data.find((todo) => todo.id === id);

    setFormData(foundToDo);
    setIsEdited(true);
    setIsForm(true);
  };

  const markAsDone = async (id) => {
    console.log('idMarkAsDone:', id);
    setIsToDoError(false);
    requestHandler('PUT', `${id}`)
      .then((response) => {
        if (!response.isDone) {
          setIsToDoError(true);
          setErrorIds((prevState) => [...prevState, id]);
        } else {
          getData();
        }
      })
      .catch(() => {
        setIsToDoError(true);
        setErrorIds((prevState) => [...prevState, id]);
      });
  };

  const handleIsForm = () => {
    setIsForm(true);
  };

  if (isLoading) {
    return <div>Ładowanie...</div>;
  }

  return (
    <div className="task-index-page">
      {!isForm && !isError && (
        <>
          <h3>TODO</h3>
          <p>Tutaj znajdziesz listę swoich zadań</p>
          <button className="button-add" onClick={handleIsForm}>
            DODAJ
          </button>
        </>
      )}

      {isForm && !isError && (
        <AddTask
          getData={getData}
          formData={formData}
          setFormData={setFormData}
          isEdited={isEdited}
          setIsForm={setIsForm}
          setIsEdited={setIsEdited}
        />
      )}

      {!isForm &&
        !isDataEmpty &&
        !isError &&
        data.map((el) => {
          const isErrorIncluded = errorIds.includes(el.id);
          return (
            <div>
              <SingleTask
                title={el.title}
                author={el.author}
                note={el.note}
                deleteToDo={deleteToDo}
                id={el.id}
                isError={isErrorIncluded}
                handleEditTask={handleEditTask}
                markAsDone={markAsDone}
                isDone={el.isDone && !isToDoError}
                doneDate={el?.doneDate}
              />
            </div>
          );
        })}

      {!isForm && !isDataEmpty && !isError && (
        <button className="button-add" onClick={handleIsForm}>
          DODAJ
        </button>
      )}
      {(isDataEmpty || isError) && (
        <EmptyTaskList
          addTask={handleIsForm}
          isError={isError}
          getData={getData}
        />
      )}
    </div>
  );
}

// const response = await fetch(`${API_URL}/todo/${id}`, {
//   method: 'DELETE',
//   headers: { 'Content-type': 'appliction/json' },
// });

// const { status } = await response;
// if (status === 200) {
//   getData();
// } else if (status === 500 || status === 404) {
//   setisError((prevState) => [...prevState, id]);
// }