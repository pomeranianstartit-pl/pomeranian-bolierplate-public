import { useEffect, useState } from 'react';

const ID_COUNTER = 1;

const SAVE_TO_LOCAL_STORAGE = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const GET_FROM_LOCAL_STORAGE = (key) => {
  return JSON.parse(localStorage.getItem(`${key}`));
};

export const LocalStorage2 = () => {
  const [nickList, setNickList] = useState([]);
  const [newNick, setNewNick] = useState('');
  const [idCounter, setIdCounter] = useState(ID_COUNTER);

  const handleAddNick = () => {
    if (newNick.trim() === '') return;
    const newNickData = {
      nick: newNick,
      id: idCounter,
    };
    const updatedNickList = [...nickList, newNickData];
    const newIdCounter = idCounter + 1;

    setNickList(updatedNickList);
    setIdCounter(newIdCounter);
    setNewNick('');

    SAVE_TO_LOCAL_STORAGE('list-nicki', updatedNickList);
    SAVE_TO_LOCAL_STORAGE('list-nicki-index', newIdCounter);
  };
  const handleRemoveNick = (id) => {
    const updatedNickList = nickList.filter((nick) => nick.id !== id);

    setNickList(updatedNickList);
    SAVE_TO_LOCAL_STORAGE('list-nicki', updatedNickList);
  };

  const handleInputChange = (e) => {
    const { value } = e.target;

    setNewNick(value);
  };

  useEffect(() => {
    const storedNickList = GET_FROM_LOCAL_STORAGE('list-nicki') || [];
    const storedIdCounter =
      GET_FROM_LOCAL_STORAGE('list-nicki-index') || ID_COUNTER;

    setNickList(storedNickList);
    setIdCounter(storedIdCounter);
  }, []);

  return (
    <div>
      <div>
        <p>Nick</p>
        <input
          placeholder="Wpisz nick"
          value={newNick}
          onChange={handleInputChange}
          type="text"
        />
        <button onClick={handleAddNick}>Dodaj</button>
      </div>
      <ul>
        {nickList.map((nickData) => {
          return (
            <li key={nickData.id}>
              <div>{nickData.nick}</div>
              <button onClick={() => handleRemoveNick(nickData.id)}>X</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
