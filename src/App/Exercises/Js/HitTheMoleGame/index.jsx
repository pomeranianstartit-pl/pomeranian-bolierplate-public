import './styles.css';
import { Menu } from './Menu/Menu';
import { Button } from './Button/Button';
import { GameView } from './GameView/GameView';
import { Playground } from './Playground/Playground';
import { useState } from 'react';

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
          <Menu label="Czas gry">
            <Button isActive>1 minuta</Button>
            <Button>2 minuty</Button>
            <Button>3 minuty</Button>
          </Menu>
          <Menu label="Liczba kretów">
            <Button>1 minuta</Button>
            <Button>2 minuty</Button>
            <Button>3 minuty</Button>
          </Menu>
          <Menu label="Przyciski sterujące">
            <Button onClick={() => setGameStarted(true)}>Start</Button>
          </Menu>
        </>
      )}

      {isGameStarted && <Playground score={score} setScore={setScore} />}
    </div>
  );
}
