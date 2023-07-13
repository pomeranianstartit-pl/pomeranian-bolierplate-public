import React from 'react';
import './styles.css';

const MemoBoard = ({ gameArray, handleCellClick }) => {
  const handleMouseEnter = (index) => {
    const square = document.getElementById(`square-${index}`);
    square.classList.add('grabCursor');
  };

  const handleMouseLeave = (index) => {
    const square = document.getElementById(`square-${index}`);
    square.classList.remove('grabCursor');
  };

  return (
    <div className="board">
      {gameArray.map((element, index) => (
        <div
          className={`square ${element.isVisible ? 'visible' : ''} ${element.isGuessed ? 'matched' : ''}`}
          onClick={() => handleCellClick(index)}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={() => handleMouseLeave(index)}
          key={index}
          id={`square-${index}`}
        >
          {element.isVisible && element.character}
        </div>
      ))}
    </div>
  );
};

export default MemoBoard;



