import { useState } from 'react';
import './styles.css';

// }
export function Exercise() {
  const [table, setTable] = useState([]);
  const [idCounter, setIdCounter] = useState('');
  const [notification, setNotification] = useState('');

  const addName = () => {
    if (idCounter.trim() !== '') {
      if (!table.includes(idCounter.trim())) {
        setTable([...table, idCounter.trim()]);
        setIdCounter('');
        setNotification('Your nick added to the list.');
        setTimeout(() => {
          setNotification('');
        }, 2000);

        const localStorageData = localStorage.getItem('table');
        const updatedLocalStorageData = localStorageData
          ? JSON.parse(localStorageData)
          : [];
        updatedLocalStorageData.push(idCounter.trim());
        localStorage.setItem('table', JSON.stringify(updatedLocalStorageData));
      } else {
        setNotification('You cannot provide the same nick.');
        setTimeout(() => {
          setNotification('');
        }, 2000);
      }
      const localStorageData = localStorage.getItem('table');
      if (localStorageData) {
        const parsedData = JSON.parse(localStorageData);
        console.log(parsedData);
      } else {
        console.log('Local storage is empty.');
      }
    }
  };

  const deleteName = (index) => {
    const newTableofNames = [...table];
    newTableofNames.splice(index, 1);
    setTable(newTableofNames);
  };
  return (
    <div>
      <div className="box">
        <div className="header">
          <h3 className="nick">NICK</h3>
          <input
            name="enter nick"
            className="myInput"
            value={idCounter}
            onChange={(e) => setIdCounter(e.target.value)}
          />
          <div className="container">
            {table.map((person, id, index) => {
              return (
                <div key={id} className="table">
                  {person}
                  <button onClick={() => deleteName(index)}>X</button>
                </div>
              );
            })}
          </div>
          <button onClick={addName} className="button-dodaj">
            DODAJ
          </button>
          <p>{notification}</p>
        </div>
      </div>
    </div>
  );
}
