import React, { useState } from "react";

export function JsArraysBasics() {
  const [myArray, setMyArray] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const addNewElement = () => {
    const newElement = {
      order: myArray.length + 1,
      firstName,
      lastName,
    };
    setMyArray([...myArray, newElement]);
    setFirstName("");
    setLastName("");
  };

  const removeLastElement = () => {
    setMyArray(myArray.slice(0, myArray.length - 1));
  };

  return (
    <div>
      <div>
        <label>Imię:</label>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div>
        <label>Nazwisko:</label>
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <button onClick={addNewElement}>Dodaj nowy element</button>
      <button onClick={removeLastElement} disabled={myArray.length === 0}>
        Usuń ostatni element
      </button>
      <ul>
        {myArray.map((element, index) => (
          <li key={index}>
            {element.order}. {element.firstName} {element.lastName}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default JsArraysBasics;











