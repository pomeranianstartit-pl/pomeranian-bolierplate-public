import './styles.css';

import { MenuView } from './MenuView';
import { GameView } from './GameView';
import { PlaygroundView } from './PlaygroundView';
import { useState } from 'react';

export const HitTheMole = () => {
  const [isGameStarted, setIsGameStarted] = useState(false);
  return (
    <div className="htm-wrapper">
      <h4 className="htm-header">
        Gra polegająca na podążaniu za krecikiem i trafieniu na kwadrat, w
        którym się pojawił.
      </h4>

      {!isGameStarted && <MenuView setGameStarted={setIsGameStarted} />}
      {isGameStarted && <GameView setGameStarted={setIsGameStarted} />}
      {isGameStarted && <PlaygroundView />}
    </div>
  );
};
