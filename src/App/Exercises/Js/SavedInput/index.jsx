import React, { useState, useEffect } from 'react';

export const SavedInput = () => {
  const [nick, setNick] = useState('');
  const [nickList, setNickList] = useState([]);
  const [idCounter, setIdCounter] = useState(1);

  useEffect(() => {
    // Odczytaj dane z localStorage podczas załadowania komponentu
    const storedNickList = JSON.parse(
      localStorage.getItem('list-nicki') || '[]'
    );
    const storedIdCounter = parseInt(
      localStorage.getItem('list-nicki-index') || '1'
    );

    setNickList(storedNickList);
    setIdCounter(storedIdCounter);
  }, []);

  const handleNickChange = (e) => {
    setNick(e.target.value);
  };

  const addNick = () => {
    if (nick.trim() !== '') {
      // Walidacja nicka na liście
      if (nickList.some((item) => item.nick === nick)) {
        alert('Ten nick już istnieje w liście.');
        return;
      }

      const updatedNickList = [...nickList, { nick: nick, id: idCounter }];
      setNickList(updatedNickList);
      setIdCounter(idCounter + 1);

      // Zapisywanie danych do localStorage
      localStorage.setItem('list-nicki', JSON.stringify(updatedNickList));
      localStorage.setItem('list-nicki-index', idCounter);

      setNick('');
    }
  };

  return (
    <div className="panelInput">
      <p className="nickText">NICK</p>
      <input
        type="text"
        placeholder="Wprowadź nick"
        value={nick}
        onChange={handleNickChange}
      />
      <button className="btnAdd" onClick={addNick}>
        DODAJ
      </button>

      <div className="panelTable">
        <div className="nicksList">
          {nickList.map((item) => (
            <div className="nickName" key={item.id}>
              {item.nick}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
