import './styles.css';
import { useState, useEffect } from 'react';

const cards = [
  { id: 1, key: 'A' },
  { id: 2, key: 'U' },
  { id: 3, key: 'K' },
  { id: 4, key: 'R' },
  { id: 3, key: 'K' },
  { id: 2, key: 'U' },
  { id: 1, key: 'A' },
  { id: 4, key: 'R' },
];

const cards16 = [
  { id: 1, key: 'A' },
  { id: 2, key: 'U' },
  { id: 3, key: 'K' },
  { id: 4, key: 'R' },
  { id: 5, key: 'K' },
  { id: 6, key: 'U' },
  { id: 7, key: 'A' },
  { id: 8, key: 'R' },
  { id: 1, key: '1' },
  { id: 2, key: '2' },
  { id: 3, key: '3' },
  { id: 4, key: '4' },
  { id: 5, key: '3' },
  { id: 6, key: '2' },
  { id: 7, key: '1' },
  { id: 8, key: '4' },
];

const cards24 = [
  { id: 1, key: 'A' },
  { id: 2, key: 'U' },
  { id: 3, key: 'K' },
  { id: 4, key: 'R' },
  { id: 5, key: 'K' },
  { id: 6, key: 'U' },
  { id: 7, key: 'A' },
  { id: 8, key: 'R' },
  { id: 1, key: '1' },
  { id: 2, key: '2' },
  { id: 3, key: '3' },
  { id: 4, key: '4' },
  { id: 5, key: '3' },
  { id: 6, key: '2' },
  { id: 7, key: '1' },
  { id: 8, key: '4' },
  { id: 9, key: '8' },
  { id: 10, key: '7' },
  { id: 11, key: '6' },
  { id: 11, key: '6' },
  { id: 10, key: '7' },
  { id: 9, key: '8' },
  { id: 12, key: '9' },
  { id: 12, key: '9' },
];
const getRandomInt = (max) => Math.floor(Math.random() * max) + 1;
const game_time = 120;
const keys = ['A', 'U', 'K', 'R', '5', 'S', 'P', 'W', 'Q', 'F'];

export const MemoryGame = () => {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [gameCards, setCards] = useState(cards);
  const [numCards, setNumCards] = useState(8);
  const [gameCards16, setgameCards16] = useState(cards16);
  const [gameCards24, setCards24] = useState(cards24);
  const [initialTime, setInitialTime] = useState(game_time);
  const [isGameEnded, setGameEnded] = useState(false);
  const [memoCardsId, setMemoCardsId] = useState(getRandomInt(8));
  const [memoCards16Id, setMemoCards16Id] = useState(getRandomInt(16));
  const [memoCards24Id, setMemoCards24Id] = useState(getRandomInt(24));
  const [intervalId, setIntervalId] = useState(null);
  const [time, setTime] = useState(game_time);
  const [score, setScore] = useState(0);

  const handleStartGame = () => {
    setCards(shuffleArray(gameCards));

    setTime(game_time);
    setScore(0);
    setIsGameStarted(true);
  };

  const handleStopGame = () => {
    setIsGameStarted(false);
  };
  // zmiana kart dla innej gry
  useEffect(() => {
    setInterval(() => {
      setMemoCardsId(getRandomInt(8));
      setMemoCards16Id(getRandomInt(16));
      setMemoCards24Id(getRandomInt(24));
    }, isGameEnded);
  });

  function shuffleArray(s) {
    for (let i = s.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [s[i], s[j]] = [s[j], s[i]];
    }
    return s;
  }
  function handleClick(id) {}
  useEffect(() => {
    if (isGameStarted) {
      const intervalId = setInterval(() => {
        time > 0 ? setTime(time - 1) : handleStopGame();
      }, 1000);

      return () => clearInterval(intervalId);
    }
  }, [time, isGameStarted]);

  return (
    <div className="memory-game">
      <h2>MEMO</h2>
      <h2>
        Gra polegająca na zapamiętywaniu odkrytych kafli i łączeniu ich w pary
      </h2>

      {isGameStarted ? (
        <div>
          {/* CZAS do końca  */}
          <div className="option-wrapper">
            <div className="title">Czas do końca</div>
            <div className="content">
              {/* disable true oznacza, że przycisk jest wyłączony */}
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
                PASS
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
        </div>
      ) : (
        <div>
          <div className="option-wrapper">
            {/* LICZBA ELEMENTÓW */}

            {/* LICZBA Kart */}
            <div className="option-wrapper">
              <div className="title">Liczba kart</div>
              <div className="content">
                <button
                  className={numCards === 8 ? 'current' : ''}
                  onClick={() => setNumCards(8)}
                >
                  8 kart
                </button>
                <button
                  className={numCards === 16 ? 'current' : ''}
                  onClick={() => setNumCards(16)}
                >
                  16 kart
                </button>
                <button
                  className={numCards === 24 ? 'current' : ''}
                  onClick={() => setNumCards(24)}
                >
                  24 karty
                </button>
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
