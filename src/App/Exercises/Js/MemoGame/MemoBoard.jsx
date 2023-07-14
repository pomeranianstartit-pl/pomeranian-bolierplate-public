import React, { useRef, useEffect } from 'react';
import './styles.css';

const MemoBoard = ({ gameArray, handleCellClick, selectedCards }) => {
  const boardRef = useRef(null);

  useEffect(() => {
    const squares = Array.from(boardRef.current.getElementsByClassName('square'));
    const matchedSquares = squares.filter((square) => square.classList.contains('matched'));
    matchedSquares.forEach((square) => square.classList.add('matchedGreen'));
  }, [gameArray]);

  const handleMouseEnter = (index) => {
    const square = document.getElementById(`square-${index}`);
    square.classList.add('grabCursor');
  };

  const handleMouseLeave = (index) => {
    const square = document.getElementById(`square-${index}`);
    square.classList.remove('grabCursor');
  };

  return (
    <div className="board" ref={boardRef}>
      {gameArray.map((element, index) => (
       <div
       className={`square ${element.isVisible ? 'visible' : ''} ${element.isGuessed ? 'matchedGreen' : ''} ${!element.isGuessed && selectedCards.length === 2 && selectedCards.includes(element) ? 'incorrect' : ''}`}
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




