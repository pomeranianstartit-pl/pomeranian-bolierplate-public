import { useEffect, useState } from 'react';
import { GoBackButton } from '../../../Components/GoBack/GoBack.jsx';
import { Button } from './Components/Button/Button.jsx';
import { Label } from './Components/Label/Label.jsx';
import { Tile } from './Components/Tile/Tile.jsx';
import { getAlphabet, shuffle } from './Utilities/index.jsx';
import './styles.css';

const ELEMENTS = [4, 16, 20];
const characters = getAlphabet(10);

export const MemoGame = () => {
  const [noOfElements, setNoOfElements] = useState(null);
  const [tiles, setTiles] = useState([]);
  const [pairResult, setPairResult] = useState(0);
  const [time, setTime] = useState(0);
  const [noOfShots, setNoOfShots] = useState(0);
  const [firstClick, setFirstClick] = useState();
  const [secondClick, setSecondClick] = useState();
  const [gameStarted, setGameStarted] = useState(false);
  const [gameFinished, setGameFinished] = useState(false);
  const [tilesGuessed, setTilesGuessed] = useState(0);
  const [timeResult, setTimeResult] = useState(null);
  const [resultTable, setResultTable] = useState(SetInitialResults());

  function getInitialTiles(size) {
    const charactersSubset = characters.slice(0, size / 2);
    const allCharacters = [...charactersSubset, ...charactersSubset];

    const shuffledCharacters = shuffle(allCharacters);

    //transform flat alphabet arrat to array of objects with specyfic letters with pairs of object with this same data
    const characterObject = shuffledCharacters.map((character, index) => {
      return { index, value: character, isVisible: false, variant: 'neutral' };
    });
    console.log('characterObject', characterObject);
    return characterObject;
  }

  function SetInitialResults() {
    const results = ELEMENTS.map((element) => ({
      index: element,
      scores: [],
    }));
    return results;
  }

  function handleStart() {
    if (noOfElements === null) {
      return;
    }
    setGameStarted(true);
    setGameFinished(false);
    setTilesGuessed(0);
    setTiles(getInitialTiles(noOfElements));
    setNoOfShots(0);
    setTime(0);
  }

  function handlePass() {
    setTime(0);
    setGameStarted(false);
    setNoOfShots(0);
    setTiles([]);
    setFirstClick();
    setSecondClick();
    setNoOfElements(null);
    setTilesGuessed(0);
    setGameFinished(false);
  }

  function handleTileClick(index) {
    if (tiles.some((tile) => tile.index === index && tile.isVisible === true))
      return;

    setTiles(
      tiles.map((tile) => ({
        ...tile,
        isVisible: tile.index === index ? true : tile.isVisible,
      }))
    );

    if (firstClick === undefined) {
      setFirstClick(index);
    } else {
      setSecondClick(index);
    }

    // setNoOfShots((prevnoOfShots) => prevnoOfShots + 1);
  }

  function handleResetIncorrect(index) {
    setTiles((oldTiles) => {
      const newTiles = oldTiles.map((tile) => {
        if (tile.index === index) {
          return {
            ...tile,
            isVisible: false,
            variant: 'neutral',
          };
        } else {
          return tile;
        }
      });

      return newTiles;
    });
  }

  useEffect(() => {
    let timeoutIdArray = [];

    tiles
      .filter((tile) => tile.variant === 'incorrect')
      .forEach((tile) => {
        const timeoutId = setTimeout(() => {
          handleResetIncorrect(tile.index);
        }, 500);

        timeoutIdArray.push(timeoutId);
      });

    return () => {
      timeoutIdArray.forEach((id) => {
        clearTimeout(id);
      });
    };
  }, [tiles]);

  useEffect(() => {
    if (firstClick !== undefined && secondClick !== undefined) {
      setTiles((oldTiles) => {
        const newTiles = [...oldTiles];
        const first = newTiles[firstClick];
        const second = newTiles[secondClick];

        let variant = 'neutral';

        if (first.value === second.value) {
          setTilesGuessed((prevTilesGuessed) => prevTilesGuessed + 1);
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
      setNoOfShots((prevnoOfShots) => prevnoOfShots + 1);
    }
  }, [firstClick, secondClick]);

  useEffect(() => {
    if (tilesGuessed === noOfElements) {
      setGameFinished(true);
      setGameStarted(false);
    }
  }, [tilesGuessed]);

  useEffect(() => {
    if (gameFinished) {
      setTimeResult(time);
      setTime(0);
      setPairResult(noOfElements / 2);
      setNoOfElements(0);
    }
  }, [gameFinished]);
  // setTimeResult

  // for (const result of resultTable) {
  //   console.log(result.index, 'indeksy tabeli wyników');
  // }

  useEffect(() => {
    // if (resultTable.length === 0) {
    //   return;
    // }
    // console.log(resultTable, 'Result table ----');
    setResultTable((oldResultTable) => {
      // console.log(oldResultTable, 'oldresulttable');
      const newResultTable = oldResultTable.map((result) => {
        console.log(pairResult, 'nowy pairresult ');
        console.log(timeResult, 'nowy timeResult ');

        if (result.index === pairResult) {
          return {
            ...result,
            scores: [...result.scores, timeResult],
          };
        } else {
          return result;
        }
      });

      return newResultTable;
    });
  }, [pairResult]);

  useEffect(() => {
    // console.log('tiles', tiles);
    // console.log('firstClick', firstClick);
    console.log(tilesGuessed, 'trafione');
    console.log(gameFinished, 'game finished');
    console.log(resultTable, 'result table');
  }, [noOfShots]);

  useEffect(() => {
    if (gameStarted) {
      const intervalId = setInterval(() => {
        setTime((prevState) => prevState + 1);
      }, 1000);

      return () => {
        clearInterval(intervalId);
      };
    }
  }, [time, gameStarted]);

  return (
    <div className="game-area">
      <GoBackButton buttonTitle="< MEMO" />
      <p>
        Gra polegająca na zapamiętywaniu odkrytych kafli i łączeniu ich w pary
      </p>
      {gameFinished && (
        <div>
          <div className="game-results">
            Gratulacje! Twój wynik to {pairResult} par w czsie {timeResult} s !
          </div>
        </div>
      )}

      {!gameStarted && (
        <div>
          <div className="memo-controls-panel">
            <Label>LICZBA ELEMENTÓW</Label>
            {ELEMENTS.map((element) => (
              <Button
                key={element}
                value={element}
                onClick={() => {
                  setNoOfElements(element);
                }}
                variant={element !== noOfElements ? 'primary' : 'secondary'}
              />
            ))}
          </div>
          <div className="memo-controls-panel">
            <Label>PRZYCISKI STERUJĄCE</Label>
            <Button value="Start" onClick={handleStart} />
          </div>
        </div>
      )}
      {gameStarted && !gameFinished && (
        <div>
          <div className="memo-controls-panel">
            <Label>Czas Gry</Label>
            <Button
              key={''}
              value={`${time} s`}
              onClick={() => {}}
              variant="info"
            />
          </div>
          <div className="memo-controls-panel">
            <Label>Liczba Ruchów</Label>
            <Button
              key={''}
              value={noOfShots}
              onClick={() => {}}
              variant="info"
            />
          </div>
          <div className="memo-controls-panel">
            <Label>Przyciski Sterujące</Label>
            <Button
              key={''}
              value={'PASS'}
              onClick={handlePass}
              variant="tertiary"
            />
          </div>

          <div className="play-ground">
            <div className="memo-board">
              {tiles.map(({ index, value, isVisible, variant }) => (
                <Tile
                  key={index}
                  value={value}
                  onClick={() => handleTileClick(index)}
                  isVisible={isVisible}
                  variant={variant}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
