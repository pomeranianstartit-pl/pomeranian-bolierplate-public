import { useState } from 'react';
import { ToDoServer } from './index';

export const EdittoDo = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [isClick, setIsClick] = useState(false);

  const handleAddDo = () => {
    if (!inputValue) {
      setError('Nie można dodać do listy');
      return;
    }

    const newDO = {
      id,
      title,
      author,
      note,
      isDone,
      doneDate = '',
      getData,
      handleForm,
      setEditedItem,
    }
  };

  const handleonAdd = () => {
    setIsClick(true);
  };
  const handleoffAdd = () => {
    setIsClick(false);
  };

  const [isSave, setIsSave] = useState(false);
  const handleonSave = () => {
    setIsSave(true);
  };
  const handleoffSave = () => {
    setIsSave(false);
  };



  return (
    <div>
      {isClick : isSave ? (
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
              onClick={handleonSave}
            >
              ZAPISZ
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
