import { useState, useEffect } from 'react';
import { Button, Label, Output, Result } from './Components';
import { MasterHeader } from '../../../Components/MasterHeader/MasterHeader';
import { formatTime, getAlphabet } from './Utilities';
import { Tile } from './Features/Tile/Tile';
import './styles.css';

const ELEMENTS = [2, 16, 20];
// const LETTERS = [...'ABCDEFGHIJ'];
const characters = getAlphabet(10);
export const MemoGame = () => {
  // console.log(characters);
  // console.log(LETTERS.map((char) => char.charCodeAt(0)));
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
      setTiles(getInitialTiles(noOfElements));
      setShowWarning(false);
      setScore(0);
      setTime(0);
    } else {
      setShowWarning(true);
    }
  }
  function handlePass() {
    setStatus('passed');
    setNoOfElements(undefined);
  }

  function handleTileClicked() {
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
  }, [status]);

  return (
    <div>
      <MasterHeader value="Memo" />

      <p>
        Gra polegająca na zapamiętywaniu odkrytych kafli i łączeniu ich w pary
      </p>
      <p>
        status:{status} Licza elementów:{noOfElements}
      </p>
      {(status === 'passed' || status === 'finished') && (
        <Result>Gratulację! Twój wynik to 8 par w czasie 0:56!</Result>
      )}

      {showWarning && <p className="memo-warning">Brakuje ustawień Gry !!!</p>}

      {status !== 'started' && (
        <>
          <div className="memo-controls-panel">
            <Label>LICZBA ELEMENTÓW</Label>
            {ELEMENTS.map((element) => (
              <Button
                key={element}
                value={element + ' Elementów'}
                onClick={() => setNoOfElements(element)}
                variant={element !== noOfElements ? 'primary' : 'secondary'}
              />
            ))}
          </div>
          <div className="memo-controls-panel">
            <Label>PRZYCISKI STERUJĄCE</Label>
            <Button value="START" onClick={handleStart}></Button>
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
            <Label>PRZYCISKI STERUJĄCE</Label>
            <Button
              value="PASS"
              variant="tertiary"
              onClick={handlePass}
            ></Button>
          </div>
        </>
      )}

      {status === 'started' && (
        <div className="memo-board">
          {tiles.map(({ index, value }) => (
            <Tile key={index} value={value} onClick={handleTileClicked} />
          ))}
        </div>
      )}
    </div>
  );
};
