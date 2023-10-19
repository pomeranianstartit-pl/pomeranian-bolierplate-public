import { useState } from 'react';
import './styles.css';

const game_time = 95;

export const MemoGame = () => {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [isGameEnded, setIsGameEnded] = useState(false);
  const [time, setTime] = useState(game_time);

  const handleStartGame = () => {
    setIsGameEnded(false);
    setIsGameStarted(true);
    setTime(game_time);
  };

  const handleStopGame = () => {
    setIsGameStarted(false);
    setIsGameEnded(true);
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
                <button disabled>2</button>
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
          <div className="game-board"></div>
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
