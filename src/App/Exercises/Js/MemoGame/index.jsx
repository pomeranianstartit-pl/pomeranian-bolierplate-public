import { useState, useEffect } from 'react';
import { GoBackButton } from '../../../Components/GoBack/GoBack';
import { Label } from './components/Label/Label';
import { Button } from './components/button/Button';
import { Tile } from './components/Tile/Tile';

import { shuffle } from './components/Tile/Tile';
export function getAlphabet(limit) {
  const startASCII = 65;
  //Litera pierwsza alfabetu A
  const endASCII = 90;
  //Litera  ostatnia alfabetu Z
  let maxSize = endASCII - startASCII + 1;
  maxSize = limit > 0 && limit <= maxSize ? limit : maxSize;

  return Array(maxSize)
    .fill(0)
    .map((_, index) => index + startASCII)
    .map((characterCode) => String.fromCharCode(characterCode));
}

function getInitialTiles(size) {
  const charactersSubset = characters.slice(0, size / 2);
  const allCharacters = [...charactersSubset, ...charactersSubset];
  // const shuffledCharacters = allCharacters.sort(() => Math.random() - 0.5);
  const shuffledCharacters = shuffle(allCharacters);

  //transform flat alphabet arrat to array of objects with specyfic letters with pairs of object with this same data
  const characterObject = shuffledCharacters.map((character, index) => {
    return { index, value: character, isVisible: false, variant: 'neutral' };
  });
  console.log('characterObject', characterObject);
  return characterObject;
}
let numberOfMovents;
const ELEMENTS = [4, 16, 20];
const characters = getAlphabet(10);
export const Exercise = () => {
  const [time, setTime] = useState(60);
  const [noOfElements, setNoOfElements] = useState(null);
  const [tiles, setTiles] = useState([]);
  const [firstClick, setFirstClick] = useState();
  const [secondClick, setSecondClick] = useState();
  const [isGameStarted, setGameStarted] = useState(false);
  const [isGameEnded, setGameEnded] = useState(false);
  const [score, setScore] = useState(0);
  const [finishScore, setFinishScore] = useState(0);

  const [intervalId, setIntervalId] = useState(null);

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

  function handleStart() {
    if (noOfElements !== null) {
      setTiles(getInitialTiles(noOfElements));
      setGameStarted(true);
      setGameEnded(false);
      setTime(60);
      setScore(0);
      setFirstClick(undefined);
    } else {
    }
  }

  const handleStop = () => {
    setGameStarted(false);
    setGameEnded(true);
    clearInterval(intervalId);
    setIntervalId(null);
  };

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
  }, [tiles]);

  useEffect(() => {
    if (firstClick !== undefined && secondClick !== undefined) {
      setTiles((oldTiles) => {
        const newTiles = [...oldTiles];
        const first = newTiles[firstClick];
        const second = newTiles[secondClick];

        let variant = 'neutral';

        if (first.value === second.value) {
          variant = 'correct';
          setScore((prevScore) => prevScore + 1);
          setFinishScore((prevScore) => prevScore + 1);
        } else {
          variant = 'incorrect';
          setScore((prevScore) => prevScore + 1);
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
    console.log('tiles', tiles);
    console.log('firstClick', firstClick);
    console.log('secondClick', secondClick);
  });

  useEffect(() => {
    if (isGameStarted) {
      const intervalId = setInterval(() => {
        time > 0 && setTime((prevState) => prevState - 1);
      }, 1000);

      return () => {
        clearInterval(intervalId);
      };
    }
  }, [time, isGameStarted]);
  // useEffect(() => {
  //   if ((numberOfMovents = noOfElements - finishScore === 0)) {
  //     handleStop();
  //     setNoOfElements(4);
  //   }
  // });
  useEffect(() => {
    if (time === 0) {
      handleStop();
    }
  }, [time]);

  return (
    <div>
      <GoBackButton buttonTitle="< MEMO" />

      <p>
        Gra polegająca na zapamiętywaniu odkrytych kafli i łączeniu ich w pary
      </p>
      {isGameEnded && (
        <div>
          <h2>
            Gratulaje udało Ci się znaleźć par w {score} ruchach. {60 - time}{' '}
            sekund.
          </h2>
        </div>
      )}
      {!isGameStarted ? (
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
      ) : (
        <>
          {' '}
          <Label>Czas gry {time}</Label>
          <Label>Liczba ruchów :{score} </Label>
          <Label>
            Przyciski sterujące <Button value="STOP" onClick={handleStop} />{' '}
          </Label>
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
        </>
      )}
    </div>
  );
};
