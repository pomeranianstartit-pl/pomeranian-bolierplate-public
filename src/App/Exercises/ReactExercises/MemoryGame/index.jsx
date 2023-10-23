
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
=======
import './styles.css';
import { useState } from 'react';

const cards = [
  { id: 1, key: 'A' },
  { id: 2, key: 'U' },
  { id: 3, key: 'K' },
  { id: 4, key: 'R' },
  { id: 5, key: 'K' },
  { id: 6, key: 'U' },
  { id: 7, key: 'A' },
  { id: 8, key: 'R' },
];

const getRandomInt = (max) => Math.floor(Math.random() * max) + 1;
const game_time = 120;
const keys = ['A', 'U', 'K', 'R', '5', 'S', 'P', 'W', 'Q', 'F'];

export const MemoryGame = () => {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [gameCards, setgameCards] = useState(cards);
  const [initialTime, setInitialTime] = useState(game_time);
  const [isGameEnded, setGameEnded] = useState(false);
  const [time, setTime] = useState(game_time);
  const [score, setScore] = useState(0);
  const handleStartGame = () => {
    setTime(game_time);
    setScore(0);
    setIsGameStarted(true);
  };

  const handleStopGame = () => {
    setIsGameStarted(false);
  };

  function shuffleArray(s) {
    for (let i = s.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [s[i], s[j]] = [s[j], s[i]];
    }
    return s;
  }
  function handleClick(id) {}

  return (
    <div className="memory-game">
      <h2>
        Gra polegająca na zapamiętywaniu odkrytych kafli i łączeniu ich w pary
      </h2>

      {isGameStarted ? (
        <div>
          {/* CZAS do końca  */}
          <div className="option-wrapper">
            <div className="title">Czas do końca</div>
            <div className="content">
              <button disabled={true}>{time}</button>
            </div>
          </div>

          {/* WYNIK */}
          <div className="option-wrapper">
            <div className="title">Wynik</div>
            <div className="content">
              <button disabled={true}>{score}</button>
            </div>
          </div>

          {/* PRZYCISKI STERUJĄCE */}
          <div className="option-wrapper">
            <div className="title">Przyciski sterujące</div>
            <div className="content">
              <button className="stop" onClick={handleStopGame}>
                Stop
              </button>
            </div>
          </div>

          {/* WIDOK gry memo  */}
          {/*  */}
          <div className="board">
            {gameCards.map((item, index) => (
              <div className={'card'} onClick={() => handleClick(item.id)}>
                {item.key}
              </div>
            ))}
          </div>

          <div className="game-over">Gratulacje, zdobyłeś {score} punktów</div>

          {/* CZAS gry */}
          <div className="option-wrapper">
            <div className="title">Czas gry</div>
            <div className="content">
              <button className="current">1:35</button>
            </div>
          </div>

          {/* liczba ruchów */}
          <div className="option-wrapper">
            <div className="title"></div>
            <div className="content">
              <button className="current">2</button>
            </div>
          </div>

          {/* PRZYCISKI STERUJĄCE */}
          <div className="option-wrapper">
            <div className="title">Przyciski sterujące</div>
            <div className="content">
              <button onClick={handleStartGame}>PASS</button>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="option-wrapper">
            {/* LICZBA ELEMENTÓW */}

            <div>
              <div className="content">
                <div className="title">LICZBA ELEMENTÓW</div>
                <button class>8 elementów</button>
                <button class>16 elementów</button>
                <button class>20 elementów</button>
              </div>
            </div>

            {/* PRZYCISKI STERUJĄCE */}
            <div className="option-wrapper">
              <div>
                <div className="content">
                  <div className="title">PRZYCISKI STERUJĄCE</div>

                  <button onClick={handleStartGame}>Start</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
