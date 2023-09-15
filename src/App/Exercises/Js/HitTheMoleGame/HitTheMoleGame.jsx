import './styles.css';
import { MainHeader } from '../../../Components/MainHeader';
import { Button } from '../../../Components/Button';
import { useEffect, useState } from 'react';
import { Tile } from './Tile/Tile';

const MINUTE = 1;

export const HitTheMoleGame = () => {
  //notStarted, started, finished,
  //getter i setter
  const [status, setStatus] = useState('notStarted');
  const [score, setScore] = useState(0);
  const [duration, setDuration] = useState(MINUTE);
  const [timeLeft, setTimeLeft] = useState(0);
  const [resultTime, setResultTime] = useState(0);
  const [molesNo, setMoleNo] = useState(1);
  const [tiles, setTiles] = useState([]);

  const [getMinutes, setMinutes] = useState(0);
  const [getSeconds, setSeconds] = useState(0);

  const [getIsActiveTimer, setIsActiveTimer] = useState(false); //flaga aktywności  licznika

  const getDecrementTime = () => {
    if (getMinutes === 0 && getSeconds === 0) {
      setStatus('finished');
      setIsActiveTimer(false);
    }

    if (getSeconds === 0) {
      setMinutes((prevMinutes) => prevMinutes - 1);
      setSeconds(59);
    } else {
      setSeconds((prevSeconds) => prevSeconds - 1);
    }
  };

  useEffect(() => {
    let timerInterval;

    if (getIsActiveTimer) {
      timerInterval = setInterval(getDecrementTime, 1000);
    }

    return () => {
      clearInterval(timerInterval);
    };
  }, [getIsActiveTimer, getSeconds, duration]);

  console.log('getSeconds', getSeconds);
  console.log('getMinutes', getMinutes);

  const handleStartOnClick = () => {
    setStatus('started');
    setResultTime('duration');
    setIsActiveTimer('false');
    setTiles(getInitialTiles());
  };

  const handleStopOnClick = () => {
    setStatus('finished');
    setIsActiveTimer(false);
    setTimeLeft(`${duration}:${getSeconds} s`);
    setResultTime(`${getGameMinutesByGameMole()}m : ${getSeconds ===  0 ? '0' : 60 - getSeconds'}s`);
    setSeconds(0);
  };

  const getGameMinutesByGameMole = () => {
    let timeResult;
    
    if(getMinutes === 0 || getMinutes === 1 || getMinutes === 2){
timeResult= '00';
    }
    
    else {
timeResult = duration - getMinutes;
    }
    return timeResult;
  };

  duration === 
  const getInitialTiles = (molesNo) => {
    return Array(5 + molesNo * 5)
      .fill(0)
      .map((_, index) => ({ index }));
  };

  return (
    <>
      <div className="hit-the-mole-game">
        <MainHeader value="Kret" />
        <p className="mole-description">
          Gra polegająca na podążaniu za krecikiem i trafieniu na kwadrat, w
          którym się pojawił.
        </p>
        <div className="mole-settings-container">
          <p className="mole-label">CZAS GRY</p>
          <Button
            variant={duration !== MINUTE ? 'primary' : 'secondary'}
            onClick={() => {
              setDuration(MINUTE);
              setMinutes(MINUTE);
            }}
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
            Start
          </Button>
        </div>
        <div className="mole-settings-container">
          <p className="mole-label">CZAS GRY</p>
          <Button variant="primary">1 minuta</Button>
          <Button variant="primary">2 minuty</Button>
          <Button variant="primary">3 minuty</Button>
        </div>
        <p className="mole-description">
          Gratulację! Twój wynik to {score} złapane krety w czasie {setTimeLeft}
          !
        </p>
        <div className="mole-settings-container">
          <p className="mole-label">LICZBA KRETÓW</p>
          <Button variant="primary">1 kret</Button>
          <Button variant="primary">2 krety</Button>
          <Button variant="primary">3 krety</Button>
        </div>
        <div className="mole-settings-container">
          <p className="mole-label">PRZYCISKI STERUJĄCE</p>
          <Button onClick={handleStopOnClick} variant="tertiary">
            Stop
          </Button>
        </div>
        <div className="mole-tile-board">
          {tiles.map(({ index }) => (
            <Tile key={index} />
          ))}
        </div>
      </div>
    </>
  );
};
