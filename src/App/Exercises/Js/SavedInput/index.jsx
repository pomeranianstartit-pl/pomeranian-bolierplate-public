import { useState } from 'react';

export function Exercise() {
  //
  const DEFAULT_NICKS = [
    { nick: 'John', id: 1 },
    { nick: 'Adam', id: 2 },
  ];
  const NICKS_KEY = 'nicks';

  const getFromLocalStorage = () => {
    if (localStorage.getItem(NICKS_KEY) === null) {
      return DEFAULT_NICKS;
    }
    return JSON.parse(localStorage.getItem(NICKS_KEY));
  };
  const [inputText, setInputText] = useState('');
  const [nickArray, setNickArray] = useState(getFromLocalStorage());

  const saveToLocalStorage = (array) =>
    localStorage.setItem(NICKS_KEY, JSON.stringify(array));

  const getNewId = (array) => {
    let maxId = 0;

    array.forEach((element) => {
      if (element.id > maxId) maxId = element.id;
    });
    // console.log(maxId, 'wartosc maxId');
    return maxId + 1;
  };

  const addNick = () => {
    // nickArray.push(inputText);
    setNickArray((prevArray) => {
      const newArray = [
        ...prevArray,
        { nick: inputText, id: getNewId(prevArray) },
      ];
      // console.log(newArray, 'nowa tablica');
      saveToLocalStorage(newArray);
      return newArray;
    });
    setInputText('');
  };
  const deleteNick = (deleteId) => {
    const newArray = nickArray.filter(({ id }) => id !== deleteId);
    setNickArray(newArray);
    saveToLocalStorage(newArray);
  };

  return (
    <div>
      <h1>SavedInput - ćwiczenia</h1>
      <label>
        <input
          type="text"
          placeholder="wpisz nick"
          onChange={(event) => setInputText(event.target.value)}
          value={inputText}
        />
      </label>
      <button onClick={addNick}>Dodaj nick</button>
      <div>
        <ul>
          {nickArray.map(({ nick, id }) => (
            <li key={id}>
              {nick} <button onClick={() => deleteNick(id)}>X</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
