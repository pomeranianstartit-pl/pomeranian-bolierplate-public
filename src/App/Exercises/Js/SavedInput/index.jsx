import './styles.css';
import { useState } from 'react';

const initialListNick = JSON.parse(localStorage.getItem('list-nicki'));
const initialIdCounter = localStorage.getItem('idCounter');

export function SavedInput() {
  const [listNick, setListNick] = useState(
    initialListNick ? initialListNick : []
  );
  const [currentName, setCurrentName] = useState('');
  const [idCounter, setIdCounter] = useState(
    initialIdCounter && Number(initialIdCounter)
  );

  const sendToLocalStorage = (newList, count) => {
    const stringifyNickList = JSON.stringify(newList);

    localStorage.setItem('list-nicki', stringifyNickList);
    localStorage.setItem('idCounter', count);

    setIdCounter(count);
    setListNick(newList);
  };

  const addPerson = (e) => {
    e.preventDefault();
    const inputNickValue = currentName;
    const newList = [...listNick, { nick: inputNickValue }];
    const count = idCounter + 1;

    sendToLocalStorage(newList, count);
  };

  const changeValue = (e) => {
    setCurrentName(e.target.value);
  };

  const deletePerson = (index) => {
    const newList = listNick.filter((_, idx) => idx !== index);
    setListNick(newList);
    sendToLocalStorage(newList, idCounter);
  };

  return (
    <div className="saved-input-container">
      <form onSubmit={addPerson}>
        <div className="left-part">
          <div className="nick-input-row">
            <p>NICK</p>
            <input
              type="text"
              className="input-nick"
              placeholder="Podaj swój nick"
              autoFocus
              onChange={changeValue}
            />
          </div>
          <button type="submit">DODAJ</button>
        </div>
      </form>
      <div className="list">
        {listNick &&
          listNick.map((person, index) => {
            return (
              <div className="row-on-list">
                <div className="name-on-list">{person.nick}</div>
                <button
                  className="x-button"
                  onClick={() => deletePerson(index)}
                >
                  X
                </button>
              </div>
            );
          })}
      </div>
    </div>
  );
}
