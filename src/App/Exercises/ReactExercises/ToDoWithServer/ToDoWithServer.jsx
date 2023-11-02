import { useState } from 'react';
import './style.css';
import toggleArrow from '../../../Images/toggle-arrow.svg';
import { ToDoFormularz } from '../ToDoWithServer/ToDoFormularz';

import tickIcon from '../../../Images/tick.svg';
import pencilIcon from '../../../Images/pencil.svg';
import trashIcon from '../../../Images/trash.svg';

export const ToDoWithServer = () => {
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
      <h2>
        <img
          src={toggleArrow}
          className="faqimg"
          alt="Tu powinien być obrazek"
        />
        TODO
      </h2>

      <h3>
        Tu znajdziesz listę swoich zadań{' '}
        <button className="plusButton">+</button>
      </h3>
      <ul className="toDoList">
        {data?.map((todo) => {
          return (
            <li>
              <div>{todo.title}</div>
              <div>{todo.author}</div>
              <div>{todo.note}</div>
              <div className="Icons">
                <img
                  src={tickIcon}
                  className="tickimg"
                  alt="Tu powinien być obrazek"
                />
                <img
                  src={pencilIcon}
                  className="pencilimg"
                  alt="Tu powinien być obrazek"
                />
                <img
                  src={trashIcon}
                  className="trashimg"
                  alt="Tu powinien być obrazek"
                />
              </div>
            </li>
          );
        })}
      </ul>

      <div>----------------------</div>

      <button className="dodajButton" onClick={handleLoadData}>
        Dodaj
      </button>
      <ToDoFormularz />
    </div>
  );
};
