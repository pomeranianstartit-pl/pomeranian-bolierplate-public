import React from 'react';
import './styles.css';

export const MemoGameBoard = ({
  startStopGame,
  gameStarted,
  score,
  clicks,
  memoArray,
  boardSize,
  classOfElement,
  revealCard,
}) => {

  return (
    <div>
      <div className="gameStatus">
        <h4>CZAS GRY </h4>
        {score}
        <h4>LICZBA RUCHÓW </h4>
        {clicks}
        <h4>PRZYCISKI STERUJĄCE</h4>
        <button onClick={startStopGame}>
          {gameStarted ? 'PASS' : 'START'}
        </button>
      </div>
      <div
        className="memoGame"
        style={{
          gridTemplateColumns: `repeat(${boardSize}, 66px)`,
        }}
      >
         {memoArray.map((card) => (
          <div className="cell">
            <div
              key={card.id}
              className={classOfElement(card)}
              onClick={() => revealCard(card)}
            >
              <div className="symbol">
                <h3>{(card.isGuessed || card.isVisible) && card.character}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
  