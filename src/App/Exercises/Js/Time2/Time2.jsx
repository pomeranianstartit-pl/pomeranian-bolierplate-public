import React, { useState, useEffect } from 'react';
import './styles.css';

export const Exercise5 = () => {
  const [isRunning, setIsRunning] = useState(true);
  const [initialTime, setInitialTime] = useState(Date.now());
  const [elapsedTime, setElapsedTime] = useState(0);
  const [results, setResults] = useState([]);

  useEffect(() => {
    let intervalId;

    if (isRunning) {
      const intervalStart = Date.now() - elapsedTime;
      intervalId = setInterval(() => {
        setElapsedTime(Date.now() - intervalStart);
      }, 10);
    }

    return () => clearInterval(intervalId);
  }, [isRunning, elapsedTime]);

  const toggleTimer = () => {
    if (isRunning) {
      // Jeśli timer jest uruchomiony, zatrzymaj go i zapamiętaj aktualny czas
      setInitialTime(Date.now());
      setIsRunning(false);
    } else {
      // Jeśli timer jest zatrzymany, wznow go i skoryguj wartość elapsedTime
      setInitialTime(Date.now() - elapsedTime);
      setIsRunning(true);
    }
  };

  const saveResult = () => {
    const formattedTime = formatTime(elapsedTime);
    setResults([...results, formattedTime]);
  };

  const formatTime = (timestamp) => {
    const minutes = Math.floor(timestamp / 1000 / 60);
    const seconds = Math.floor(timestamp / 1000) % 60;
    const ms = timestamp % 100;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${ms}`;
  };

  return (
    <div className="timer-container">
      <div>{formatTime(elapsedTime)}</div>
      <button className="timer-button" onClick={toggleTimer}>
        {isRunning ? 'Zatrzymaj' : 'Wznów'}
      </button>
      {!isRunning && (
        <div>
          <button onClick={saveResult}>Zapisz wynik</button>
        </div>
      )}
      <table className="results-table">
        <thead>
          <tr>
            <th>Zatrzymany Czas</th>
          </tr>
        </thead>
        <tbody>
          {results.map((result, index) => (
            <tr key={index}>
              <td>{result}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Exercise5;






