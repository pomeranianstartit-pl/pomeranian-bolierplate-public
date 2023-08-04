import './styles.css';

import { MenuView } from './MenuView';
import { PlaygroundView } from './PlaygroundView';
import { GameView } from './GameView';
import { useEffect, useState } from 'react';

//const INITIAL_TIME = 120;

export const MemoryGame = () => {
  // game states

  const [isGameStarted, setIsGameStarted] = useState(false);
  const [isGameStopped, setIsGameStopped] = useState(false);

  return (
    <div>
      <h4 className="mg-header">
        Gra polegająca na zapamiętywaniu odkrytych kafli i łączeniu ich w pary
      </h4>

      {isGameStarted && <PlaygroundView />}
      {isGameStarted && <GameView />}
      {!isGameStarted && <MenuView />}

      <GameView />
      <PlaygroundView />
    </div>
  );
};
