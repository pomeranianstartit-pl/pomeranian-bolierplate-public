import { useEffect, useState } from 'react';

const SAVE_TO_LOCAL_STORAGE = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const ID_COUNTER_INIT = 1;

export const SavedInput = () => {
  const [nickList, setNickList] = useState([]);
  const [newNick, setNewNick] = useState('');
  const [idCounter, setIdCounter] = useState(ID_COUNTER_INIT);

  const handleInputChange = (e) => {
    const { value } = e.target;
    setNewNick(value);
  };

  const handleAddNick = () => {
    if (newNick.trim() === '') return;

    const updatedNickList = [...nickList, { nick: newNick, id: idCounter }];
    const updatedIdCounter = idCounter + 1;
    setNickList(updatedNickList);
    setNewNick('');
    setIdCounter(updatedIdCounter);

    SAVE_TO_LOCAL_STORAGE('list-nicki', updatedNickList);
    SAVE_TO_LOCAL_STORAGE('list-nicki-index', updatedIdCounter);
  };

  const handleRemoveNick = (id) => {
    const updatedNickList = nickList.filter((nick) => nick.id !== id);
    setNickList(updatedNickList);

    SAVE_TO_LOCAL_STORAGE('list-nicki', updatedNickList);
  };

  useEffect(() => {
    const storedNickList = JSON.parse(localStorage.getItem('list-nicki'));
    const storedIdCounter = parseInt(localStorage.getItem('list-nicki-id'));

    setNickList(storedNickList || []);
    setIdCounter(storedIdCounter || ID_COUNTER_INIT);
  }, []);

  return (
    <div>
      <div>
        <p>Nick</p>
        <input
          type="text"
          placeholder="Wpisz nick"
          value={newNick}
          onChange={handleInputChange}
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
