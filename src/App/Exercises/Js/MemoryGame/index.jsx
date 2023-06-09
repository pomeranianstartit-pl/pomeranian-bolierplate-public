// import './styles.css';
// import { Button } from '../MemoryGame/Button/Button';
// import { Menu } from '../MemoryGame/MenuView';
// import './MenuView.css';
import { useState } from 'react';
import { GameView } from './GameView/GameView';
import { MenuView } from './MenuView/MenuView';
import { Playground } from './Playground/Playground';

export function MemoryGame({}) {
  const [isGameStarted, setGameStarted] = useState(false);

  return (
    <>
      <h4>Memory game</h4>
      <p>Gra plegająca na</p>
      {isGameStarted ? (
        <GameView setGameStarted={setGameStarted} />
      ) : (
        <MenuView setGameStarted={setGameStarted} />
      )}
      {isGameStarted && <Playground />}
      {/* <MenuView /> */}
      {/* <GameView />
      <Playground /> */}
    </>
  );
}
