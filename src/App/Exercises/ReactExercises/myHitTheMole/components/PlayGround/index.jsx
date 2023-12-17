import { NUMBER_OF_FIELDS, TIME_OF_BACKLIGHT } from '../../defaultSettings';
import MolePicture from '../pictures/mole_picture.svg';
import './styles.css';

import { useEffect, useState } from 'react';
import { generatePlayFields } from '../../helper';

export const Playground = ({ molePositions, setScore }) => {
  const [playFields, setPlayFields] = useState(
    generatePlayFields(NUMBER_OF_FIELDS)
  );
  const [hit, setHit] = useState([]);
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

  const updateScore = (id, isMolePresent) => {
    if (isMolePresent & !hit.includes(id)) {
      setScore((prevState) => prevState + 1);
      setHit((prev) => [...prev, id]);
    } else if (!isMolePresent) {
      setScore((prevState) => prevState - 1);
    }
  };

  const handleFieldClick = (id, isMolePresent) => {
    updateScore(id, isMolePresent);

    setPlayFields((prevPlayFields) =>
      prevPlayFields.map((field) => {
        return {
          ...field,
          hasClicked: field.id === id ? true : field.hasClicked,
        };
      })
    );
    resetHasClicked(id);
  };

  useEffect(() => {
    setHit([]);
  }, [molePositions]);

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
