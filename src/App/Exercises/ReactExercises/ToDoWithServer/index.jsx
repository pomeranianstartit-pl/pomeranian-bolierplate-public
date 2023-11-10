import { useEffect, useState } from 'react';

import './style.css';
import { AddNewToDoForm } from './AddToDoForm/AddToDoForm';

export const ToDoWithServer = () => {
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

  const [dsiplayAddNewToDoForm, setDsiplayAddNewToDoForm] = useState(false);
  const [newNoteData, setnewNoteData] = useState([]);

  const handleAddNewToDoForm = () => {
    setDsiplayAddNewToDoForm(!dsiplayAddNewToDoForm);
  };

  const changeProperty = (event) => {
    setnewNoteData((prevObj) => [
      ...prevObj,
      { [event.target.name]: event.target.value },
    ]);
  };
  return (
    <div>
      <h1>ToDo</h1>

      {dsiplayAddNewToDoForm && (
        <AddNewToDoForm changeProperty={changeProperty} />
      )}
      <p>
        Tutaj znajdziesz liste swoich zadań{' '}
        <button onClick={handleAddNewToDoForm}>+</button>
      </p>
      <div>
        <div className="todo-gap">
          {data.length > 0 &&
            data.map((todo) => {
              return (
                <div className="singel-todo-boarder">
                  <li key={todo.id} className="todo-items">
                    <div className="todo-title">{todo.title}</div>
                    <div className="todo-author">{todo.author}</div>
                    <div className="todo-note">{todo.note}</div>
                  </li>
                  <div>ikonka</div>
                </div>
              );
            })}
          <div className="buttons">
            <button onClick={handleAddNewToDoForm} className="button-dodaj">
              DODAJ
            </button>
          </div>
        </div>
      </div>
      {error && <div>{error}</div>}
    </div>
  );
};
