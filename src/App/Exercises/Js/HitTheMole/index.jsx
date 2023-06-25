import { Button } from './Button/Button';
import { Menu } from './Menu/Menu';
import './styles.css';
import { useState } from 'react';
import { Playground } from './Playground/Playgorund';

import { MenuView } from './MenuView/MenuView';
import { GameView } from './GameView/GameView';

export function HitTheMole() {
  const [isGameStarted, setGameStarted] = useState(true);
  const [score, setScore] = useState(0);
  const [settings, setSettings] =useState({
    counter: 0,
  })

  return (
    <div className="hit-the-mole">
      <h4>Hit The Mole</h4>
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
        <MenuView setGameStarted = {setGameStarted}/>
        
        </>
      )}

      {/* <ResultView result={result} /> */}

      {isGameStarted && <Playground score={score} setScore={setScore} />}
    </div>
  );
}