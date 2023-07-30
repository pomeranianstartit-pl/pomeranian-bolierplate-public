import './styles.css';
import { MasterHeader } from '../../../Components/MasterHeader/MasterHeader';
import { Label, Button, Output, Result, Tile } from './Components';
import { useState, useEffect } from 'react';
const MINUTE = 60000; //1 minuta = 60000 mls
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
  const [molesNo, setMolesNo] = useState(1);
  const [status, setStatus] = useState('notStarted');
  const [timeleft, setTimeLeft] = useState();
  const [score, setScore] = useState();
  const [issettingsOk, setSettingsOK] = useState();
  const [tiles, setTiles] = useState([]);

  useEffect(() => {
    console.log('Status sie zmienił', status);
    if (status === 'notStarted') {
      setTimeLeft(0);
    }
    if (status === 'started') {
      setTimeLeft(duration);
      setTiles(getinitialFiles(molesNo));
    }
    if (status !== 'finished') {
      setScore(0);
    }
  }, [status, duration]);

  function getinitialFiles(molesNumber) {
    const tiles = MOLES.find((mole) => mole.molesNo === molesNumber).tiles;
    return new Array(tiles).fill(0);
  }

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
    }
  }
  console.log('test:', status === 'finished' && true && 1000 + 200);
  return (
    <div>
      <MasterHeader value="Kret" />
      <p>
        Gra polegająca na podążaniu za krecikiem i trafieniu na kwadrat, w
        którym się pojawił.
      </p>
      {settingsValidation() && (
        <p className="mole-warning">brakuje ustawień gry</p>
      )}
      {status === 'finished' && (
        <Result duration={formatTime(duration)} score={score} />
      )}

      <p>duration:{duration},</p>
      <p>Status: {status}</p>
      <p>timeLeft:{timeleft}</p>

      <p>ilosc kretow:{molesNo}</p>
      <p>tiles:</p>
      {status !== 'started' && (
        <>
          <div className="mole-controls-panel">
            <Label value="Czas Gry" />
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
            <Label value="ilosc kretow" />
            {MOLES.map((item) => (
              <Button
                key={item.molesNo}
                value={item.label}
                onClick={() => {
                  setMolesNo(item.molesNo);
                }}
                variant={item.molesNo !== molesNo ? 'primary' : 'secondary'}
              />
            ))}
          </div>
          <div className="mole-controls-panel">
            <Label value="Przyciski Sterujące" />
            <Button
              value="Start"
              onClick={(handleStart) => setStatus('started')}
            />
          </div>

          <div>
            <Label value="wynik" />
            <Output value={score} />
          </div>
        </>
      )}
      <div>
        <Label value="Czas do końca" />
        <Output value={formatTime(timeleft)} />
      </div>
      <Button
        value="Stop"
        onClick={() => setStatus('notStarted')}
        variant="tertiary"
      />
      <Tile />
      <Tile hasMole />
      <Tile variant="correct" />
      <Tile variant="incorrect" />
    </div>
  );
};
