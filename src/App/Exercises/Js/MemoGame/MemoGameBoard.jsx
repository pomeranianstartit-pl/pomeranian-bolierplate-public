import React from 'react';
import './styles.css';

export const MemoGameBoard = ({ gameArray, handleCellClick, stage, renderElement, gameStarted }) => {
  return (
     <div className='stage'>{gameStarted && stage.map(renderElement)}</div>
    //   <div>
    //     <h4>CZAS GRY</h4>
    //     <h4>LICZBA RUCHÓW</h4>
    //   <div className="board">
    //   {gameArray.map(() => {
    //     return <div className="square" onClick={handleCellClick}></div>;
    //   })}
    //  </div>
    //  </div>
    //  </div>
);
  };

  export default MemoGameBoard;