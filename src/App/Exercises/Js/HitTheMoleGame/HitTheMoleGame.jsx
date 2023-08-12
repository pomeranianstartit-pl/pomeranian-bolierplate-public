import './styles.css';

import { Label, Button, Output, Result, Tile } from './Components';
import { useState, useEffect } from 'react';
import { formatTime } from './Utilities/index';
import { getNewMolePosition } from './Utilities/index';
import { GameBoard } from './Features/GameBoard/GameBoard';
import { MoleTimer } from './Features/MoleTimer';
const MINUTE = 6000; //1 minuta = 60000 mls

const DURATIONS = [
  { label: '1 minuta', duration: MINUTE },
  { label: '2 minuty', duration: MINUTE * 2 },
  { label: '3 minuty', duration: MINUTE * 3 },
];
const MOLES = [
  { label: '1 kret', molesNo: 1, tiles: 10, timeVisible: 1000 },
  { label: '2 krety', molesNo: 2, tiles: 15, timeVisible: 1500 },
  { label: '3 krety', molesNo: 3, tiles: 20, timeVisible: 2000 },
];

export const HitTheMoleGame = () => {
  // console.log('GameBoard component rendered');
  const [prevDuration, setPrevDuration] = useState();
  const [duration, setDuration] = useState();
  const [molesOption, setMolesOption] = useState();
  const [status, setStatus] = useState('notStarted');
  const [score, setScore] = useState();
  const [showWarning, setShowWarning] = useState(false);
  const [tiles, setTiles] = useState([]);

  function handleStop() {
    setStatus('notStarted');
    setDuration(undefined);
    setMolesOption(undefined);
  }
  function handleFinish() {
    setStatus('finished');
    setDuration(undefined);
    setMolesOption(undefined);
  }

  function getInitialTiles(molesOption) {
    return Array(molesOption.tiles)
      .fill(0)
      .map((tile, index) => ({ index }));
  }

  // function settingsValidation() {
  //   if (duration > 0 && molesOption > 0) {
  //     return false;
  //   } else {
  //     return true;
  //   }
  // }

  function handleStart() {
    // const validation = settingsValidation();
    if (duration && molesOption) {
      setStatus('started');
      setShowWarning(false);
      // setTimeLeft(duration);
      setPrevDuration(duration);
      setTiles(getInitialTiles(molesOption));
      setScore(0);
      // startCountdown();
      // setMolePosition(getNewMolePosition(molePosition, molesOption.tiles));
    } else {
      setShowWarning(true);
    }
  }
  // console.log('test:', status === 'finished' && true && 1000 + 200);
  return (
    <div>
      <h1>Kret</h1>
      <p>
        Gra polegająca na podążaniu za krecikiem i trafieniu na kwadrat, w
        którym się pojawił.
      </p>
      {showWarning && <p className="mole-warning">Brakuje ustawień gry !!!</p>}
      {status === 'finished' && (
        <Result duration={formatTime(prevDuration)} score={score} />
      )}

      {/* <p>
        duration:{duration} , Status: {status} , timeLeft:{timeleft} , Tiles:
        {JSON.stringify(tiles)}, ilosc kretow:
        {molesOption && molesOption.molesNo}
        tiles:
      </p> */}
      {status !== 'started' && (
        <>
          <div className="mole-controls-panel">
            <Label>Czas Gry</Label>
            {DURATIONS.map((item) => (
              <Button
                key={item.label}
                value={item.label}
                onClick={() => setDuration(item.duration)}
                variant={item.duration !== duration ? 'primary' : 'secondary'}
              />
            ))}
          </div>

          <div className="mole-controls-panel">
            <Label>Ilość kretów</Label>
            {MOLES.map((item) => (
              <Button
                key={item.molesNo}
                value={item.label}
                onClick={() => {
                  setMolesOption(item);
                }}
                variant={
                  molesOption &&
                  (item.molesNo !== molesOption.molesNo
                    ? 'primary'
                    : 'secondary')
                }
              />
            ))}
          </div>
          <div className="mole-controls-panel">
            <Label>Przyciski Sterujące</Label>
            <Button value="Start" onClick={handleStart} />
          </div>
        </>
      )}
      {status === 'started' && (
        <>
          <div>
            <Label>Czas do końca</Label>
            <Output>
              <MoleTimer duration={duration} handleFinish={handleFinish} />
            </Output>
          </div>
          <div>
            <Label>Wynik</Label>
            <Output>{score} </Output>
          </div>
          <Button value="Stop" onClick={handleStop} variant="tertiary" />
        </>
      )}
      {status === 'started' && (
        <GameBoard
          tiles={tiles}
          setScore={setScore}
          molesOption={molesOption}
        />
      )}
    </div>
  );
};
