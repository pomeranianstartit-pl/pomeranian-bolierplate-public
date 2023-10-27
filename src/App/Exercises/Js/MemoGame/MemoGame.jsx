import { useState } from 'react';
import { GoBackButton } from '../../../Components/GoBack/GoBack.jsx';
import { Button } from './Components/Button/Button.jsx';
import { Label } from './Components/Label/Label.jsx';
import { Tile } from './Components/Tile/Tile.jsx';
import { getAlphabet, shuffle } from './Utilities/index.jsx';

const ELEMENTS = [8, 16, 20];
const characters = getAlphabet(10);

export const MemoGame = () => {
  const [noOfElements, setNoOfElements] = useState(null);
  const [tiles, setTiles] = useState([]);
  console.log('noOfElements', noOfElements);

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

  function handleStart() {
    if (noOfElements !== null) {
      setTiles(getInitialTiles(noOfElements));
    }
  }

  return (
    <div>
      <GoBackButton buttonTitle="< MEMO" />
      <p>
        Gra polegająca na zapamiętywaniu odkrytych kafli i łączeniu ich w pary
      </p>
      <div className="memo-controls-panel">
        <Label>Liczba elementów</Label>
        {ELEMENTS.map((element) => (
          <Button
            key={element}
            value={element + ' Elementów'}
            onClick={() => {
              setNoOfElements(element);
            }}
            variant={'primary'}
          />
        ))}
      </div>
      <div className="memo-controls-panel">
        <Label>Przyciski sterująca</Label>
        <Button value="START" onClick={handleStart}></Button>
      </div>
      <div className="memo-board">
        {tiles.map(({ index, value, isVisible, variant }) => (
          <Tile
            key={index}
            values={value}
            onClick={() => {}}
            isVisible={isVisible}
            variant={variant}
          />
        ))}
      </div>
    </div>
  );
};
