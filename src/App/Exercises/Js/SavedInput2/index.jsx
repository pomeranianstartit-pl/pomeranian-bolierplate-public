import React, { useState, useEffect } from 'react';
import './styles.css';

export const SavedInput2 = () => {
  const [inputValue, setInputValue] = useState('');
  const [users, setUsers] = useState([]);
  const [idCounter, setIdCounter] = useState(1);
  const [error, setError] = useState('');

  const handleAddNick = () => {
    if (!inputValue) {
      setError('Pole nie może być puste');
      return;
    }

    if (users.find((user) => user.name === inputValue)) {
      setError('Taki nick już istnieje');
      return;
    }

    const newNick = {
      name: inputValue,
      id: idCounter,
    };

    setUsers([...users, newNick]);
    setIdCounter(idCounter + 1);
    setInputValue('');
  };

  const handleRemoveNick = (id) => {
    const newUsers = users.filter((user) => user.id !== id);
    setUsers(newUsers);
  };

  const handleInputUpdate = (e) => {
    setError('');
    setInputValue(e.target.value);
  };

  useEffect(() => {
    const localUsers = JSON.parse(localStorage.getItem('list-nicki')) || [];
    const localIdCounter =
      parseInt(localStorage.getItem('list-nicki-index')) || 1;

    setUsers([...localUsers]);
    setIdCounter(localIdCounter);
  }, []);

  useEffect(() => {
    if (!users.length) return;

    localStorage.setItem('list-nicki', JSON.stringify(users));
    localStorage.setItem('list-nicki-index', idCounter);
  }, [idCounter, users]);

  return (
    <div>
      {/* Lewa sekcja */}
      <div>
        <div>
          <label htmlFor="input">NICK</label>
          <input value={inputValue} onChange={handleInputUpdate} />
        </div>

        {error && <div>{error}</div>}

        <div>
          <button disabled={!inputValue} onClick={handleAddNick}>
            Dodaj
          </button>
        </div>
      </div>

      {/* Prawa sekcja */}
      <div>
        {users.map((user) => {
          return (
            <div key={user.id}>
              <div>
                {user.name} {user.id}
              </div>
              <button onClick={() => handleRemoveNick(user.id)}>X</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
