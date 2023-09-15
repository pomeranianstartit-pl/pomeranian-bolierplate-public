import { useEffect, useState } from 'react';

import { Button } from '../../../Components/Button';
import { MainHeader } from '../../../Components/MainHeader';

import './styles.css';
import { Tile } from './Tile/Tile';

const MINUTE = 1; //1 minuta

export const HitTheMoleGame = () => {
  // notStarted, started, finished
  //getter i setter
  const [status, setStatus] = useState('notStarted');
  const [score, setScore] = useState(0);
  const [duration, setDuration] = useState(MINUTE);
  const [getTimeLeft, setTimeLeft] = useState(0);
  const [resultTime, setResultTime] = useState(0);
  const [molesNo, setMolesNo] = useState(1);
  const [tiles, setTiles] = useState([]);

  const [getMinutes, setMinutes] = useState(MINUTE);
  const [getSeconds, setSeconds] = useState(0);
  const [getIsActiveTimer, setIsActiveTimer] = useState(false); // Flaga aktywności licznika

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

  //react lifecycle hook
  useEffect(() => {
    let timerInterval;

    if (getIsActiveTimer) {
      timerInterval = setInterval(getDecrementTime, 1000);
    }

    return () => {
      clearInterval(timerInterval);
    };
  }, [getIsActiveTimer, getSeconds, getMinutes]);

  const handleStart = () => {
    setStatus('started');
    setResultTime(duration);
    setIsActiveTimer(true);
    setTiles(getInitialTiles());
  };

  // uchwyt dla eventu JS i React
  const handleStop = () => {
    setStatus('finished');
    setIsActiveTimer(false);
    setTimeLeft(`${duration}:${getSeconds} s`);
    setResultTime(
      `${getGameMinutesByGameMode()}m : ${
        getSeconds === 0 ? '0' : 60 - getSeconds
      }s`
    );
    setSeconds(0);
  };

  const getGameMinutesByGameMode = () => {
    let timeResult = '';

    if (getMinutes === 0 || getMinutes === 1 || getMinutes === 2) {
      timeResult = '0';
    } else if (getMinutes === 1) {
      timeResult = '0';
    } else if (getMinutes === 2) {
      timeResult = '0';
    } else {
      timeResult = duration - getMinutes;
    }

    return timeResult;
  };

  const getInitialTiles = () => {
    const emptyTilesMatrix = Array(molesNo * 5 + 5);
    const tilesMatrix = emptyTilesMatrix.fill(0);
    // wypelnij ta tablice obiektami ktore beda mialy nastepujaca strukture [{index:0}]
    const arrayOfTilesObjects = tilesMatrix.map(
      (_, index) => ({ index: 0 }, { index: 1 })
    );

    return arrayOfTilesObjects;
  };

  return (
    <div className="hit-the-mole-game">
      <MainHeader>Kret</MainHeader>
      <p className="mole-description">
        Gra polegająca na podążaniu za krecikiem i trafieniu na kwadrat, w
        którym się pojawił.
      </p>
      {status === 'finished' && (
        <div className="mole-result">
          Gratulację! Twój wynik to {score} złapane krety w czasie {resultTime}{' '}
          !
        </div>
      )}
      {status !== 'started' && (
        <>
          <div className="mole-settings-container">
            <span className="mole-label">czas gry</span>
            <Button
              id="1"
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
              onClick={() => {
                setDuration(2 * MINUTE);
                setMinutes(2 * MINUTE);
              }}
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
            <span className="mole-label">liczba kretów</span>
            <Button
              variant={molesNo !== 1 ? 'primary' : 'secondary'}
              onClick={() => setMolesNo(1)}
            >
              1 kret
            </Button>
            <Button
              variant={molesNo !== 2 ? 'primary' : 'secondary'}
              onClick={() => setMolesNo(2)}
            >
              2 krety
            </Button>
            <Button
              variant={molesNo !== 3 ? 'primary' : 'secondary'}
              onClick={() => setMolesNo(3)}
            >
              3 krety
            </Button>
          </div>
          <div className="mole-settings-container">
            <span className="mole-label">przyciski sterujące</span>
            <Button onClick={handleStart}>Start</Button>
          </div>
        </>
      )}

      {/* conditional rendering of jsx w React  */}


      {status === 'started' && (
        <>
          <div className="mole-settings-container">
            <span className="mole-label">przyciski sterujące</span>
            <span className="mole-output">1:35</span>
          </div>
          <div className="mole-settings-container">
            <span className="mole-label">Wynik</span>
            <span className="mole-output">16</span>
          </div>
          <div className="mole-settings-container">
            <span className="mole-label">Przyciski sterujące</span>
            <Button onHandlerClick={handleStop} variant="tertiary">
              Stop
            </Button>
          </div>

          <div className="mole-tile-board">
            {tiles.map(({ index }) => (
              <Tile key={index} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};