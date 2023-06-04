import './styles.css';
import { Menu } from '../../Js//HitTheMoleGame/Menu/Menu';
import { Button } from './Button/Button';
import { useState } from 'react';
import { Playground } from './Playground/Playground';
import { GameView } from '../../../Exercises/Js/HitTheMoleGame/GameView/GameView';
import { MenuView } from './MenuView/MenuView';
export function HitTheMole() {
  const [isGameStarted, setGameStarted] = useState(false);
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(60);

  return (
    <div className="hit-the-mole">
      <div>
        <h1>KRET</h1>
        <p>
          Gra polegająca na podążaniu za krecikiem i trafieniu na kwadrat, w
          którym się pojawił.
        </p>
        {isGameStarted ? (
          <GameView
            setGameStarted={setGameStarted}
            score={score}
            setScore={setScore}
            time={setTime}
          />
        ) : (
          <>
            <Menu label="Czas gry">
              <Button isActive>1 minuta</Button>
              <Button>2 minuty</Button>
              <Button>3 minuty</Button>
            </Menu>
            <Menu label="Liczba kretów">
              <Button>1 kret</Button>
              <Button isActive>2 krety</Button>
              <Button>3 krety</Button>
            </Menu>
            <Menu label="Przyciski sterujące">
              <Button onClick={() => setGameStarted(true)}>Start</Button>
            </Menu>
          </>
        )}
        {isGameStarted && <Playground score={score} setScore={setScore} />}
      </div>
    </div>
  );
}
