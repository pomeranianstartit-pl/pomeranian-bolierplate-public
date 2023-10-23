

import { StartMenu } from './components/StartMenu';
import { GameMenu } from './components/GameMenu';
import { Playground } from './components/Playground';

export const MemoGame = () => {
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
};*/
import { useState } from 'react';
import './styles.css';

const game_time = 95;

export const MemoGame = () => {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [isGameEnded, setIsGameEnded] = useState(false);
  const [time, setTime] = useState(game_time);
  const [moves, setMoves] = useState(0);

  const cards = ['A', 'U', 'K', 'R', '8', '4', '2', 'Z'];

  // Funkcja do tasowania kart
  const shuffleArray = (array) => {
    let shuffledArray = array.slice();
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };

  // Funkcja do przygotowania planszy gry
  const prepareGameBoard = () => {
    const shuffledCards = shuffleArray([...cards, ...cards]);
    return shuffledCards.map((card, index) => ({
      id: index,
      value: card,
      isFlipped: false,
      isSolved: false,
    }));
  };

  const [gameBoard, setGameBoard] = useState(prepareGameBoard());

  const handleStartGame = () => {
    setIsGameEnded(false);
    setIsGameStarted(true);
    setTime(game_time);
    setMoves(0);
    setGameBoard(prepareGameBoard());
  };

  const handleStopGame = () => {
    setIsGameStarted(false);
    setIsGameEnded(true);
  };

  const handleCardClick = (id) => {
    if (!isGameEnded) {
      setGameBoard((prevBoard) => {
        const newBoard = prevBoard.map((card) =>
          card.id === id ? { ...card, isFlipped: true } : card
        );
        const flippedCards = newBoard.filter(
          (card) => card.isFlipped && !card.isSolved
        );
        if (flippedCards.length === 2) {
          setMoves((prevMoves) => prevMoves + 1);
          setTimeout(() => checkMatch(flippedCards), 1000);
        }
        return newBoard;
      });
    }
  };

  const checkMatch = (flippedCards) => {
    if (flippedCards[0].value === flippedCards[1].value) {
      setGameBoard((prevBoard) =>
        prevBoard.map((card) =>
          card.isFlipped && !card.isSolved ? { ...card, isSolved: true } : card
        )
      );
    } else {
      setGameBoard((prevBoard) =>
        prevBoard.map((card) =>
          card.isFlipped ? { ...card, isFlipped: false } : card
        )
      );
    }
  };

  return (
    <div className="memo-game">
      <h4 className="title">
        Gra polegająca na zapamiętywaniu odkrytych kafli i łączeniu ich w pary
      </h4>

      {isGameStarted ? (
        <div>
          <div>
            <div className="game-options">
              <div className="title">CZAS GRY</div>
              <div className="content">
                <button disabled={true}>{time}</button>
              </div>
            </div>
            <div className="game-options">
              <div className="title">LICZBA RUCHÓW</div>
              <div className="content">
                <button disabled>{moves}</button>
              </div>
            </div>
            <div className="game-options">
              <div className="title">PRZYCISKI STERUJĄCE</div>
              <div className="content">
                <button className="pass" onClick={handleStopGame}>
                  PASS
                </button>
              </div>
            </div>
          </div>
          <div className="game-board">
            {gameBoard.map((card) => (
              <div
                key={card.id}
                onClick={() => handleCardClick(card.id)}
                className={`card ${
                  card.isFlipped || card.isSolved ? 'flipped' : ''
                }`}
              >
                {card.isFlipped || card.isSolved ? card.value : '?'}
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="memo-game">
          <div className="game-options">
            <div className="title">LICZBA ELEMENTÓW</div>
            <div className="content">
              <button>8 elementów</button>
              <button>16 elementów</button>
              <button>20 elementów</button>
            </div>
          </div>
          <div className="game-options">
            <div className="title">PRZYCISKI STERUJĄCE</div>
            <div className="content">
              <button onClick={handleStartGame}>START</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
