import './style.css';
// import trashcan from '../../../Images/kosz.svg';
// import tickmark from '../../../Images/ptaszek.svg';
import { useEffect, useState } from 'react';
import { SingleTask } from './SingleTask/SingleTask';
import { AddTask } from './AddTask/AddTask';
import { API_URL, FORM_SCHEMA } from './constants';
import { EmptyTaskList } from './EmptyTaskList/EmptyTaskList';

export function ToDoWithServer({}) {
  const [errorList, setErrorList] = useState([]);
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState(FORM_SCHEMA);
  const [isEdited, setIsEdited] = useState(false);
  const [isForm, setIsForm] = useState(false);
  const isError = errorList.length > 0;

  const isDataEmpty = data.length === 0;

  const getData = async () => {
    try {
      const dataFromServer = await fetch(`${API_URL}/todo`);
      if (!dataFromServer.ok) {
        throw new Error(dataFromServer.json());
      }
      const response = await dataFromServer.json();
      setData(response);
    } catch (err) {
      setErrorList((prevState) => [...prevState, err]);
    }
  };
  useEffect(() => {
    console.log(errorList, 'lista błędów');
  });

  useEffect(() => {
    getData();
  }, []);

  const deleteToDo = async (id) => {
    console.log('wywoluje sie deletetodo');
    const response = await fetch(`${API_URL}/todo/${id}`, {
      method: 'DELETE',
      headers: { 'Content-type': 'appliction/json' },
    });

    const { status } = await response;
    if (status === 200) {
      getData();
    } else if (status === 500 || status === 404) {
      setErrorList((prevState) => [...prevState, id]);
    }
    console.log(errorList, 'errorList');
    console.log(' ODPOWIEDZ ', response);
  };

  useEffect(() => {
    console.log(errorList, 'NewErrorList');
  }, [errorList]);

  const handleEditTask = (id) => {
    const foundToDo = data.find((todo) => todo.id === id);
    console.log('id:', foundToDo);
    setFormData(foundToDo);
    setIsEdited(true);
    setIsForm(true);
  };

  const markAsDone = async (id) => {
    const response = await fetch(`${API_URL}/todo/${id}/markAsDone`, {
      method: 'PUT',
      headers: { 'Content-type': 'appliction/json' },
    });
    const { status } = await response;
    if (status === 200) {
      getData();
    } else if (status === 500 || status === 404) {
      console.log('status 500 albo 404');
      setErrorList((prevState) => [...prevState, id]);
    }
  };

  const handleIsForm = () => {
    setIsForm(true);
  };

  return (
    <div className="task-index-page">
      {!isForm && (
        <>
          <h3> TODO </h3>
          <p>Tutaj znajdziesz listę swoich zadań</p>
          <button className="button-add" onClick={handleIsForm}>
            DODAJ
          </button>
        </>
      )}

      {isForm && (
        <AddTask
          getData={getData}
          formData={formData}
          setFormData={setFormData}
          isEdited={isEdited}
          setIsForm={setIsForm}
        />
      )}

      {!isForm &&
        data.map((el) => {
          const isError = errorList.includes(el.id);
          return (
            <div>
              <SingleTask
                title={el.title}
                author={el.author}
                note={el.note}
                deleteToDo={deleteToDo}
                id={el.id}
                isError={isError}
                handleEditTask={handleEditTask}
                markAsDone={markAsDone}
                isDone={el.isDone}
                doneDate={el?.doneDate}
              />
            </div>
          );
        })}

      {!isForm && !isDataEmpty && (
        <button className="button-add" onClick={handleIsForm}>
          DODAJ
        </button>
      )}
      {isDataEmpty && (
        <EmptyTaskList isError={isError} addTask={handleIsForm} />
      )}
    </div>
  );
}
