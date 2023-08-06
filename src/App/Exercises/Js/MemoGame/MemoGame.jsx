import { useState, useEffect } from 'react';
import { Label, Button, Output, Result } from './Components';
import { Tile } from '../MemoGame/Features/Tile/Tile';
import { formatTime } from './Utilities';

import './styles.css';
import { getAlphabet } from './Utilities';

const ELEMENTS = [2, 16, 20];
const LETTERS = [...'ABCDEFGHIJ'];
const characters = getAlphabet(10);

export const MemoGame = () => {
  // console.log(LETTERS.map((char) => char.charCodeAt(0)));
  // console.log(characters);

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
    const charactersSubset = characters.slice(0, size / 2);
    const allCharacters = [...charactersSubset, ...charactersSubset];
    const characterObject = allCharacters.map((character, index) => {
      return { index, value: character };
    });
    console.log(characterObject);
    return characterObject;
  }

  function handleStart() {
    if (noOfElements !== undefined) {
      setStatus('started');
      setShowWarning(false);
      setTiles(getInitialTiles(noOfElements));
      setScore(0);
      setTime(0);
    } else {
      setShowWarning(true);
    }
  }
  function handlePass() {
    if (noOfElements !== undefined) {
      setStatus('passed');
      setNoOfElements(undefined);
    }
  }

  function handleTileClicked() {
    setScore((prev) => prev + 1);
  }
  useEffect(() => {
    let intervalId;
    if (status === 'started') {
      setInterval(() => setTime((prevTime) => prevTime + 1000), 1000);
    }
    return () => clearInterval(intervalId);
  }, [status]);

  return (
    <div>
      <h2> &lt; Memo</h2>
      <p>
        Gra polegająca na zapamiętywaniu odkrytych kafli i łączeniu ich w pary
      </p>
      <p>
        status:{status}, liczba elementów: {noOfElements}
      </p>
      {(status === 'passed' || status === 'finished') && (
        <Result>Gratulacje! Twój wynik to 8 par w czasie 0:56!</Result>
      )}

      {showWarning && <p className="memo-warning">Brakuje ustawień gry!!!</p>}

      {status !== 'started' && (
        <>
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
            <Button value={'START'} onClick={handleStart}></Button>
          </div>
        </>
      )}
      {status === 'started' && (
        <>
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
            <Button
              value={'PASS'}
              variant="tertiary"
              onClick={handlePass}
            ></Button>
          </div>{' '}
        </>
      )}
      {status === 'started' && (
        <div className="memo-game-panel">
          {tiles.map(({ index, value }) => (
            <Tile key={index} value={value} onClick={handleTileClicked} />
          ))}
        </div>
      )}
    </div>
  );
};
