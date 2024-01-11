import { useState } from 'react';

import { generateArrayOfFields } from '../../helper';
import mole from './mole.svg';
import './styles.css';

export const Playground = ({
  molePositionId,
  molePositionId1,
  score,
  setScore,
}) => {
  const [gameFields, setGameFields] = useState(generateArrayOfFields(10));

  const handleFieldClick = (id, isMolePresent, isMolePresent1) => {
    // handleUpdateScore1(isMolePresent1);
    handleUpdateScore(isMolePresent);
    setGameFields((prevState) =>
      prevState.map((field) => {
        return {
          ...field,
          hasClicked: field.id === id ? true : false,
        };
      })
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

  const handleUpdateScore = (isMolePresent) => {
    isMolePresent
      ? setScore((prevScore) => prevScore + 1)
      : setScore((prevScore) => prevScore - 1);
  };
  // const handleUpdateScore1 = (isMolePresent1) => {
  //   isMolePresent1
  //     ? setScore((prevScore) => prevScore + 1)
  //     : setScore((prevScore) => prevScore - 1);
  // };
  return (
    <div>
      <div className="container-all-fields">
        {gameFields.map(({ id, hasClicked }) => {
          const isMolePresent = id === molePositionId;
          const isMolePresent1 = id === molePositionId1;
          const isClickedWithMole = isMolePresent && hasClicked;
          const isClickedWithWithoutMole = !isMolePresent && hasClicked;

          const clickedWithMoleClassName = isClickedWithMole
            ? 'field-green'
            : '';
          const clickedWithoutMoleClassName = isClickedWithWithoutMole
            ? 'field-red'
            : '';

          const className = `field ${clickedWithMoleClassName} ${clickedWithoutMoleClassName}`;

          return (
            <div
              onClick={() => handleFieldClick(id, isMolePresent)}
              key={id}
              className={className}
            >
              {isMolePresent && (
                <img className="image-mole" src={mole} alt="mole" />
              )}
              {isMolePresent1 && (
                <img className="image-mole" src={mole} alt="mole" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
