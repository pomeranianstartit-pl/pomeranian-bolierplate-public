import React, { useState } from 'react';
import './styles.css';

export const CountClicks = () => {
  const [clicks, setClicks] = useState(0);

  const ShowText = clicks === 5;

  return (
    <div className="clicks">
      <h2>KLIKNIJ 5</h2>
      <button onClick={() => setClicks(clicks + 1)} className="btn">
        START
      </button>
      <p>Kliknięto {clicks} razy</p>
      {ShowText && <p>Ukryta wiadomość</p>}
      <button onClick={() => setClicks(0)} className="btn btn-reset">
        RESET
      </button>
    </div>
  );
};
