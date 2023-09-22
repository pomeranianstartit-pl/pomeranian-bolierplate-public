import { useEffect, useState } from 'react';

import { Button } from '../../../Components/Button';
import { TimeTracker } from '../../../Components/TimeTracker';
import { MainHeader } from '../../../Components/MainHeader';

import './style.css';
import { Tile } from './Tile';

function formatTime(duration) {
  const minutes = Math.floor(duration / 60);

  const seconds = duration % 60;

  return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
}

function formatMoves(moves) {
  return Math.ceil(moves / 2);
}

function shuffleArray(s) {
  for (let i = s.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [s[i], s[j]] = [s[j], s[i]];
  }

  return s;
}

const ELEMENT_OPTIONS = [8, 16, 20, 24];

export const MemoGame = () => {
  const [status, setStatus] = useState('notStarted');

  const [elementsNumber, setElementsNumber] = useState(8);

  const [moves, setMoves] = useState(0);

  const [duration, setDuration] = useState(0);

  const [tiles, setTiles] = useState([]);

  const [selectedTiles, setSelectedTiles] = useState([]);

  const [isActiveTimer, setIsActiveTimer] = useState(false); // Flaga aktywności licznika

  const [selectedTilesTimeout, setSelectedTilesTimeout] = useState();

  //react lifecycle hook

  useEffect(() => {
    let timerInterval;

    if (isActiveTimer) {
      timerInterval = setInterval(() => {
        setDuration((duration) => duration + 1);
      }, 1000);
    }

    return () => {
      clearInterval(timerInterval);
    };
  }, [isActiveTimer]);

  // refresh after tile select

  useEffect(() => {
    const areMatch = areSelectedTilesMatch();

    if (selectedTilesTimeout) {
      clearTimeout(selectedTilesTimeout);
    }

    setTiles((tiles) => {
      return tiles.map((tile) => {
        const isSelected = isTileSelected(tile.id);

        return {
          ...tile,

          isVisible: isSelected,

          isGuessed: tile.isGuessed || (isSelected && areMatch),
        };
      });
    });

    if (selectedTiles.length === 2 && !areMatch) {
      const timeout = setTimeout(() => {
        setSelectedTiles([]);
      }, 3000);

      setSelectedTilesTimeout(timeout);
    }
  }, [selectedTiles]);

  useEffect(() => {
    if (isGameFinished()) {
      setStatus('finished');

      setIsActiveTimer(false);
    }
  }, [tiles]);

  const handleStart = () => {
    setStatus('started');

    setMoves(0);

    setDuration(0);

    setIsActiveTimer(true);

    setTiles(getInitialTiles());
  };

  // uchwyt dla eventu JS i React

  const handleStop = () => {
    setStatus('finished');

    setIsActiveTimer(false);

    setTiles([]);
  };

  const handleTileClick = (id) => () => {
    setMoves(moves + 1);

    selectTile(id);
  };

  const selectTile = (id) => {
    setSelectedTiles((selectedTiles) => {
      const newTile = tiles.find((tile) => tile.id === id);

      const newSelectedTiles = [];

      if (selectedTiles.length < 2) {
        newSelectedTiles.push(...selectedTiles, newTile);

        return newSelectedTiles;
      } else {
        return [newTile];
      }
    });
  };
  const isTileSelected = (id) => {
    return selectedTiles.some((selectedTile) => selectedTile.id === id);
  };

  const isGameFinished = () => {
    // let isFinished = true;

    // // old for

    // for (let index = 0; index < tiles.length; index++) {

    //   isFinished = isFinished && tiles[index].isGuessed;

    // }

    // // newer

    // for (const tile of tiles) {

    //   isFinished = isFinished && tile.isGuessed;

    // }

    // // forEach

    // tiles.forEach((tile) => {

    //   isFinished = isFinished && tile.isGuessed;

    // });

    // // reduce

    // isFinished = tiles.reduce(

    //   (prevValue, currentValue) => prevValue && currentValue.isGuessed,

    //   true

    // );

    // every

    const isEveryGameFinished = tiles.every((tile) => tile.isGuessed);

    return isEveryGameFinished && tiles.length !== 0;
  };

  const areSelectedTilesMatch = () => {
    const [tile1, tile2] = selectedTiles;

    const areMatch =
      !!tile1 && !!tile2 && tile1.char === tile2.char && tile1.id !== tile2.id;

    return areMatch;
  };

  const getInitialTiles = () => {
    const charsNumber = elementsNumber / 2;

    debugger;

    const characters = shuffleArray([
      '☀',

      '☁',

      '☯',

      '★',

      '♠',

      '♣',

      '♥',

      '♦',

      '♫',

      '♪',

      '⚬',

      '⚑',
    ]);

    characters.length = charsNumber;

    const arrayOfTilesObjects = [];

    characters.forEach((char) => {
      arrayOfTilesObjects.push({
        id: `${char}-1`,

        char,

        isVisible: false,

        isGuessed: false,
      });

      arrayOfTilesObjects.push({
        id: `${char}-2`,

        char,

        isVisible: false,

        isGuessed: false,
      });
    });

    return shuffleArray(arrayOfTilesObjects);
  };

  return (
    <div className="hit-the-mole-game">
      <MainHeader>Memo</MainHeader>

      <p className="mole-description">
        Gra polegająca na zapamiętywaniu odkrytych kafli i łączeniu ich w pary
      </p>

      {status === 'finished' && (
        <div className="mole-result">
          Gratulację! Twój wynik to {formatMoves(moves)} ruchów w czasie{' '}
          {formatTime(duration)}!
        </div>
      )}

      {status !== 'started' && (
        <>
          <div className="mole-settings-container">
            <span className="mole-label">LICZBA ELEMENTÓW</span>

            {ELEMENT_OPTIONS.map((option) => (
              <Button
                variant={elementsNumber !== option ? 'primary' : 'secondary'}
                onClick={() => setElementsNumber(option)}
                key={option}
              >
                {option} elementów
              </Button>
            ))}
          </div>

          <div className="mole-settings-container">
            <span className="mole-label">przyciski sterujące</span>

            <Button onClick={handleStart}>Start</Button>
          </div>
        </>
      )}

      {/* conditional rendering of jsx w React  */}

      {status === 'started' && (
        <>
          <div className="mole-settings-container">
            <span className="mole-label">CZAS GRY</span>

            <span className="mole-output">{formatTime(duration)}</span>
          </div>

          <div className="mole-settings-container">
            <span className="mole-label">LICZBA RUCHÓW</span>

            <span className="mole-output">{formatMoves(moves)}</span>
          </div>

          <div className="mole-settings-container">
            <span className="mole-label">Przyciski sterujące</span>

            <Button onClick={handleStop} variant="tertiary">
              Stop
            </Button>
          </div>
        </>
      )}

      <div className="mole-tile-board">
        {tiles.map(({ id, char, isVisible, isGuessed }) => (
          <Tile
            key={id}
            onClick={handleTileClick(id)}
            char={char}
            isVisible={isVisible}
            isGuessed={isGuessed}
            isCorrect={selectedTiles.length < 2 || areSelectedTilesMatch()}
          />
        ))}
      </div>
    </div>
  );
};
