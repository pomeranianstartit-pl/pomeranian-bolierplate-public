import { useState } from 'react';
import './styles.css';
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
  const [showError, setShowError] = useState(false);

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
    //ten poniższy if wyłapuje aby nie było pustych graczy plus komunikat aby poinformować ile znaków minimalnei trzeba wprowadzić
    if (!inputText.trim()) {
      setShowError(true); // Show error message
      return;
    }

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
    setShowError(false);
  };
  const deleteNick = (deleteId) => {
    const newArray = nickArray.filter(({ id }) => id !== deleteId);
    setNickArray(newArray);
    saveToLocalStorage(newArray);
  };

  return (
    <div className="savedinput--div-button-input">
      <label className="savedinput--label-mainfield">
        <div className="savedinput--span--input-add">
          <span className="savedinput-span-name">NICK</span>
          <input
            type="text"
            placeholder="  Wpisz nick"
            onChange={(event) => setInputText(event.target.value)}
            value={inputText}
            maxLength={20}
          />
        </div>
        <button onClick={addNick} className="savedinput--button-add">
          Dodaj
        </button>
        {showError && (
          <p className="savedinput-p-announcement">
            Aby wynik się zapisał musisz wpisać przynajmniej jeden znak.
          </p>
        )}
      </label>
      <div className="savedinput--list--names">
        <ul>
          {nickArray.map(({ nick, id }) => (
            <li key={id} className="savedinput--list--name">
              {nick}{' '}
              <button
                onClick={() => deleteNick(id)}
                className="savedinput--button-delete"
              >
                X
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
