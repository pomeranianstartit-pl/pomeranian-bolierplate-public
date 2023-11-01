import { useState, useEffect } from 'react';
import './styles.css';

// const users = [{ id: 1, name: 'Janek' }];

export const Exercise = () => {
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
    <div className='saved-input-box-l'>
      {/* Lewa sekcja */}
      <div className='saved-input-left'>
        <div className='nickandfield'>
          <label htmlFor="input">NICK</label>
          <input value={inputValue} onChange={handleInputUpdate} />
        </div>

        {error && <div >{error}</div>}

        <div className='add-button'>
          <button disabled={!inputValue} onClick={handleAddNick}>
            DODAJ
          </button>
        </div>
      </div>

      {/* Prawa sekcja */}
      <div className='saved-input-box-r'>
        {users.map((user) => {
          return (
            <div className='user-name-block' key={user.id}>
              <div className='user-name'>
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