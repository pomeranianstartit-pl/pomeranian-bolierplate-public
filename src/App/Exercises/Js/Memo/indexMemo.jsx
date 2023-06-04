import { MenuView } from './MenuView/MenuView';
import { GameView } from './GameView/GameView';
import './styles.css';
import { useState } from 'react';

export function Memory() {
  const [isGameStarted, setGameStarted] = useState(false);
  return (
    <div>
      <h4>Memory Game</h4>
      <p>
        Gra polegająca na zapamiętywaniu odkrytych kafli i łączeniu ich w pary
      </p>
      <GameView />

      {isGameStarted ? <GameView /> : <MenuView />}
    </div>
  );
}
