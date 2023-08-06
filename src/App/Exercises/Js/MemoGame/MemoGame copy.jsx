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
    const allCharacter = [...charactersSubset, ...charactersSubset];
    const characterObject = allCharacter.map((character, index) => {
      return { index, value: character, isVisible: false, variant: 'neutral' };
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
      setPrevNoOfElements(noOfElements);
      setFound(0);
    } else {
      setShowWarning(true);
    }
  }
  function handlePass() {
    setStatus('passed');
    setNoOfElements(undefined);
  }

  function handleTileOnClick(index) {
    if (tiles.some((tile) => (tile.index = index && tile.isVisible === true)))
      return;
    setTiles((oldTiles) => {
      const newTiles = [...oldTiles];
      const toBeUpdated = newTiles[index];
      newTiles[index] = { ...toBeUpdated, isVisible: true };

      newTiles[index] = { index, isVisible: true };
      // console.log(
      //   'bew Tiles',
      //   JSON.stringify(newTiles),
      //   'Index',
      //   index,
      //   'to be updated',
      //   JSON.stringify(toBeUpdated)
      // );

      return newTiles;
    });

    if (fisrtClick === undefined) {
      setFirstClick(index);
    } else {
      setSecondClick(index);
    }
  }

  useEffect(() => {
    if (fisrtClick !== undefined && secondClick !== undefined) {
      setScore((prev) => prev + 1);
      setTiles((oldTiles) => {
        const newTiles = [...oldTiles];
        const first = newTiles[fisrtClick];
        const second = newTiles[secondClick];
        let variant = 'neutral';
        if (first.value === second.value) {
          variant = 'correct';
        } else {
          variant = 'incorrect';
        }

        newTiles[fisrtClick] = { ...first, variant };
        newTiles[secondClick] = { ...second, variant };
        // console.log(JSON.stringify(fisrtClick), JSON.stringify(secondClick));
        return newTiles;
      });
    }
  }, [fisrtClick, secondClick]);

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
      <p>
        Status: {status} Number of elements: {noOfElements}
      </p>
      <MasterHeader value="Memo" />
      <p>Gra polega na pamieci kafli i łączeniu w pary</p>

      {showWarning && <p className="memo-warning">Brakuje ustawien gry</p>}

      {status === 'passed' && (
        <Result>
          Zgadłeś {found} na {prevNoOfElements / 2} par w czasie{' '}
          {formatTime(time)}, w {score} odsłonach. Powodzenia następnym razem!
        </Result>
      )}
      {status === 'finished' && (
        <Result>
          Gratulacje! Twój wynik to {score} odsłon w czasie {formatTime(time)}
        </Result>
      )}

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
          {tiles.map(({ index, value, isVisible, variant }) => (
            <Tile
              key={index}
              value={value}
              onClick={() => handleTileOnClick(index)}
              isVisible={isVisible}
              variant={variant}
            />
          ))}
        </div>
      )}
    </div>
  );
}
