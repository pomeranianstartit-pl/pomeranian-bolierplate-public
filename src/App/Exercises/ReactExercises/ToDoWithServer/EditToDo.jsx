import { useState } from 'react';
import { ToDoServer } from './index';

export const EdittoDo = () => {
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
          <h3 className="h3todo">Edycja zadania.</h3>

          <h4>Tytuł</h4>
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
              ZAPISZ
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
