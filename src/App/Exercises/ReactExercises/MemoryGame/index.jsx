import React, { useState } from 'react';

import { StartMenu } from '../MemoryGame/Components/StartMenu';
import { GameMenu } from '../MemoryGame/Components/GameMenu';
import { Playground } from '../MemoryGame/Components/PlayGround';

export const Exercise = () => {
  const [isGameStarted, setGameStarted] = useState(false);
  const [isGameEnded, setGameEnded] = useState(false);
  const [boardSize, setBoardSize] = useState(16);

  const handleStart = () => {
    setGameStarted(true);
    //...
  };

  const handleStop = () => {
    setGameStarted(false);
    //...
  };

  return (
    <div>
      <h1>Memo game</h1>
      {/* <StartMenu /> */}
      <div>
        {isGameEnded && 'Koniec gry'}
        {!isGameStarted && (
          <StartMenu setBoardSize={setBoardSize} startGame={handleStart} />
        )}
        {isGameStarted && (
          <>
            <GameMenu endGame={handleStop} />
            <Playground
              setGameEnded={setGameEnded}
              setGameStarted={setGameStarted}
              boardSize={boardSize}
            />
          </>
        )}
      </div>
    </div>
  );
};
