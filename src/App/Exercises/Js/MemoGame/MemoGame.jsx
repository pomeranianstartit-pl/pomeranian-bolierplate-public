import { useState } from 'react';

import './styles.css';
import { MasterHeader } from '../../../Components/MasterHeader/MasterHeader';
import { Label, Button, Output, Result } from './Components';
import { Tile } from './Features/Tile/Tile';
import { formatTime, getAlfabet } from './Utilities';
import { useEffect } from 'react';


const ELEMENTS = [2, 16, 20];

// const LETTERS = [...'abcdefghij']
const charaters = getAlfabet(10);

export function MemoGame() {
  const [status, setStatus] = useState('notStarted'); // notStarted || started || passed || finished
  const [tiles, setTiles] = useState([]);
  const [noOfElements, setNoOfElements] = useState();
  const [prevNoOfElements, setPrevNoOfElements] = useState();
  const [showWarning, setShowWarning] = useState(false);
  const [time, setTime] = useState(0);
  const [score, setScore] = useState(0);
  const [found, setFound] = useState(0);
  const [resultMessage, setResultMessage] = useState();
  const [fisrtClick, setFirstClick] = useState();
  const [secondClick, setSecondClick] = useState();

  function getInitialTiles(size) {

    const charactersSubset = charaters.slice(0, size / 2);
    const allCharacter = [...charactersSubset, ...charactersSubset]
    const characterObject = allCharacter.map((character, index) => {
      return { index, value: character };
    });
    console.log(characterObject);
    return characterObject;
  }
  function handleStart() {
    if (noOfElements !== undefined) {
      setStatus('started');
      setTiles(getInitialTiles(noOfElements));
      setShowWarning(false);
      setScore(0)
      setTime(0)
    } else {
      setShowWarning(true)
    }
  }
  function handlePass() {
    setStatus('passed');
    setNoOfElements(undefined);
  }

  function handleTileOnClick() {
    setScore((prev) => prev + 1);
  }
  useEffect(() => {

    let intervalId;
    if (status === 'started') {
      intervalId = setInterval(
        () => setTime((prevTime) => prevTime + 1000),
        1000
      );
    }
    return () => clearInterval(intervalId);
  }, [status])
  return (
    <div>
      <p>
        Status: {status} Number of elements: {noOfElements}
      </p>
      <MasterHeader value="Memo" />
      <p>Gra polega na pamieci kafli i łączeniu w pary</p>

      {showWarning && <p className="memo-warning">Brakuje ustawien gry</p>}

      {status === 'finished' ||
        (status === 'passed' && <Result>Twoj wynik to w czasie...</Result>)}
      {status !== 'started' && (
        <div>
          <div className="memo-controls-panel">
            <Label>Liczba elementów</Label>
            {ELEMENTS.map((element) => (
              <Button
                key={element}
                value={element + ' elementów'}
                onClick={() => setNoOfElements(element)}
                variant={element !== noOfElements ? 'primary' : 'secondary'}
              />
            ))}
          </div>

          <div className="memo-controls-panel">
            <Label>Przyciski sterujące</Label>
            <Button value="Start" variant="tertiary" onClick={handleStart} />
          </div>
        </div>
      )}

      {status === 'started' && (
        <div>
          <div className="memo-controls-panel">
            <Label>Czas gry</Label>
            <Output>{formatTime(time)}</Output>
          </div>
          <div className="memo-controls-panel">
            <Label>Liczba ruchów</Label>
            <Output>{score}</Output>
          </div>
          <div className="memo-controls-panel">
            <Label>Przyciski sterujące</Label>
            <Button value="Pass" variant="secondary" onClick={handlePass} />
          </div>
        </div>
      )}
      {status === 'started' && (
        <div className="memo-board">
          {tiles.map(({ index, value }) => (
            <Tile key={index} value={value} onClick={handleTileOnClick} />
          ))}
        </div>
      )}
    </div>
  );
}
