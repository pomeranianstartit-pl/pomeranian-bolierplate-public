import { useState } from 'react';

export function SavedInput() {
  const KEY_NICKS = 'Nicks';
  const DEFAULT_NICKS = [
    { nick: 'John', id: 1 },
    { nick: 'Adam', id: 2 },
  ];
  const getFromLocalStorage = () => {
    if (localStorage.getItem(KEY_NICKS) === null) {
      return DEFAULT_NICKS;
    }
    return JSON.parse(localStorage.getItem(KEY_NICKS));
  };
  const [nickArray, setNickArray] = useState(getFromLocalStorage());
  const [inputText, setInputText] = useState('');
  console.log(nickArray, '<<< NickArray');

  const saveToLocalStorage = (array) =>
    localStorage.setItem(KEY_NICKS, JSON.stringify(array));

  const getNewId = (array) => {
    let maxId = 0;

    array.forEach((element) => {
      if (element.id > maxId) maxId = element.id;
    });
    // console.log(maxId, 'wartosc maxId');
    return maxId + 1;
    // return 5;
  };

  const addNick = () => {
    setNickArray((prevArray) => {
      const newArray = [
        ...prevArray,
        { nick: inputText, id: getNewId(prevArray) },
      ];
      saveToLocalStorage(newArray);
      return newArray;
    });
    setInputText('');
    console.log(inputText, '<< nowy nick');
  };
  const deleteNick = (delId) => {
    const newArray = nickArray.filter(({ id }) => id !== delId);
    setNickArray(newArray);
    saveToLocalStorage(newArray);
  };
  return (
    <div>
      <h1>Saved Input</h1>
      <label>
        NICK
        <input
          type="text"
          placeholder="wpisz nick"
          onChange={(event) => setInputText(event.target.value)}
          value={inputText}
        />
      </label>
      <button onClick={addNick}>DODAJ</button>
      <div className="nick-table">
        <ul>
          {nickArray.map(({ id, nick }) => (
            <li key={id}>
              {nick} <button onClick={() => deleteNick(id)}>X</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
