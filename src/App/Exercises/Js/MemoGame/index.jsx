import './styles.css';
import { useState, useEffect } from 'react';
import { GameView } from './GameView/GameView';
import { MenuView } from './MenuView/MenuView';

export function Memo() {
  const [isGameStarted, setGameStarted] = useState(false);

  return (
    <div className="memo">
      <h4>&lt; Memo Game</h4>
      <p>
        Gra polegająca na zapamiętywaniu odkrytych kafli i łączeniu ich w pary
      </p>

      {/* {isGameStarted ? <GameView /> : <MenuView />} */}
      <MenuView></MenuView>
      <GameView></GameView>
    </div>
  );
}
