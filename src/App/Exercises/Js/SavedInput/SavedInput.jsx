import { useState, useEffect } from 'react';
import './styles.css';

export const SavedInput = () => {
  const LS_NICK_LIST_KEY = 'list-nicki'; //global, good practice!
  const LS_ID_COUNTER_KEY = 'list-nicki-index';
  const [getNick, setNick] = useState('');

  const getLocalStorageParsedValue = (localStorageKey) =>
    JSON.parse(localStorage.getItem(localStorageKey));

  const [getNickList, setNickList] = useState(
    getLocalStorageParsedValue(LS_NICK_LIST_KEY) || [] //checking if there is value in localstorage or using empty array
  );

  const [getIdCounter, setIdCounter] = useState(
    getLocalStorageParsedValue(LS_ID_COUNTER_KEY) || 0 //checking if there is value in localstorage or using 0 value
  );

  // Saving data to Local Storage after changing nickList or idCounter
  useEffect(() => {
    localStorage.setItem(LS_NICK_LIST_KEY, JSON.stringify(getNickList));
    localStorage.setItem(LS_ID_COUNTER_KEY, getIdCounter.toString());
  }, [getIdCounter, getNickList]);

  const handleAddNick = () => {
    // if getNick is just empty string do nothing
    if (getNick.trim() === '') {
      return;
    }
    const newNick = {
      id: getIdCounter,
      name: getNick,
    };
    setNickList([...getNickList, newNick]);
    setIdCounter((prevCounter) => prevCounter + 1);
  };

  const handleClearNick = (id) => {
    setNickList([...getNickList.splice(id, 1)]);
    return;
  };

  return (
    <div className="nickContainer">
      <div className="addNick">
        <h3>NICK</h3>
        <input
          type="text"
          value={getNick}
          onChange={(event) => setNick(event.target.value)}
        />
        <button onClick={handleAddNick}>DODAJ</button>
      </div>
      <div className="nickList">
        <ul>
          {getNickList.map((nick) => (
            <li key={nick.id}>
              {nick.name}
              <button onClick={handleClearNick(nick.id)}>X</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
