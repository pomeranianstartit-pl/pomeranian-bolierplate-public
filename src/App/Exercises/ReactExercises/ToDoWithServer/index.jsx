import { useState } from 'react';
import './style.css';
// import { AddtoDo } from './AddToDo';

import { CheckIcon } from './IconsToDo/CheckIcon';
import { EditIcon } from './IconsToDo/EditIcon ';
import { TrashIcon } from './IconsToDo/TrashIcon';

export const ToDoServer = () => {
  const [data, setData] = useState([]);
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

  const [isClick, setIsClick] = useState(false);
  const handleInsert = () => {
    setIsClick(true);
    return;
  };

  //   console.log(
  //     obj && obj.noteDetails && obj.noteDetails.author && obj.noteDetails.author
  //   );

  //   console.log(obj.noteDetails?.author?.length && obj.noteDetails.author);

  return (
    <div>
      <div className="alltodo">
        <h2 className="h2todo">{'<'}ToDo</h2>
        <div className="h3buttonplus">
          <h3 className="h3todo">Tutaj znajdziesz liste swoich zadań</h3>
          <button className="buttonplus" onClick={handleLoadData}>
            +
          </button>
        </div>
        <ul>
          {data?.map((todo) => {
            return (
              <li className="onetodo">
                <div className="onetodo">
                  <div className="maintodo">
                    <div>{todo.title}</div>
                    <div>{todo.author}</div>
                    <div>{todo.note}</div>
                  </div>
                  <div className="iconstodo">
                    <CheckIcon />
                    <EditIcon />
                    <TrashIcon />
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
        <button
          className="buttondodaj"
          onClick={() => {
            console.log('click on me');
          }}
        >
          DODAJ
        </button>
      </div>
      <div>
        <h4>Tytuł</h4>
        <input />
        <h4>Autor</h4>
        <input />
        <h4>Treść</h4>
        <textarea />
        <div>
          <button
            className="buttoncofnij"
            type="submit"
            onClick={() => {
              console.log('click on me3');
            }}
          >
            COFNIJ
          </button>

          <button
            className="buttondodaj2"
            type="submit"
            onClick={() => {
              console.log('click on me2');
            }}
          >
            DODAJ
          </button>
        </div>
      </div>
    </div>
  );
};
