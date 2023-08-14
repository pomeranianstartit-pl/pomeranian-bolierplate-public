import React, { useState } from 'react';

export const LocalStorage2 = () => {
  const [idCounter, setIdCounter] = useState(
    parseInt(localStorage.getItem('idCounter')) || 0
  );

  const increment = () => {
    const newIdCounter = idCounter + 1;
    setIdCounter(newIdCounter);
    localStorage.setItem('idCounter', newIdCounter);
  };

  return (
    <div>
      <h1>Local Storage counter</h1>
      <div>
        <input type="text" onClick={idCounter} placeholder="Wpisz Nick"></input>

        <button onClick={increment}>DODAJ</button>
      </div>
    </div>
  );
};
