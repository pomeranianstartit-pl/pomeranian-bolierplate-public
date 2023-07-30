import './styles.css';
import { MasterHeader } from '../../../Components/MasterHeader/MasterHeader';
import { Label, Button, Output, Result, Tile } from './Components/';
import { useState, useEffect } from 'react';
const MINUTE = 60000; //minuta w milisekundach

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
  const [duration, setDuration] = useState(0);
  const [molesNo, setMolesNo] = useState();
  const [tiles, setTiles] = useState([]);
  const [status, setStatus] = useState('notStarted');
  const [timeLeft, setTimeLeft] = useState(0);
  const [score, setScore] = useState(0);
  // const [showWarning, setshowWarning] = useState(false);

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
    console.log('status się zmienił', status);
    if (status === 'notStarted') {
      setTimeLeft(0);
    }
    if (status === 'started') {
      setTimeLeft(duration);
      setTiles(getInitialTiles(molesNo));
    }
    if (status !== 'finished') {
      setScore(0);
    }
  }, [status, duration]);

  function getInitialTiles(molesNumber) {
    const tiles = MOLES.find((mole) => mole.molesNo === molesNumber).tiles;
    return Array(tiles).fill(0);
  }

  // function settingValidation() {
  //   if (duration > 0 && molesNo > 0) {
  //     return false;
  //   } else {
  //     return true;
  //   }
  // }
  // function handleStart() {
  //   const validation = settingValidation();
  //   if (validation == false) {
  //     setStatus('started');
  //   }
  // }
  return (
    <div>
      <MasterHeader title="Kret" />
      <p>
        Gra polegająca na podążaniu za krecikiem i trafieniu na kwadrat, w
        którym się pojawił.
      </p>
      <p>Duration: {duration}</p>
      <p>Moles: {molesNo}</p>
      <p>Tiles: {JSON.stringify(tiles)}</p>
      <p>Status: {status}</p>
      <p>TimeLeft: {timeLeft}</p>
      <p>Score: {score}</p>

      {/* STATUS FINISHED */}
      {status === 'finished' && (
        <Result score={score} duration={formatTime(duration)} />
      )}

      {/* STATUS NOT_STARTED */}
      {(status === 'notStarted' || status === 'finished') && (
        <div className="mole-controls-panel">
          <div className="mole-controls-panel-row">
            <Label value="Czas gry" />
            {DURATIONS.map((item) => (
              <Button
                key={item.label}
                value={item.label}
                variant={item.duration !== duration ? 'primary' : 'secondary'}
                onClick={() => {
                  setDuration(item.duration);
                }}
              />
            ))}
          </div>
          <div className="mole-controls-panel-row">
            <Label value="Liczba kretów" />
            {MOLES.map((item) => (
              <Button
                key={item.molesNo}
                value={item.label}
                variant={item.molesNo !== molesNo ? 'primary' : 'secondary'}
                onClick={() => {
                  setMolesNo(item.molesNo);
                  setTiles(item.tiles);
                }}
              />
            ))}
          </div>
          <div className="mole-controls-panel-row">
            <Label value="Przycisk sterujący" />
            <Button
              value="START"
              onClick={() => {
                if (duration && molesNo) {
                  setStatus('started');
                }
              }}
            />
            {!(duration && molesNo) && (
              <p>Wybierz czas oraz liczbę kretów by zacząć</p>
            )}
          </div>
        </div>
      )}

      {/* STATUS STARTED */}
      {status === 'started' && (
        <>
          <div className="mole-controls-panel">
            <div className="mole-controls-panel-row">
              <Label value="czas do końca" />
              <Output value={formatTime(timeLeft)} />
            </div>
            <div className="mole-controls-panel-row">
              <Label value="wynik" />
              <Output value={score} />
            </div>
            <div className="mole-controls-panel-row">
              <Label value="Przycisk sterujący" />
              <Button
                value="STOP"
                variant="tertiary"
                onClick={() => {
                  setStatus('notStarted');
                }}
              />
            </div>
          </div>
          <div className="game-board">
            <Tile tiles={tiles} background="neutral" />
            <Tile tiles={tiles} background="correct" />
            <Tile tiles={tiles} background="incorrect" />
            <Tile tiles={tiles} hasMole />
          </div>
        </>
      )}
    </div>
  );
};
