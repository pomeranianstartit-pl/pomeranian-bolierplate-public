import './styles.css';

import { useEffect, useState } from 'react';
import { ToDo } from './ToDo';
import { AddToDo } from './AddToDo';
import { EmptyTaskList } from './EmptyTaskList';
import { requestHandler } from './helpers';
// import { ReactComponent as Plus } from "../../../Images/Plus.svg";

export function ToDoWithServer() {
  const [data, setData] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [editObject, setEditObject] = useState();
  const [showCreateForm, setShowCreateForm] = useState(false);

  const getData = async () => {
    setIsLoading(true);
    setIsError(false);

    requestHandler('GET')
      .then((response) => {
        setData(response);
      })
      .catch((err) => {
        setIsError(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (isError) {
      getData();
    }
  });

  if (isLoading) {
    return <div>Ładowanie...</div>;
  }

  if (showCreateForm) {
    return (
      <AddToDo
        getData={getData}
        setShowCreateForm={setShowCreateForm}
        editObject={editObject}
        setEditObject={setEditObject}
      />
    );
  }

  return (
    <div className="task-index-page">
      {isError && <div>Coś poszło nie tak</div>}

      {!isError &&
        data.map((el) => {
          const { id, title, author, note, createdAt } = el;
          return (
            <div>
              <ToDo
                id={id}
                title={title}
                author={author}
                note={note}
                createdAt={createdAt}
                doneDate={el?.doneDate}
                isDone={el?.isDone}
                getData={getData}
                setEditObject={setEditObject}
                setShowCreateForm={setShowCreateForm}
              />
            </div>
          );
        })}
      <button
        className="button-add"
        onClick={() => {
          setEditObject();
          setShowCreateForm(true);
        }}
      >
        DODAJ
      </button>
    </div>
  );
}

// TODO: zip
