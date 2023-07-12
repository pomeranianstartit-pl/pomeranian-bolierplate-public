import React from 'react';
import LetterIMG from './letter.png';

export const MemoGameBoard = ({ memoArray, onMemoClick, selectedMemoCount }) => {
  return (
    <div className="container">
      <div className="memo-game-board">
        {memoArray.slice(0, selectedMemoCount).map((memo, index) => (
          <div key={index} className={`memo-cell ${!memo.isVisible ? 'hidden' : ''}`}>
            {memo.isVisible && (
              <img src={LetterIMG} alt="Letter" onClick={() => onMemoClick(index)} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};


