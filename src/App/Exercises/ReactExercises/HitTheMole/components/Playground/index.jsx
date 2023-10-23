import { useState } from 'react';

import { generateArrayOfFields } from '../../helper';

import './styles.css';

export const Playground = ({ molePositionId, score, setScore }) => {
  const [gameFields, setGameFields] = useState(generateArrayOfFields(10));

  const handleFieldClick = (id, isMolePresent) => {
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
    }, 200);
  };

  const handleUpdateScore = (isMolePresent) => {
    isMolePresent
      ? setScore((prevScore) => prevScore + 1)
      : setScore((prevScore) => prevScore - 1);
  };

  return (
    <div>
      <div style={{ display: 'flex' }}>
        {gameFields.map(({ id, hasClicked }) => {
          const isMolePresent = id === molePositionId;
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
              {isMolePresent && 'KRET'}
            </div>
          );
        })}
      </div>
    </div>
  );
};
