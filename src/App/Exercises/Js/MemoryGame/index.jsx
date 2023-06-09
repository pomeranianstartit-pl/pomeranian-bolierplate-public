// import './styles.css';
// import { Button } from '../MemoryGame/Button/Button';
// import { Menu } from '../MemoryGame/MenuView';
// import './MenuView.css';
import { GameView } from './GameView/GameView';
import { MenuView } from './MenuView/MenuView';

export function MemoryGame() {
  return (
    <>
      <h4>Memory game</h4>
      <p>Gra plegająca na</p>
      <MenuView />
      <GameView />
    </>
  );
}
