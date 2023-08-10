import { useState } from 'react';
import './styles.css';
// import dataJson from './data.json';

const objectToEncode = {
  1: [],
  2: {},
  3: 1,
  4: Boolean(1),
  5: 'string',
  data: 123123,
};

export const JsStorages = () => {
  const UNIQE_LOCALSTORAGE_KEY = 'namekey';
  const UNIQUE_OBJECT_DATA_LS_KEY = 'objectUniqueKey';
  const [getLocalStorageData, setLocalStorageData] = useState('');

  const handleSave = () => {
    localStorage.setItem(UNIQE_LOCALSTORAGE_KEY, getLocalStorageData);
    return console.log('Zapsiano dane w Local Storage', getLocalStorageData);
  };

  const handleRead = () => {
    const getLocalStorageNameData = localStorage.getItem(
      UNIQE_LOCALSTORAGE_KEY
    );
    return console.log(
      'Odczytno dane z Local Storage',
      getLocalStorageNameData
    );
  };

  const handleClear = () => {
    const getLocalStorageNameData = localStorage.removeItem(
      UNIQE_LOCALSTORAGE_KEY
    );
    return console.log(
      'Usunięto dane z Local Storage',
      getLocalStorageNameData
    );
  };

  const stringifyObject = () => {
    // its encoding JSON object
    const objectToEncodeJSON = JSON.stringify(objectToEncode);
    return objectToEncodeJSON;
  };
  stringifyObject();

  const parseJsonObject = () => {
    const objectToDecodeJSON = JSON.parse(stringifyObject());
    return console.log(objectToDecodeJSON);
  };
  parseJsonObject();

  const genericParseJsonObjects = (jsonObject) => {
    const objectToDecode = JSON.parse(jsonObject);
    return objectToDecode;
  };

  ////set object to local storage

  const setDataToLocalStorage = () => {
    const storedData = localStorage.setItem(
      UNIQUE_OBJECT_DATA_LS_KEY,
      stringifyObject()
    );
    return storedData;
  };
  setDataToLocalStorage();

  const getDataFromLocalStorage = () => {
    const dataFromLS = genericParseJsonObjects(
      localStorage.getItem(UNIQUE_OBJECT_DATA_LS_KEY)
    );
    console.log('decode data from LS with specyfic key - ', dataFromLS[3]);
    return console.log('decode data from LS - ', dataFromLS);
  };
  getDataFromLocalStorage();
  return (
    <div>
      <input
        type="text"
        value={getLocalStorageData}
        onChange={(event) => setLocalStorageData(event.target.value)}
      />
      <button onClick={handleSave}>Zapisz</button>
      <button onClick={handleRead}>Odczytaj</button>
      <button onClick={handleClear}>Wyczyść</button>
    </div>
  );
};
