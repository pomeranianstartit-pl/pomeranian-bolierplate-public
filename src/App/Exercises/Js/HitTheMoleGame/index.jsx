import './styles.css';
import { GameView } from './GameView/GameView';
import { Playground } from './Playground/Playground';
import { useState } from 'react';
import { MenuView } from './MenuView/Menu';

export function HitTheMole() {
  const [isGameStarted, setGameStarted] = useState(false);
  const [score, setScore] = useState(0);

  return (
    <div>
      <h3>&lt; Kret</h3>
      <p>
        Gra polegająca na podążaniu za krecikiem i trafieniu na kwadrat, w
        którym się pojawił.
      </p>

      {isGameStarted ? (
        <GameView
          setGameStarted={setGameStarted}
          score={score}
          setScore={setScore}
        />
      ) : (
        <>
          <MenuView setGameStarted={setGameStarted} />
        </>
      )}

      {isGameStarted && <Playground score={score} setScore={setScore} />}
    </div>
  );
}
