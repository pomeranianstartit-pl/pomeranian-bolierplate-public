import { useState } from 'react';
import './style.css';

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

  //   console.log(
  //     obj && obj.noteDetails && obj.noteDetails.author && obj.noteDetails.author
  //   );

  //   console.log(obj.noteDetails?.author?.length && obj.noteDetails.author);

  return (
    <div>
      <h2>ToDoWithServer</h2>

      <h3>Lista zadań</h3>
      <ul>
        {data?.map((todo) => {
          return (
            <li className="onetodo">
              <div className="onetodo">
                <div className="iconstodo">
                  <CheckIcon />
                  <EditIcon />
                  <TrashIcon />
                </div>
                <div className="maintodo">
                  <div>{todo.title}</div>
                  <div>{todo.author}</div>
                  <div>{todo.note}</div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>

      <div>----------------------</div>

      <button onClick={handleLoadData}>Pobierz listę zadań...</button>
    </div>
  );
};
