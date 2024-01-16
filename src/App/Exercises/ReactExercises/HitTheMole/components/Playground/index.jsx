import { useState } from 'react';

import { generateArrayOfFields } from '../../helper';
import mole from './mole.svg';
import './styles.css';

export const Playground = ({
  molePositionId,
  molePositionId1,
  molePositionId2,
  moleAmount,
  score,
  setScore,
}) => {
  const [gameFields, setGameFields] = useState(generateArrayOfFields(10));

  const handleFieldClick = (id) => {
    const isMolePresent = id === molePositionId;
    const isMolePresent1 = id === molePositionId1;
    const isMolePresent2 = id === molePositionId2;

    handleUpdateScore(isMolePresent || isMolePresent1 || isMolePresent2);

    setGameFields((prevState) =>
      prevState.map((field) => ({
        ...field,
        hasClicked: field.id === id,
      }))
    );

    handleResetClick();
  };

  const handleResetClick = () => {
    setTimeout(() => {
      setGameFields(
        gameFields.map((field) => ({ ...field, hasClicked: false }))
      );
    }, 100);
  };

  const handleUpdateScore = (isMoleHit) => {
    setScore((prevScore) => prevScore + (isMoleHit ? 1 : -1));
  };

  return (
    <div>
      <div className="container-all-fields">
        {gameFields.map(({ id, hasClicked }) => {
          const isMolePresent = id === molePositionId;
          const isMolePresent1 = id === molePositionId1;
          const isMolePresent2 = id === molePositionId2;

          const className = `field ${
            hasClicked
              ? isMolePresent || isMolePresent1 || isMolePresent2
                ? 'field-green'
                : 'field-red'
              : ''
          }`;

          return (
            <div
              onClick={() => handleFieldClick(id)}
              key={id}
              className={className}
            >
              {isMolePresent && (
                <img className="image-mole" src={mole} alt="mole" />
              )}
              {moleAmount > 1 && isMolePresent1 && (
                <img className="image-mole" src={mole} alt="mole" />
              )}
              {moleAmount > 2 && isMolePresent2 && (
                <img className="image-mole" src={mole} alt="mole" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
