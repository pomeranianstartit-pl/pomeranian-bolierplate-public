import './styles.css';
import { MasterHeader } from '../../../Components/MasterHeader/MasterHeader';
import { Label, Button, Output, Result, Tile } from './Components';

import { useState, useEffect } from 'react';

const MINUTE = 60000; //jedna minuta

const DURATIONS = [
  { label: '1 minuta', duration: MINUTE },
  { label: '2 minuty', duration: MINUTE * 2 },
  { label: '3 minuty', duration: MINUTE * 3 },
];
const MOLES = [
  { label: '1 kret', molesNo: 1, tiles: 10, timeVisible: 10000 },
  { label: '2 krety', molesNo: 2, tiles: 15, timeVisible: 500 },
  { label: '3 krety', molesNo: 3, tiles: 20, timeVisible: 350 },
];

export const HitTheMoleGame = () => {
  const [duration, setDuration] = useState();
  const [molesNo, setMolesNo] = useState();
  const [status, setStatus] = useState('notStarted');
  const [timeLeft, setTimeLeft] = useState();
  const [score, setScore] = useState(0);
  const [showWarning, setShowWarning] = useState(false);
  const [tiles, setTiles] = useState([])

  function formatTime(time) {
    const timeInSeconds = Math.round(time / 1000);
    const timeInMinutes = Math.round(timeInSeconds / 60)
      .toString()
      .padStart(2, '0');
    const seconds = Math.round(timeInSeconds % 60)
      .toString()
      .padStart(2, '0');
    return `${timeInMinutes}:${seconds}`;
  }

  useEffect(() => {
    if (status === 'notStarted') {
      setTimeLeft(0);
    }
    if (status === 'started') {
      setTimeLeft(duration);
      setTiles(getInitialTiles(molesNo))
    }
    if (status === 'finished') {
      setScore(0);
    }
  }, [status]);

  function getInitialTiles(molesNumber) {
    const tiles = MOLES.find((mole) => mole.molesNo === molesNumber).tiles;
    return Array(tiles).fill(0)
  }

  function settingsValidation() {
    if (duration > 0 && molesNo > 0) {
      return false;
    } else {
      return true;
    }
  }

  function handleStart() {
    const validation = settingsValidation();
    if (validation === false) {
      setStatus('started');
      setShowWarning(false);
    } else {
      setShowWarning(true);
    }
  }
  return (
    <div>
      <MasterHeader value="Kret" />
      <p>Gra polegająca na walnięciu kreta jak się pojawi</p>
      {showWarning && (
        <p className="mole-warning">Brakuje ustawien gry</p>
      )}
      <p>
        Gratulację! Twój wynik to 32 złapane krety w czasie{' '}
        {formatTime(duration)} minut!
      </p>
      <hr />

      {status === 'finished' && (
        <Result duration={formatTime(duration)} score={score} />
      )}
      <p> Duration: {duration}, Moles no: {molesNo}, Time left: {timeLeft}, Status: {status} Tiles: {JSON.stringify(tiles)}</p>


      {status != 'started' && (
        <>
          <div className="first-buttons">
            <Label value="Czas gry" />
            {DURATIONS.map((item) => (
              <Button
                key={item.label}
                value={item.label}
                onClick={() => setDuration(item.duration)}
                variant={item.duration !== duration ? 'primary' : 'secondary'}
              />
            ))}
          </div>

          <hr />
          <p>ilość kretów: {molesNo}</p>

          <div className="second-buttons">
            {' '}
            <Label value="Ilość kretów" />
            {MOLES.map((item) => (
              <Button
                key={item.label}
                value={item.label}
                onClick={() => setMolesNo(item.molesNo)}
                variant={item.molesNo !== molesNo ? 'primary' : 'secondary'}
              />
            ))}
          </div>
        </>
      )}
      <hr />
      {status != 'started' && (
        <>
          <div className="third-buttons">
            <Label value="Przycisk sterujący" />
            <Button value={'START'} onClick={handleStart} />
          </div>

          <div className="third-buttons">
            <Label value="Czas do końca" />
            <Output value={formatTime(timeLeft)} />
          </div>
        </>
      )}

      {status != 'notStarted' && (<>
        <div className="third-buttons">
          <Label value="Wynik" />
          <Output value={score} />
        </div>

        <div className="third-buttons">
          <Label value="Przycisk sterujący" />
          <Button value={'STOP'} onClick={() => setStatus('notStarted')} />
        </div> </>)}
      <Tile hasMole />
      <Tile variant="correct" />
      <Tile variant="incorrect" />
      <Tile variant="neutral" />

    </div>
  );
};
