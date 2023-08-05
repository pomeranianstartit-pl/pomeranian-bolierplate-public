import './styles.css';
import { MasterHeader } from '../../../Components/MasterHeader/MasterHeader';
import { Label, Button, Output, Result, Tile } from './Components';
import { useState, useEffect } from 'react';
import { formatTime } from './Utilities/index';
import { getNewMolePosition } from './Utilities/index';
const MINUTE = 60000; //1 minuta = 60000 mls
const HIGHLIGHT_TIME = 500; //0.5 sekundy
const DURATIONS = [
  { label: '1 minuta', duration: MINUTE },
  { label: '2 minuty', duration: MINUTE * 2 },
  { label: '3 minuty', duration: MINUTE * 3 },
];
const MOLES = [
  { label: '1 kret', molesNo: 1, tiles: 10, timeVisible: 1000 },
  { label: '2 krety', molesNo: 2, tiles: 15, timeVisible: 500 },
  { label: '3 krety', molesNo: 3, tiles: 20, timeVisible: 350 },
];

export const HitTheMoleGame = () => {
  const [prevDuration, setPrevDuration] = useState();
  const [duration, setDuration] = useState();
  const [molesOption, setMolesOption] = useState();
  const [status, setStatus] = useState('notStarted');
  const [timeleft, setTimeLeft] = useState();
  const [score, setScore] = useState();
  const [showWarning, setShowWarning] = useState(false);
  const [tiles, setTiles] = useState([]);
  const [intervalId, SetIntervalId] = useState();
  const [molePosition, setMolePosition] = useState();
  const [correct, setCorrect] = useState();
  const [incorrect, setIncorrect] = useState();

  function startCountdown() {
    const id = setInterval(() => setTimeLeft((prev) => prev - 100), 100);
    SetIntervalId(id);
  }

  function handleStop() {
    setStatus('notStarted');
    clearInterval(intervalId);
    setDuration(undefined);
    setMolesOption(undefined);
  }
  useEffect(() => {
    if (molesOption === undefined) return;
    let timeoutId;
    //console.timeEnd('mole-position');
    //console.time('mole-position');
    if (molePosition !== undefined) {
      timeoutId = setTimeout(
        () =>
          setMolePosition(getNewMolePosition(molePosition, molesOption.tiles)),
        molesOption.timeVisible
      );
    }
    return () => clearTimeout(timeoutId);
  }, [molePosition, molesOption]);

  useEffect(() => {
    let timeoutId;
    if (correct !== undefined) {
      timeoutId = setTimeout(() => setCorrect(undefined), HIGHLIGHT_TIME);
    }
    return () => clearTimeout(timeoutId);
  }, [correct]);

  useEffect(() => {
    let timeoutId;
    if (incorrect !== undefined) {
      timeoutId = setTimeout(() => setIncorrect(undefined), HIGHLIGHT_TIME);
    }
    return () => clearTimeout(timeoutId);
  }, [incorrect]);

  function handleTileClick(index) {
    if (molePosition === index) {
      setCorrect(index);
      setScore((prev) => prev + 1);
      setMolePosition(getNewMolePosition(index, molesOption.tiles));
    } else {
      setIncorrect(index);
      setScore((prev) => prev - 1);
    }
  }

  useEffect(() => {
    if (timeleft <= 0) {
      clearInterval(intervalId);
      setStatus('finished');
      setDuration(undefined);
      setMolesOption(undefined);
    }
  }, [intervalId, timeleft]);

  function getInitialTiles(molesOption) {
    return Array(molesOption.tiles)
      .fill(0)
      .map((tile, index) => ({ index }));
  }
  function getTileVariant(index) {
    if (index === correct) return 'correct';
    if (index === incorrect) return 'incorrect';
    return 'neutral';
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
      setTimeLeft(duration);
      setPrevDuration(duration);
      setTiles(getInitialTiles(molesOption));
      setScore(0);
      startCountdown();
      setMolePosition(getNewMolePosition(molePosition, molesOption.tiles));
    } else {
      setShowWarning(true);
    }
  }
  // console.log('test:', status === 'finished' && true && 1000 + 200);
  return (
    <div>
      <MasterHeader value="Kret" />
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
            <Label value="Przyciski Sterujące" />
            <Button value="Start" onClick={handleStart} />
          </div>
        </>
      )}
      {status === 'started' && (
        <>
          <div>
            <Label value="Czas do końca" />
            <Output value={formatTime(timeleft)} />
          </div>
          <div>
            <Label value="wynik" />
            <Output value={score} />
          </div>
          <Button value="Stop" onClick={handleStop} variant="tertiary" />
        </>
      )}

      {status === 'started' && (
        <div className="mole-board">
          {tiles.map(({ index }) => (
            <Tile
              key={index}
              onClick={() => handleTileClick(index)}
              hasMole={index === molePosition}
              variant={getTileVariant(index)}
            />
          ))}
        </div>
      )}

      {/* <Tile />
      <Tile hasMole />
      <Tile variant="correct" />
      <Tile variant="incorrect" /> */}
    </div>
  );
};
