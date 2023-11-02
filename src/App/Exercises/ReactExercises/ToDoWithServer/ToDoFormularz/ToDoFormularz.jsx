import { useState } from 'react';
import './ToDoFormularzStyles.css';
import toggleArrow from '../../../Images/toggle-arrow.svg';
import { ToDoWithServer } from '../ToDoWithServer';

export const ToDoFormularz = () => {
  const [data, setData] = useState([]);

  const [IsSaveDataClicked, setIsSaveDataClicked] = useState(false);
  const [IsMovedBackClicked, setIsMovedBackClicked] = useState(false);
  const handleSaveData = () => {
    setIsSaveDataClicked(true);
    setIsMovedBackClicked(false);
  };

  const handleMoveBack = () => {
    setIsMovedBackClicked(true);
    setIsSaveDataClicked(false);
  };

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

      <h3>Edycja zadania </h3>
      <ul className="toDoList">
        {data?.map((todo) => {
          return (
            <div>
              <h3>Tytuł</h3>
              <input className="title" title="Szczepienie kitku" />
              <h3>Treść</h3>
              <input
                className="treść"
                treść="Sprawdzić w książeczce zdrowia, kiedy Nala była ostatni raz szczepiona i umówić się z naszym weterynarzem. Dodatkowo pamiętać o ustaleniu drugiej wizyty za rok!!!"
              />
            </div>
          );
        })}
      </ul>

      <div>----------------------</div>

      <button className="saveButton" onClick={handleSaveData}>
        {' '}
        ZAPISZ
      </button>
      <button className="moveBackButton" onClick={handleMoveBack}>
        COFNIJ
      </button>
      <ToDoWithServer />
    </div>
  );
};
