import { useState, useEffect } from 'react';
export function SavedInput() {
  const LS_NICK_LIST_KEY = 'list-nicki';
  const LS_ID_COUNTER_KEY = 'list-nicki-index';
  const getLocalStorageParsedValue = (localStorageKey) =>
    JSON.parse(localStorage.getItem(localStorageKey));
  const [getNick, setNick] = useState('');
  const [getNickList, setNickList] = useState(
    getLocalStorageParsedValue(LS_NICK_LIST_KEY) || []
  );
  const [getIdCounter, setIdCounter] = useState(
    getLocalStorageParsedValue(LS_ID_COUNTER_KEY) || 0
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
  return (
    <div>
      <input
        type="text"
        value={getNick}
        onChange={(event) => setNick(event.target.value)}
      />
      <button onClick={handleAddNick}>Dodaj</button>
      <ul>
        {getNickList.map((nick) => (
          <li key={nick.id}>{nick.name}</li>
        ))}
      </ul>
    </div>
  );
}
