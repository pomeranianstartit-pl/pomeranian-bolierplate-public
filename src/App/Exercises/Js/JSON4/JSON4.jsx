import React, { useState, useEffect } from 'react';
import './styles.css';

export function ExerciseJSON4() {
  const [localStorageData, setLocalStorageData] = useState('');
  const [localStorageRecords, setLocalStorageRecords] = useState([]);
  const [idCounter, setIdCounter] = useState(1);

  useEffect(() => {
    const storedRecords = JSON.parse(localStorage.getItem('list-nicki')) || [];
    const storedIdCounter = parseInt(localStorage.getItem('list-nicki-index')) || 1;
    setLocalStorageRecords(storedRecords);
    setIdCounter(storedIdCounter);
  }, []);

  const handleSave = () => {
    if (!localStorageData) {
      return; 
    }

    const existingRecord = localStorageRecords.find(record => record.nick === localStorageData);
    if (existingRecord) {
      alert('This nickname already exists. Please choose a different one.');
      return;
    }

    const record = {
      id: idCounter,
      nick: localStorageData
    };

    const updatedRecords = [...localStorageRecords, record];
    localStorage.setItem('list-nicki', JSON.stringify(updatedRecords));
    localStorage.setItem('list-nicki-index', idCounter + 1);

    setLocalStorageRecords(updatedRecords);
    setIdCounter(idCounter + 1);
    setLocalStorageData('');
  };

  const handleRemove = (id) => {
    const updatedRecords = localStorageRecords.filter(record => record.id !== id);

    localStorage.setItem('list-nicki', JSON.stringify(updatedRecords));
    setLocalStorageRecords(updatedRecords);
  };

  const handleInputChange = (e) => {
    setLocalStorageData(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSave();
    }
  };

  return (
    <div className="container-local-storage">
      <div className="input-container">
        <span>NICK</span>
        <input
          type="text"
          value={localStorageData}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
        <button onClick={handleSave}>DODAJ</button>
      </div>
      <div className="records-container">
        <div className="records-list">
          <ul>
            {localStorageRecords.map((record) => (
              <li key={record.id}>
                {record.nick}
                <button onClick={() => handleRemove(record.id)}>X</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}









