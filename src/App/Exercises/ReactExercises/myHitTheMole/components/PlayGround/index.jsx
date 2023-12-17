import { NUMBER_OF_FIELDS, TIME_OF_BACKLIGHT } from '../../defaultSettings';
import MolePicture from '../pictures/mole_picture.svg';
import './styles.css';

import { useState } from 'react';
import { generatePlayFields } from '../../helper';

export const Playground = ({ molePositions, setScore }) => {
  const [playFields, setPlayFields] = useState(
    generatePlayFields(NUMBER_OF_FIELDS)
  );
  const resetHasClicked = (id) => {
    setTimeout(() => {
      setPlayFields((prevPlayFields) =>
        prevPlayFields.map((field) => {
          return {
            ...field,
            hasClicked: field.id === id ? false : field.hasClicked,
          };
        })
      );
    }, TIME_OF_BACKLIGHT);
 
  };

  const updateScore = (isMolePresent) => {
    setScore((prevState) => {
      if (isMolePresent) {
        return prevState + 1;
      } else {
        return prevState > 0 ? prevState - 1 : 0;
      }
    });
  };

  const handleFieldClick = (id, isMolePresent) => {
    const field = playFields.find((field) => field.id === id);
    if (!field.hasClicked) {
      updateScore(isMolePresent);
    }

    setPlayFields((prevPlayFields) =>
      prevPlayFields.map((field) => {
        return {
          ...field,
          hasClicked: field.id === id ? true : field.hasClicked,
          hit: field.id === id ? true : field.hit,
        };
      })
    );
    resetHasClicked(id);
    
  };

  return (
    <div className="mole--map">
      {playFields.map(({ id, hasClicked }) => {
        const isMolePresent = molePositions.includes(id);
        const style = () => {
          if (isMolePresent && hasClicked) {
            return 'mole--square hit';
          }
          if (!isMolePresent && hasClicked) {
            return 'mole--square missed';
          } else return 'mole--square';
        };
        return (
          <div
            key={id}
            onClick={() => handleFieldClick(id, isMolePresent)}
            className={style()}
          >
            {molePositions.includes(id) && (
              <img src={MolePicture} alt="mole is here" draggable="false" />
            )}
          </div>
        );
      })}
    </div>
  );
};
