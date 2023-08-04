import './styles.css';
import { useState } from 'react';

export const VanishString = () => {

  const [vanish, setVanish] = useState(true)

  function handleVanish() {


    setVanish(!vanish)

  }

  return (
    <div>
      <h1>znikajacy text</h1>
      <button onClick={handleVanish}>zniknij</button>
      {vanish && <p>Znikajacy text</p>}

    </div>
  );
};
