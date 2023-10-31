import { useState, useEffect } from 'react';
// import { Button, Label, Output, Result, Tile } from './Components';
// import { MasterHeader } from '../../../Components/MasterHeader/MasterHeader';
import { getAlphabet, getInitialTiles, formatTime } from './Utilities';
import { Result } from './components/Result/Result';
import { HighScore } from './components/highscore/HighScore';
import { Label } from './components/Label/Label';
import { Button } from './components/button/Button';
import { Output } from './components/Output/Output';
import { Tile } from './components/Tile/Tile';
import { GoBackButton } from '../../../Components/GoBack/GoBack';

import './styles.css';

const STATUS = {
  STARTED: 'started',
  NOT_STARTED: 'notStarted',
  FINISHED: 'finished',
  PASSED: 'passed',
};

const ELEMENTS = [4, 16, 20];

// TODO: Add comments to this code
export const Exercise = () => {
  const [status, setStatus] = useState(STATUS.NOT_STARTED);
  const [time, setTime] = useState(0);
  const [score, setScore] = useState(0);
  const [noOfElements, setNoOfElements] = useState(null);
  const [prevNoOfElements, setPrevNoOfElements] = useState(null);

  const [tiles, setTiles] = useState([]);
  const [firstClick, setFirstClick] = useState();
  const [secondClick, setSecondClick] = useState();

  const [highScore, setHighScore] = useState({
    4: {
      moves: 0,
      time: 0,
    },
    16: {
      moves: 0,
      time: 0,
    },
    20: {
      moves: 0,
      time: 0,
    },
  });

  function handleStart() {
    if (noOfElements !== null) {
      setTiles(getInitialTiles(noOfElements, getAlphabet(10)));
      setStatus(STATUS.STARTED);
      setScore(0);
      setTime(0);
      setPrevNoOfElements(noOfElements);
    } else {
    }
  }

  function handleStop() {
    setStatus(STATUS.PASSED);
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
    if (status === STATUS.FINISHED) {
      const currentTime = time;
      const currentScore = score;

      if (
        currentScore < highScore[noOfElements].moves ||
        highScore[noOfElements].moves === 0
      ) {
        setHighScore({
          ...highScore,
          [noOfElements]: {
            moves: currentScore,
            time: currentTime,
          },
        });
      }
    }
  }, [status]);

  useEffect(() => {
    if (
      prevNoOfElements ===
      tiles.filter((tile) => tile.variant === 'correct').length
    ) {
      setStatus(STATUS.FINISHED);
    }

    let timeoutIdArray = [];

    tiles
      .filter((tile) => tile.variant === 'incorrect')
      .forEach((tile) => {
        const timeoutId = setTimeout(handleResetIncorrect, 500, tile.index);

        timeoutIdArray.push(timeoutId);
      });

    return () => {
      timeoutIdArray.forEach((id) => {
        clearTimeout(id);
      });
    };
  }, [prevNoOfElements, tiles]);

  useEffect(() => {
    if (firstClick !== undefined && secondClick !== undefined) {
      setScore((prevScore) => prevScore + 1);
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
    let intervalId;

    if (status === STATUS.STARTED) {
      intervalId = setInterval(() => {
        setTime((prevTime) => prevTime + 1000);
      }, 1000);

      return () => {
        clearInterval(intervalId);
      };
    }
  }, [status]);

  return (
    <div>
      <GoBackButton buttonTitle="< MEMO" />

      <p>
        Gra polegająca na zapamiętywaniu odkrytych kafli i łączeniu ich w pary
      </p>

      {status === STATUS.PASSED && (
        <>
          <Result>
            HAHA! Twój wynik to {score} ruchy dla {noOfElements / 2} par w
            czasie {formatTime(time)}
            sekund. Powodzenia następnym razem, amatorze...
          </Result>
        </>
      )}

      {status === STATUS.FINISHED && (
        <>
          <Result>
            Gratulacje! Twój wynik to {score} ruchy dla {noOfElements / 2} par w
            czasie {formatTime(time)}
            sekund
          </Result>

          <HighScore highScore={highScore} noOfElements={noOfElements} />
        </>
      )}

      {(status === STATUS.NOT_STARTED ||
        status === STATUS.FINISHED ||
        status === STATUS.PASSED) && (
        <>
          <div className="memo-controls-panel">
            <Label>LICZBA ELEMENTÓW</Label>
            {ELEMENTS.map((element) => (
              <Button
                key={element}
                value={element + ' Elementów'}
                onClick={() => {
                  setNoOfElements(element);
                }}
                variant={element !== noOfElements ? 'primary' : 'secondary'}
              />
            ))}
          </div>
          <div className="memo-controls-panel">
            <Label>PRZYCISKI STERUJĄCE</Label>
            <Button value="START" onClick={handleStart} />
          </div>
        </>
      )}

      {status === STATUS.STARTED && (
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
            <Button value="PASS" onClick={handleStop} />
          </div>
        </>
      )}

      {status === STATUS.STARTED && (
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
      )}
    </div>
  );
};
