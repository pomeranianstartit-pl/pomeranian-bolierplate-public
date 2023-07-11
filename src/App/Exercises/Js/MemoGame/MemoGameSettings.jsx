import React from 'react';

export const MemoGameSettings = ({
  startStopGame,
  gameStarted,
}) => {
  const memoCountElements = [
    { label: '8 elementów' },
    { label: '16 elementów' },
    { label: '20 elementów' },
  ];
  return (
      <div className="memoGameOptions">
        <p>
        Gra polegająca na zapamiętywaniu odkrytych kafli i łączeniu ich w pary
        </p>
        </div>
  );
};
export default MemoGameSettings;