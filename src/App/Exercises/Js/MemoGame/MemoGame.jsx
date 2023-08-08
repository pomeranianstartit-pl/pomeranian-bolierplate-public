import { useState } from 'react';

import './styles.css';
import { MasterHeader } from '../../../Components/MasterHeader/MasterHeader';
import { Label, Button, Output, Result } from './Components';
import { Tile } from './Features/Tile/Tile';
import { formatTime, getAlfabet, shuffle } from './Utilities';
import { useEffect } from 'react';
import { HighScore } from './Features/HighScore';

const ELEMENTS = [4, 16, 20];

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
  const [firstClick, setFirstClick] = useState();
  const [secondClick, setSecondClick] = useState();

  function getInitialTiles(size) {
    const charactersSubset = charaters.slice(0, size / 2);
    const allCharacter = [...charactersSubset, ...charactersSubset];
    // const shuffledCharacters = allCharacter.sort(() => Math.random() - 0.5);
    const shuffledCharacters = shuffle(allCharacter);
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
    if (tiles.some((tile) => tile.index === index && tile.isVisible === true))
      return;
    setTiles((oldTiles) => {
      const newTiles = oldTiles.map((tile) =>
        tile.index === index ? { ...tile, isVisible: true } : tile
      );
      //Jeden sposób
      // const newTiles = [...oldTiles];
      // const toBeUpdated = newTiles[index];
      // newTiles[index] = { ...toBeUpdated, isVisible: true };
      // console.log(
      //   'New Tile;',
      //   JSON.stringify(newTiles),
      //   'Index',
      //   index,
      //   'To Be Updated',
      //   JSON.stringify(toBeUpdated)
      // );
      return newTiles;
    });

    if (firstClick === undefined) {
      setFirstClick(index);
    } else {
      setSecondClick(index);
    }
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
    if (
      prevNoOfElements ===
      tiles.filter((tile) => tile.variant === 'correct').length
    ) {
      setStatus('finished');
    }

    // Ustawianie liczby znalezionych par
    setFound(tiles.filter((tile) => tile.variant === 'correct').length / 2);
    //Sparwdzanie niepoprawnych kafelków

    let timeoutIdArray = [];

    tiles
      .filter((tile) => tile.variant === 'incorrect')
      .forEach((tile) => {
        const timeoutId = setTimeout(handleResetIncorrect, 1000, tile.index);
        console.log('set TimoutID=', timeoutId);
        timeoutIdArray.push(timeoutId);
      });
    // console.log('End og useEffect', JSON.stringify(timeoutIdArray));
    return () => timeoutIdArray.forEach((id) => clearTimeout(id));
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
      <HighScore score={score} time={time}/>
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
      {(status === 'started' || status === 'finished') && (
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
