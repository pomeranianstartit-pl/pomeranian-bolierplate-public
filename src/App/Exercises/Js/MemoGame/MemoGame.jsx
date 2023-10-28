import { Button } from './Components/Button/Button';
import './style.css';
import { Label } from './Components/Label/Label';
import { GoBackButton } from '../../../Components/GoBack/GoBack';
import { useState, useEffect } from 'react';
import { Tile } from './Components/Tile/Tile';
import { getAlphabet } from './Utilities';
import { shuffle } from './Utilities';

const ELEMENTS = [4, 16, 20];
const characters = getAlphabet(10);

export const MemoGame = () => {
  const [noOfElements, setNoOfElements] = useState(null);
  const [tiles, setTiles] = useState([]);
  const [firstClick, setFirstClick] = useState();
  const [secondClick, setSecondClick] = useState();

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
    } else {
    }
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
    console.log('tiles', tiles);
    console.log('firstClick', firstClick);
    console.log('secondClick', secondClick);
  });

  return (
    <div>
      <GoBackButton buttonTitle="< MEMO" />

      <p>
        Gra polegająca na zapamiętywaniu odkrytych kafli i łączeniu ich w pary
      </p>

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
  );
};
