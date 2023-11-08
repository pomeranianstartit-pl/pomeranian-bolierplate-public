import { useState } from 'react';
import './style.css';
import { AddToDo } from './AddToDo';

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
  const handleonAdd = () => {
    setIsClick(true);
  };
  const handleoffAdd = () => {
    setIsClick(false);
  };

  //   console.log(
  //     obj && obj.noteDetails && obj.noteDetails.author && obj.noteDetails.author
  //   );

  //   console.log(obj.noteDetails?.author?.length && obj.noteDetails.author);

  return (
    <div>
      <div className="alltodo">
        {isClick ? (
          <div>
            <AddToDo />
          </div>
        ) : (
          <div>
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
                        <button>
                          <CheckIcon />
                        </button>
                        <button>
                          <EditIcon />
                        </button>
                        <button>
                          <TrashIcon />
                        </button>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
            <button className="buttondodaj" onClick={handleonAdd}>
              DODAJ
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
