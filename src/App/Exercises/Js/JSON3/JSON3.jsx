import React, { useState } from 'react';

export function ExerciseJSON3() {
  const [localStorageData, setLocalStorageData] = useState('');
  const [localStorageRecords, setLocalStorageRecords] = useState([]);

  const handleSave = () => {
    const record = {
      id: Date.now(), // Unikalny identyfikator rekordu
      data: localStorageData
    };

    const records = localStorage.getItem("records");
    const existingRecords = records ? JSON.parse(records) : [];
    const updatedRecords = [...existingRecords, record];

    localStorage.setItem("records", JSON.stringify(updatedRecords));
    setLocalStorageRecords(updatedRecords);
    console.log("Zapisane dane w Local Storage:", localStorageData);
  }

  const handleRead = () => {
    const storedRecords = localStorage.getItem("records");
    if (storedRecords) {
      const parsedRecords = JSON.parse(storedRecords);
      setLocalStorageRecords(parsedRecords);
      console.log("Odczytane dane z Local Storage:", parsedRecords);
    } else {
      console.log("Brak danych w Local Storage.");
    }
  }

  const handleClear = () => {
    localStorage.removeItem("records");
    setLocalStorageData('');
    setLocalStorageRecords([]);
    console.log("Dane w Local Storage zostały wyczyszczone.");
  }

  return (
    <div className="container-local-storage">
      <input
        type="text"
        value={localStorageData}
        onChange={(e) => setLocalStorageData(e.target.value)}
      />
      <button onClick={handleSave}>Save</button>
      <button onClick={handleRead}>Read</button>
      <button onClick={handleClear}>Clear</button>
      <div>
        <p>Zapisane dane: {localStorageData}</p>
        <p>Odczytane dane: {localStorageData ? localStorageData : "Brak"}</p>
        <p>Dane w Local Storage zostały wyczyszczone.</p>
      </div>
      <div>
        <h3>Zapisane rekordy:</h3>
        <ul>
          {localStorageRecords.map((record) => (
            <li key={record.id}>{record.data}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}





