import React from 'react';

export const MemoGameScore = ({ moveCount, score, getAmountOfChar }) => {
  return (
    <div className="memoGameScore">
      <h3>
        Gratulacje odgadłeś planszę {getAmountOfChar} znaków w czasie{' '}
        {Math.floor(score / 60) + ':' + ('0' + (score % 60)).slice(-2)} w{' '}
        {/*TODO: make function */}
        {moveCount} ruchach!
      </h3>
    </div>
  );
};
