import { useEffect, useState } from 'react';
import { generateRandomNumber } from './helper';
import { StartMenu } from './components/StartMenu';
import './styles.css';

export const HitTheMole = () => {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [gameTime, setGameTime] = useState(60);
  const [numberOfMoles, setNumberOfMoles] = useState(1);
  const handleStartGame = () => {};

  return (
    <div>
      <h3 className="game--description">
        Gra polegająca na podążaniu za krecikiem i trafieniu na kwadrat, w
        którym się pojawił.
      </h3>
      <div></div>
      <div className="obce">
        {!isGameStarted && (
          <StartMenu
            setGameTime={setGameTime}
            setNumberOfMoles={setNumberOfMoles}
            setIsGameStarted={setIsGameStarted}
          />
        )}
      </div>
    </div>
  );
};
