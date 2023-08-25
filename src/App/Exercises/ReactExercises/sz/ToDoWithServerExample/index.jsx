import { useEffect, useState } from 'react';
import { ToDo } from './ToDo';
import { ToDoForm } from './ToDoForm';
import { requestHandler } from './helpers';

export const ToDoWithServerExample = () => {
  // Lista todosów
  const [data, setData] = useState([]);

  // Edytowany todo
  const [editObject, setEditObject] = useState();

  // Stany dla ekrantu głównego
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Stany dla formularza
  const [showForm, setShowForm] = useState(false);

  const getData = () => {
    setIsLoading(true);
    setIsError(false);

    requestHandler('GET')
      .then((response) => {
        setData(response);
      })
      .catch((error) => {
        setIsError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  if (isLoading) {
    return <div>Ładowanie...</div>;
  }

  if (showForm) {
    return (
      <ToDoForm
        getData={getData}
        setShowForm={setShowForm}
        editObject={editObject}
      />
    );
  }

  return (
    <div>
      <h2>ToDoWithServerExample</h2>
      {isError && <div>Coś poszło nie tak...</div>}
      {!isError && (
        <div>
          {data.map((todo) => {
            const { id, title, note, author, createdAt } = todo;

            return (
              <ToDo
                key={id}
                id={id}
                title={title}
                note={note}
                author={author}
                createdAt={createdAt}
                doneDate={todo?.doneDate}
                isDone={todo?.isDone}
                getData={getData}
                setEditObject={setEditObject}
                setShowForm={setShowForm}
              />
            );
          })}
        </div>
      )}
      <button
        onClick={() => {
          setEditObject();
          setShowForm(true);
        }}
      >
        Dodaj
      </button>
    </div>
  );
};
