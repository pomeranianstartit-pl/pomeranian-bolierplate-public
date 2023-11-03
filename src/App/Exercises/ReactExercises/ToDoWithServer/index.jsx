import { useState } from 'react';
import './styles.css';
import { DoneIcon } from './TodoComponents/doneIcon';
import { EditIcon } from './TodoComponents/editIcon';
import { TrashIcon } from './TodoComponents/trashIcon';

export const ToDoWithServer = () => {
  const [data, setData] = useState([]);
  const [isAddingNewTodo, setIsAddingNewTodo] = useState(false);
  const handleAddNewTodo = () => {
    setIsAddingNewTodo(true);
  };

  const handleBack = () => {
    setIsAddingNewTodo(false);
  };

  const handleSaveTodo = () => {};
  const handleLoadData = () => {
    fetch('http://localhost:3333/api/todo')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        console.log(err, 'err');
      });
  };

  //   console.log(
  //     obj && obj.noteDetails && obj.noteDetails.author && obj.noteDetails.author
  //   );

  //   console.log(obj.noteDetails?.author?.length && obj.noteDetails.author);

  return (
    <div className="todo-w-serv--container">
      {isAddingNewTodo ? (
        <div className="add-new-todo--wrapper">
          <h5>Dodawanie zadania</h5>
          <div>
            <div className="new-todo-form">
              <p>Tytuł</p>
              <input
                title="tytul"
                type="text"
                placeholder="Kupić parasol na balkon"
              ></input>
            </div>
            <div className="new-todo-form">
              <p>Autor</p>
              <input title="autor" type="text" placeholder="Wojtek"></input>
            </div>
            <div className="new-todo-form">
              <p>Treść</p>
              <input
                title="tresc"
                type="text"
                placeholder="Zmierzyć ile mamy miejsca na balkonie od barierki do kanapy i ile musi mieć max średnicy - miarka!!"
              ></input>
            </div>
          </div>
          <div className="form-btn--wrapper">
            <button className="handleBack-btn" onClick={handleBack}>
              COFNIJ
            </button>
            <button className="add-new-todo-btn" onClick={handleSaveTodo}>
              ZAPISZ
            </button>
          </div>
        </div>
      ) : (
        <div>
          <div className="todo-w-serv-header">
            <h5>Tutaj znajdziesz listę swoich zadań.</h5>
            <button onClick={handleLoadData}>+</button>
          </div>
          <div>
            <div>
              {data?.map((todo) => {
                return (
                  <div className="todo-element-wrapper">
                    <div className="todo-w-serv-element">
                      <div className="element-note">
                        <h3>{todo.title}</h3>
                        <p>{todo.author}</p>
                        <p>{todo.createdAt}</p>
                        <div>{todo.note}</div>
                      </div>
                      <div className="element-edit">
                        <DoneIcon />
                        <EditIcon />
                        <TrashIcon />
                      </div>
                    </div>
                  </div>
                );
              })}
              <div className="add-new-todo-btn--wrapper">
                <button className="add-new-todo-btn" onClick={handleAddNewTodo}>
                  DODAJ
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
