import './styles.css';
import { MainHeader } from '../../../Components/MainHeader';
import { Button } from '../../../Components/Button';
import { useState } from 'react';
import { Tile } from './Tile/Tile';

const MINUTE = 6000;

export const HitTheMoleGame = () => {
  //notStarted, started, finished,
  const [status, setStatus] = useState('notStarted');
  const [score, setScore] = useState(0);
  const [duration, setDuration] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const [resultTime, setResultTime] = useState(0);
  const [molesNo, setMoleNo] = useState(1);


  const handleStartOnClick = () => {
    setStatus('started');
  };

  const handleStopOnClick = () => {
    setStatus('finished');
    setResultTime(resultTime - duration);
  };

  return (
    <div className=".hit-the-mole-game">
      <MainHeader value="Kret" />
      <p className="mole-description">
        Gra polegająca na podążaniu za krecikiem i trafieniu na kwadrat, w
        którym się pojawił.
      </p>

      <div className="mole-settings-container">
        <p className="mole-label">CZAS GRY</p>
        <Button
          variant={duration !== MINUTE ? 'primary' : 'secondary'}
          onClick={() => setDuration(MINUTE)}
        >
          1 minuta
        </Button>
        <Button
          variant={duration !== 2 * MINUTE ? 'primary' : 'secondary'}
          onClick={() => setDuration(2 * MINUTE)}
        >
          2 minuty
        </Button>
        <Button
          variant={duration !== 3 * MINUTE ? 'primary' : 'secondary'}
          onClick={() => setDuration(3 * MINUTE)}
        >
          3 minuty
        </Button>
      </div>
      <div className="mole-settings-container">
        <p className="mole-label">LICZBA KRETÓW</p>
        <Button
          variant={molesNo !== 1 ? 'primary' : 'secondary'}
          onClick={() => setMoleNo(1)}
        >
          1 kret
        </Button>
        <Button
          variant={molesNo !== 2 ? 'primary' : 'secondary'}
          onClick={() => setMoleNo(2)}
        >
          2 krety
        </Button>
        <Button
          variant={molesNo !== 3 ? 'primary' : 'secondary'}
          onClick={() => setMoleNo(3)}
        >
          3 krety
        </Button>
      </div>
      <div className="mole-settings-container">
        <p className="mole-label">PRZYCISKI STERUJĄCE</p>
        <Button onClick={handleStartOnClick} variant="tertiary">
          Start
        </Button>
      </div>
      <div>Started: {status}</div>
      <div className="mole-settings-container">
        <p className="mole-label">CZAS DO KOŃCA</p>
        <span className="mole-output">1:35</span>
      </div>
      <div className="mole-settings-container">
        <p className="mole-label">WYNIK</p>
        <span className="mole-output">16</span>
      </div>
      <div className="mole-settings-container">
        <span className="mole-label">1:35</span>
        <Button onClick={handleStartOnClick} variant="tertiary">
          Stop
        </Button>
      </div>
      <div className="mole-settings-container">
        <p className="mole-label">CZAS GRY</p>
        <Button variant="primary">1 minuta</Button>
        <Button variant="primary">2 minuty</Button>
        <Button variant="primary">3 minuty</Button>
      </div>
      <p className="mole-description">
        Gratulację! Twój wynik to {score} złapane krety w czasie {resultTime}!
      </p>
      <div className="mole-settings-container">
        <p className="mole-label">LICZBA KRETÓW</p>
        <Button variant="primary">1 kret</Button>
        <Button variant="primary">2 krety</Button>
        <Button variant="primary">3 krety</Button>
      </div>
      <div className="mole-settings-container">
        <p className="mole-label">PRZYCISKI STERUJĄCE</p>
        <Button onClick={handleStartOnClick} variant="tertiary">
          Start
        </Button>
      </div>
      <div>Started: {status}</div>
      <Tile tileStatus='correct' isMole/><Tile /><Tile tileStatus='incorrect'/><Tile isMole /><Tile />
    </div>
  );
};

