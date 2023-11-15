import { useState } from 'react';
import { ToDoServer } from './index';

export const AddToDo = () => {
  const [isClick, setIsClick] = useState(false);
  const handleonAdd = () => {
    setIsClick(true);
  };
  const handleoffAdd = () => {
    setIsClick(false);
  };

  const [data, setData] = useState([]);

  return (
    <div>
      {isClick ? (
        <div>
          <ToDoServer />
        </div>
      ) : (
        <div>
          <h3 className="h3todo">Dodawanie zadania.</h3>

          <h4>Tytuł</h4>
          <input />
          <h4>Autor</h4>
          <input />
          <h4>Treść</h4>
          <textarea />
          <div>
            <button className="buttoncofnij" onClick={handleonAdd}>
              COFNIJ
            </button>

            <button
              className="buttondodaj2"
              type="submit"
              onClick={handleonAdd}
            >
              DODAJ
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
