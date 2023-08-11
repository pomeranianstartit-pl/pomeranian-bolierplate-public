import { useState, useEffect } from 'react';
import { Button, Label, Output, Result } from './Components';
import { MasterHeader } from '../../../Components/MasterHeader/MasterHeader';
import { formatTime, getAlphabet, shuffle } from './Utilities';
import { HighScore } from './Features/HighScore';
import { Tile } from './Features/Tile/Tile';
import './styles.css';

const STATUS_OF_THE_GAME_START = 'started';

const ELEMENTS = [4, 16, 20];
// const LETTERS = [...'ABCDEFGHIJ'];
const characters = getAlphabet(10);
export const MemoGame = () => {
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

  const [getIsVisibleRecord, setIsVisibleRecord] = useState(false);
  const [getCalculatedScore, setCalculatedScore] = useState(null);
  const [getHighScores, setHighScores] = useState({
    4: { record: 0, moves: 0, time: 0 },
    16: { record: 0, moves: 0, time: 0 },
    20: { record: 0, moves: 0, time: 0 },
  });

  useEffect(() => {
    if (status === 'finished' && prevNoOfElements === noOfElements) {
      const currentMoves = score;
      const currentTime = time;
      const currentRecord = (60 * currentMoves) / currentTime; // 0.04 * 100 = 4s

      console.log(
        'condition--->',
        currentRecord > getHighScores?.[noOfElements]?.record
      );

      if (currentRecord > getHighScores?.[noOfElements]?.record) {
        setIsVisibleRecord(
          currentRecord > getHighScores?.[noOfElements]?.record
        );

        const updatedHighScores = {
          ...getHighScores,
          [noOfElements]: {
            record: currentRecord,
            moves: currentMoves,
            time: currentTime,
          },
        };
        setHighScores(updatedHighScores);
      }
    }
  }, [status, prevNoOfElements, noOfElements, getHighScores, score, time]);

  function getInitialTiles(size) {
    const charactersSubset = characters.slice(0, size / 2);
    const allCharacters = [...charactersSubset, ...charactersSubset];
    // const shuffledCharacters = allCharacters.sort(() => Math.random() - 0.5);
    const shuffledCharacters = shuffle(allCharacters);
    const characterObject = shuffledCharacters.map((character, index) => {
      return { index, value: character, isVisible: false, variant: 'neutral' };
    });
    // console.log(characterObject);
    return characterObject;
  }

  function handleStart() {
    if (noOfElements !== undefined) {
      setStatus(STATUS_OF_THE_GAME_START);
      setTiles(getInitialTiles(noOfElements));
      setShowWarning(false);
      setCalculatedScore(null);
      setScore(0);
      setTime(0);
      setFound(0);
      setPrevNoOfElements(noOfElements);
      setIsVisibleRecord(false);
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
      return newTiles;
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
      setCalculatedScore((60 * score) / time);
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
        return newTiles;
      });
      setFirstClick(undefined);
      setSecondClick(undefined);
    }
  }, [firstClick, secondClick]);

  useEffect(() => {
    console.log(prevNoOfElements);
    console.log(tiles.filter((tile) => tile.variant === 'correct').length);

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
        timeoutIdArray.push(timeoutId);
      });
    return () =>
      timeoutIdArray.forEach((id) => {
        clearTimeout(id);
      });
  }, [prevNoOfElements, tiles]);

  useEffect(() => {
    let intervalId;
    if (status === STATUS_OF_THE_GAME_START) {
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
        <>
          <Result>
            Gratulacje! Twój wynik to {score} odsłon w czasie {formatTime(time)}
          </Result>
          <HighScore
            highScores={getHighScores}
            calculatedScore={getCalculatedScore}
            noOfElements={noOfElements}
            isVisibleRecord={getIsVisibleRecord}
          />
        </>
      )}

      {/* 1.dodajemy w momencie ukończenia gry sprawdzenie czy dla aktualnie skończonego zestawu elementów
(8/16/20) pobiliśmy rekord,

2. rekord wyliczamy jako ilość ruchów na minutę (60 * ruchy / czasGry W sekundach),

3. jeśli pobiliśmy rekord dodajemy informacje do wyniku - gratulacje pobiłeś rekord twoje punkty
XX poprzedni rekord YY,

4. zapisujemy w zmiennej tylko najlepszy wynik (czas, ruchy oraz rekord) dla danej sekcji,

5. dodajemy przycisk highscore a po jego naciśnięciu wyświetlamy wyniki (forma dowolna zbieżna ze
stylem aplikacji),

6. przycisk znika jeśli gra sie toczy. */}

      {showWarning && <p className="memo-warning">Brakuje ustawień Gry !!!</p>}

      {status !== STATUS_OF_THE_GAME_START && (
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
      {status === STATUS_OF_THE_GAME_START && (
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

      {(status === STATUS_OF_THE_GAME_START || status === 'finished') && (
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
