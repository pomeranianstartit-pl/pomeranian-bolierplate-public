import React from 'react';
import './styles.css';

const MemoBoard = ({ gameArray, handleCellClick }) => {
  return (
    <div className="board" >
      {gameArray.map(() => {
        return <div className="square" onClick={handleCellClick}></div>;
      })}
    </div>
  );
};

export default MemoBoard;


