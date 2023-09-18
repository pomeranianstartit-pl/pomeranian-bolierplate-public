import { useState } from 'react';
import './styles.css';

export const Click5 = () => {
  const [cklick, setClick] = useState(0);
  const [message, setMessage] = useState();
  function clickHandler() {
    let currentClick = cklick;
    setClick(currentClick + 1);
    if (currentClick + 1 >= 5) {
      setMessage('Gratulacje');
    } else {
      setMessage(`Kliknięto ${cklick} razy`);
    }
  }
  return (
    <div className="form--container">
      <h1>Kliknij 5</h1>
      <button className="btn" onClick={clickHandler}>
        {'START'}
      </button>
      <h2>{message}</h2>
    </div>
  );
};
