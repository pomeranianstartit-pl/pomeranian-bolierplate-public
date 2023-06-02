import { Button } from './Button/Button';
import { Menu } from './Menu/Menu';
import './styles.css';
import { useState } from 'react';
import { Playground } from './Playground/Playground';
// import { MenuView } from './MenuView/MenuView';
import { GameView } from './GameView/GameView';

export function HitTheMole() {
  const [isGameStarted, setGameStarted] = useState(false);
  const [score, setScore] = useState(0);

  return (
    <div className="hit-the-mole">
      <h4>&lt; Hit the Mole Jack</h4>
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
          <Menu label="CZAS GRY">
            <Button isMaciejActive={true}>1 minuta</Button>
            <Button>2 minuty</Button>
            <Button>3 minuty</Button>
          </Menu>

          <Menu label="LICZBA KRETÓW">
            <Button>1 kret</Button>
            <Button>2 krety</Button>
            <Button isActive={true}>3 krety</Button>
          </Menu>

          <Menu label="PRZYCISKI STERUJĄCE">
            <Button onClick={() => setGameStarted(true)}>Start</Button>
          </Menu>
        </>
      )}

      {/* <ResultView result={result} /> */}

      {isGameStarted && <Playground score={score} setScore={setScore} />}
    </div>
  );
}
