import { useState, useEffect } from 'react';
import { Button, Label, Output, Result } from './Components';
import { MasterHeader } from '../../../Components/MasterHeader/MasterHeader';
import { formatTime, getAlphabet } from './Utilities';
import { Tile } from './Features/Tile/Tile';
import './styles.css';
import { isVisible } from '@testing-library/user-event/dist/utils';

const ELEMENTS = [4, 16, 20];
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
  const [firstClick, setFirstClick] = useState();
  const [secondClick, setSecondClick] = useState();

  function getInitialTiles(size) {
    const charactersSubset = characters.slice(0, size / 2);
    const allCharacters = [...charactersSubset, ...charactersSubset];
    const shuffledCharacters = allCharacters.sort(() => Math.random() - 0.5);
    const characterObject = shuffledCharacters.map((character, index) => {
      return { index, value: character, isVisible: false, variant: 'neutral' };
    });
    // console.log(characterObject);
    return characterObject;
  }

  function handleStart() {
    if (noOfElements !== undefined) {
      setStatus('started');
      setTiles(getInitialTiles(noOfElements));
      setShowWarning(false);
      setScore(0);
      setTime(0);
      setFound(0);
      setPrevNoOfElements(noOfElements);
    } else {
      setShowWarning(true);
    }
  }
  function handlePass() {
    setStatus('passed');
    setNoOfElements(undefined);
  }

  function handleTileClicked(index) {
    if (tiles.some((tile) => tile.index === index && tile.isVisible === true))
      return;
    setTiles((oldTiles) => {
      const newTiles = oldTiles.map((tile) =>
        tile.index === index ? { ...tile, isVisible: true } : tile
      );
      // const newTiles = [...oldTiles];
      // const toBeUpdated = newTiles[index];
      // newTiles[index] = { ...toBeUpdated, isVisible: true };
      // console.log(
      //   'new tiles',
      //   JSON.stringify(newTiles),
      //   'index',
      //   index,
      //   'toBeUpdated',
      //   JSON.stringify(toBeUpdated)
      // );
      return newTiles;
      // const newTiles
    });

    if (firstClick === undefined) {
      setFirstClick(index);
    } else {
      setSecondClick(index);
    }
  }

  function handleResetIncorrect(index) {
    setTiles((oldTiles) => {
      const newTiles = oldTiles.map((tile) =>
        tile.index === index
          ? { ...tile, isVisible: false, variant: 'neutral' }
          : tile
      );
      return newTiles;
    });
  }
  useEffect(() => {
    if (firstClick !== undefined && secondClick !== undefined) {
      setScore((prev) => prev + 1);
      setTiles((oldTiles) => {
        const newTiles = [...oldTiles];
        const first = newTiles[firstClick];
        const second = newTiles[secondClick];
        let variant = 'neutral';
        if (first.value === second.value) {
          variant = 'correct';
        } else {
          variant = 'incorrect';
        }
        newTiles[firstClick] = { ...first, variant };
        newTiles[secondClick] = { ...second, variant };
        // console.log(JSON.stringify(first), JSON.stringify(second));
        return newTiles;
      });
      setFirstClick(undefined);
      setSecondClick(undefined);
    }
  }, [firstClick, secondClick]);

  useEffect(() => {
    if (
      prevNoOfElements ===
      tiles.filter((tile) => tile.variant === 'correct').length
    ) {
      setStatus('finished');
    }

    //Ustawianie liczby znalezionych par
    setFound(tiles.filter((tile) => tile.variant === 'correct').length / 2);

    //Sprawdzanie niepoprawnych kafelków
    let timeoutIdArray = [];
    tiles
      .filter((tile) => tile.variant === 'incorrect')
      .forEach((tile) => {
        const timeoutId = setTimeout(handleResetIncorrect, 500, tile.index);
        // console.log('setTimeout ID = ',timeoutId);
        timeoutIdArray.push(timeoutId);
      });
    // console.log('na końcu useEffect',JSON.stringify(timeoutIdArray));
    return () =>
      timeoutIdArray.forEach((id) => {
        clearTimeout(id);
      });
  }, [prevNoOfElements, tiles]);

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
        status:<span className="memo-info">{status}</span> Licza elementów:
        <span className="memo-info"> {noOfElements}</span>
      </p>
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

      {(status === 'started' || status === 'finished') && (
        <div className="memo-board">
          {tiles.map(({ index, value, isVisible, variant }) => (
            <Tile
              key={index}
              value={value}
              onClick={() => handleTileClicked(index)}
              isVisible={isVisible}
              variant={variant}
            />
          ))}
        </div>
      )}
    </div>
  );
};
