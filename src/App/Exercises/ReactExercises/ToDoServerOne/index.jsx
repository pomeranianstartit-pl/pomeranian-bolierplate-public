import { useEffect, useState } from 'react';
import './style.css';
import { requestHandler } from './helpers';

import { ToDoForm } from './components/ToDoForm';
import { ToDoItem } from './components/ToDoItem';

export const ToDoServerOne = () => {
  const [data, setData] = useState([]);
  const [editedItem, setEditedItem] = useState(null);
  const [formVisible, setFormVisible] = useState(false);
  const [error, setError] = useState(null);
  const handleLoadData = () => {
    console.log('triggered...?');
    setError(null);
    requestHandler('GET')
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        setError('Nie udało się pobrać listy zadań');
      });
  };

  const handleForm = () => {
    setFormVisible(!formVisible);
  };

  useEffect(() => {
    handleLoadData();
  }, []);

  return (
    <div>
      <h2 className="h2todo">{'<'}ToDo</h2>
      {formVisible && (
        <ToDoForm
          editedItem={editedItem}
          setEditedItem={setEditedItem}
          getData={handleLoadData}
          handleFormVisibilty={handleForm}
        />
      )}
      {!formVisible && (
        <>
          <div>
            <h3 className="h3todo">Tutaj znajdziesz liste swoich zadań</h3>
            <button className="buttonplus" onClick={handleForm}>
              +
            </button>
          </div>

          <ul>
            {data?.map(({ id, title, author, note, doneDate = '', isDone }) => (
              <ToDoItem
                key={id}
                id={id}
                title={title}
                author={author}
                note={note}
                doneDate={doneDate}
                isDone={isDone}
                getData={handleLoadData}
                handleForm={handleForm}
                setEditedItem={setEditedItem}
              />
            ))}
          </ul>
          <button className="buttondodaj" onClick={handleForm}>
            Dodaj
          </button>
          {error && <div>{error}</div>}
        </>
      )}
    </div>
  );
};
