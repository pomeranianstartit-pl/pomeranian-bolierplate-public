import './style.css';
import { useState } from 'react';

const LIST_USER_NAME = [];

export const AddYourNameToList = () => {
  const [inputName, setInputName] = useState('');
  const [error, setError] = useState('');

  const addName = (e) => {
    e.preventDefault();

    try {
      if (inputName === null || inputName === '') {
        throw new Error('Nie podałeś nazwy');
      }

      LIST_USER_NAME.forEach((listName) => {
        if (inputName === listName) {
          throw new Error('Podany Nick już istnieje');
        }
      });
      LIST_USER_NAME.push(inputName);
      setError('');
      setInputName('');
    } catch (error) {
      setError(error.message);
      setInputName('');
    }
  };

  const handleOnChange = (e) => {
    setInputName(e.target.value);
  };

  return (
    <>
      <div className="container">
        <div className="add-your-name">
          <form onSubmit={addName}>
            <p>Nick</p>
            <input
              type="text"
              placeholder="Podaj nick"
              value={inputName}
              onChange={handleOnChange}
            />
            <button type="submit">DODAJ</button>
            <p>{error}</p>
            {/* <p>{JSON.stringify(LIST_USER_NAME)}</p> */}
          </form>
        </div>
        <div className="name-list">
          <ul>
            {LIST_USER_NAME.map((name) => (
              <li key="name">{name}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
