import './styles.css';
import { GameView } from './GameView/GameView';
import { Playground } from './Playground/Playground';
import { useEffect, useState } from 'react';
import { MenuView } from './MenuView/MenuView';

export function HitTheMole() {
  const [isGameStarted, setGameStarted] = useState(false);
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(60);
  const [initialTime, setInitialTime] = useState(10);
  const [isGameStopped, setGameStopped] = useState(false);

  useEffect(() => {
    time === 0 && setGameStarted(false);
  }, [time]);

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
          time={time}
          setTime={setTime}
          isGameStopped={isGameStopped}
          setGameStopped={setGameStopped}
        />
      ) : (
        <>
          <MenuView
            time={time}
            setTime={setTime}
            setGameStarted={setGameStarted}
            setScore={setScore}
            score={score}
            initialTime={initialTime}
            setInitialTime={setInitialTime}
            isGameStopped={isGameStopped}
          />
        </>
      )}

      {isGameStarted && <Playground score={score} setScore={setScore} />}
    </div>
  );
}
